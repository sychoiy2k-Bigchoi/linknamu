"use client";

import { useLayoutEffect } from "react";

export const THEME_KEY = "theme";

// <head>에서 첫 화면이 그려지기 전에 실행되어 저장된 테마(없으면 시스템 설정)를 적용합니다.
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  // 개발 모드의 Strict Mode 재마운트가 data-theme을 지우므로 다시 적용합니다.
  useLayoutEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    const theme =
      saved ??
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  function toggle() {
    const next = currentTheme() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {}
  }

  // 아이콘은 CSS(dark:)로 전환하므로 서버/클라이언트 렌더 결과가 항상 같습니다.
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="다크모드 전환"
      className="flex size-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-lg transition hover:bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-800"
    >
      <span className="dark:hidden">🌙</span>
      <span className="hidden dark:inline">☀️</span>
    </button>
  );
}
