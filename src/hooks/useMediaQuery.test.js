import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
    let listeners = []
    let currentMatches = false
    let mediaQueryListMock

    beforeEach(() => {
        listeners = []
        currentMatches = false

        mediaQueryListMock = {
            // 使用 getter 確保每次 Hook 訪問時都能讀取到最新的 currentMatches
            get matches() {
                return currentMatches
            },
            media: '',
            // 主要路徑：新 API addEventListener/removeEventListener
            addEventListener: (event, callback) => {
                if (event === 'change') listeners.push(callback)
            },
            removeEventListener: vi.fn(),
            // 舊 API：在需要時由測試替換成 addListener/removeListener
            addListener: undefined,
            removeListener: undefined,
            dispatchEvent: () => {
                // const event = { matches: currentMatches }
                // listeners.forEach((cb) => cb(event))
                listeners.forEach((cb) => cb())
            },
        }

        // 模擬全局 matchMedia 函數
        vi.stubGlobal('matchMedia', (query) => {
            mediaQueryListMock.media = query
            return mediaQueryListMock
        })
    })

    afterEach(() => {
        // 在每個測試後，恢復所有被 vi.stubGlobal 替換的全局變數
        vi.unstubAllGlobals()
    })

    it('初始值應該為 false', () => {
        currentMatches = false
        const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))
        expect(result.current).toBe(false)
    })

    it('初始值應該為 true', () => {
        currentMatches = true
        const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))
        expect(result.current).toBe(true)
    })

    it('當媒體條件變化時，應該更新狀態', () => {
        currentMatches = false
        const { result } = renderHook(() => useMediaQuery('(min-width: 600px)'))
        expect(result.current).toBe(false)

        act(() => {
            currentMatches = true
            mediaQueryListMock.dispatchEvent()
        })
        expect(result.current).toBe(true)

        act(() => {
            currentMatches = false
            mediaQueryListMock.dispatchEvent()
        })
        expect(result.current).toBe(false)
    })

    it('在卸載時應該移除監聽器', () => {
        currentMatches = false
        const { unmount } = renderHook(() => useMediaQuery('(min-width: 600px)'))
        
        // 確保初始時未被調用
        expect(mediaQueryListMock.removeEventListener).not.toHaveBeenCalled()
        
        // 卸載 Hook
        unmount()
        
        // 斷言 Hook 的清理函數被正確執行
        expect(mediaQueryListMock.removeEventListener).toHaveBeenCalledWith(
            'change',
            expect.any(Function)
        )
    })

    it('兼容舊版 addListener/removeListener', () => {
        // 將 mock 切換成舊 API 模式
        mediaQueryListMock.addEventListener = undefined
        mediaQueryListMock.removeEventListener = undefined
        mediaQueryListMock.addListener = (cb) => listeners.push(cb)
        mediaQueryListMock.removeListener = vi.fn()

        currentMatches = false
        const { result, unmount } = renderHook(() => useMediaQuery('(min-width: 600px)'))
        expect(result.current).toBe(false)

        act(() => {
            currentMatches = true
            mediaQueryListMock.dispatchEvent()
        })
        expect(result.current).toBe(true)

        unmount()
        expect(mediaQueryListMock.removeListener).toHaveBeenCalledWith(expect.any(Function))
    })
})