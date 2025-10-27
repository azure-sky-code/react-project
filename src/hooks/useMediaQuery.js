import { useState, useEffect } from "react";

/**
 * @fileoverview 響應式佈局 Hook：監聽 CSS Media Query 的變化狀態。
 * @param {string} query - 要監聽的 CSS Media Query 字串，例如 "(min-width: 768px)"。
 * @returns {boolean} - 返回 當前 Media Query 是否匹配。
 */
export function useMediaQuery(query) {
    const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        const listener = () => setMatches(media.matches);
        media.addEventListener("change", listener);
        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matches;
}