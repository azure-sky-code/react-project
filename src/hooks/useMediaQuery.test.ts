import { renderHook, act } from '@testing-library/react'
import { vi } from 'vitest'
import { useMediaQuery } from './useMediaQuery'

describe('useMediaQuery', () => {
    let listeners: Array<() => void> = []
    let currentMatches = false
    let mediaQueryListMock: any

    beforeEach(() => {
        listeners = []
        currentMatches = false

        mediaQueryListMock = {
            get matches() {
                return currentMatches
            },
            media: '',
            addEventListener: (event: string, callback: () => void) => {
                if (event === 'change') listeners.push(callback)
            },
            removeEventListener: vi.fn(),
            addListener: undefined as ((cb: () => void) => void) | undefined,
            removeListener: undefined as ((cb: () => void) => void) | undefined,
            dispatchEvent: () => {
                listeners.forEach((cb) => cb())
            },
        }

        vi.stubGlobal('matchMedia', (query: string) => {
            mediaQueryListMock.media = query
            return mediaQueryListMock
        })
    })

    afterEach(() => {
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
        
        expect(mediaQueryListMock.removeEventListener).not.toHaveBeenCalled()
        
        unmount()
        
        expect(mediaQueryListMock.removeEventListener).toHaveBeenCalledWith(
            'change',
            expect.any(Function)
        )
    })

    it('兼容舊版 addListener/removeListener', () => {
        mediaQueryListMock.addEventListener = undefined
        mediaQueryListMock.removeEventListener = undefined
        mediaQueryListMock.addListener = (cb: () => void) => listeners.push(cb)
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