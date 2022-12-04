import { dev } from "$app/environment";

export const games = [
  {
    name: "Woord",
    href: "/games/woord",
    thumbnail: "/games/woord.jpg",
    id: "5ec043be",
    disabled: false,
    desc: "Guess the woord of the day in six tries.",
  },

  {
    name: "Match Pairs",
    href: "/games/pairs",
    thumbnail: "/games/pairs.jpg",
    id: "8918fd90",
    disabled: false,
    desc: "Find max score by matching pairs.",
  },

  {
    name: "Spell Bee",
    href: "/games/bee",
    thumbnail: "/games/bee.jpg",
    id: "fc6df4bd",
    disabled: !dev,
    desc: "Make words with 7 letters within 5 mins.",
  },

  {
    name: "Scrambled",
    href: "/games/scrambled",
    thumbnail: "/games/scrambled.jpg",
    id: "8e710662",
    disabled: false,
    desc: "Find the real word in three tries.",
  },
];
