import { writable } from "svelte/store";

export const woordGuesses = writable<string[]>([]);
