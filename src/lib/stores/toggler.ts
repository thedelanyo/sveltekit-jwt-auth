import type { EditorState } from "$lib/types/editor";
import { writable } from "svelte/store";

export const toggler = writable<string>("");

export const editorState = writable<EditorState>("EDITING");
