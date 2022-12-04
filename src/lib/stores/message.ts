import type { MessageType } from "$lib/types/utils";
import { writable } from "svelte/store";

export const message = writable<MessageType>({ type: "auto", text: "" });
