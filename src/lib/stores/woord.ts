import type { WoordType } from "$lib/types/game";
import { writable } from "svelte/store";

const init: WoordType = { id: "", solution: "", guesses: [], rewarded: false };

export const woord = writable<WoordType>(init);
