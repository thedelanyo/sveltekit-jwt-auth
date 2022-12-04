import type { SocialHandleTYpe } from "$lib/types/user";
import { writable } from "svelte/store";

type HandleType = {
  edited: boolean;
  handles: SocialHandleTYpe[];
};

const init: HandleType = {
  edited: false,
  handles: [],
};

export const socialHandle = writable<HandleType>(init);
