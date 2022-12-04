const helps = [
  "GENERAL",
  "WOORD",
  "BEE",
  "SCRAMBLED",
  "PAIR",
  "COOKIE",
  "WRITER",
] as const;

export type HelpType = typeof helps[number];
