import type { MessageType } from "$lib/types/utils";
import { message } from "$lib/stores/message";

export let setMessage = ({ type, text }: MessageType, duration = 5000) => {
  message.set({ type, text });

  setTimeout(() => {
    message.set({ type: "auto", text: "" });
  }, duration);
};
