import type { HelpType } from "$lib/types/helps";
import { writable } from "svelte/store";

export const helps = writable<HelpType[]>();
