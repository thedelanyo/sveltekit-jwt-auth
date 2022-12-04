import type { HelpType } from "$lib/types/helps";
import { isTheme, type Theme } from "$lib/types/theme";
import type { Cookies } from "@sveltejs/kit";

export const themeFromCookie = (cookies: Cookies): Theme => {
  const theme = cookies.get("theme");

  return isTheme(theme) ? theme : "auto";
};

export const sfxFromCookie = (cookies: Cookies): boolean => {
  const sfxOn = cookies.get("sfxOn");

  if (sfxOn === undefined) return true;

  return sfxOn === "false" ? false : true;
};

export const helpsFromCookie = (cookies: Cookies): HelpType[] => {
  const helps = cookies.get("helps");

  return helps ? JSON.parse(helps) : [];
};

export const sessionidFromCookie = (cookies: Cookies) => {
  return cookies.get("sessionid") || "";
};

export const saveToCookie = (
  cookies: Cookies,
  key: string,
  value: string,
  maxAge: number,
  secure: boolean
) => {
  cookies.set(key, value, {
    path: "/",
    maxAge,
    secure,
  });
};
