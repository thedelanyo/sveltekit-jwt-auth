import { browser } from "$app/environment";
import type { Theme } from "$lib/types/theme";

export const deriveNextTheme = (currentTheme: Theme): Theme => {
  if (!browser) return currentTheme;

  if (currentTheme === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "light"
      : "dark";
  }

  return currentTheme === "dark" ? "light" : "dark";
};
