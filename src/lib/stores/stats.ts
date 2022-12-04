import type { Gamestats } from "$lib/types/stats";
import { writable } from "svelte/store";

const initial: Gamestats = {
  xp: 0,
  winStreak: 0,
  streak: 0,
  visit: 0,
  userId: "",
};

export const gamestats = writable<Gamestats>(initial);
