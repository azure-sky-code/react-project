import { useState, useEffect } from "react";

/**
 * @fileoverview 響應式佈局 Hook：監聽 CSS Media Query 的變化狀態
 * - 安全處理非瀏覽器環境（SSR）
 * - 兼容舊版瀏覽器的 addListener/removeListener
 * @param query 要監聽的 CSS Media Query 字串，例如 "(min-width: 768px)"
 * @returns 當前 Media Query 是否匹配
 */
export function useMediaQuery(query: string): boolean {
    const getInitial = (): boolean =>
        typeof window !== 'undefined' && 'matchMedia' in window
            ? window.matchMedia(query).matches
            : false;
    const [matches, setMatches] = useState<boolean>(getInitial);

    useEffect(() => {
        if (typeof window === 'undefined' || !('matchMedia' in window)) return;

        const media: MediaQueryList = window.matchMedia(query);
        const listener = (ev?: MediaQueryListEvent) => setMatches(ev?.matches ?? media.matches);

        // 進入時同步一次，避免外部變更 query 導致狀態落後
        listener();

        if (typeof media.addEventListener === 'function') {
            media.addEventListener('change', listener);
            return () => media.removeEventListener('change', listener);
        }
        if (typeof media.addListener === 'function') {
            media.addListener(listener);
            return () => media.removeListener(listener);
        }

        return undefined;
    }, [query]);

    return matches;
}
