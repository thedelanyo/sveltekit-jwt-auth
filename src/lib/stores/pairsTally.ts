import { writable } from "svelte/store";

export const pairsTally = writable({ match: 0, moves: 0 });
