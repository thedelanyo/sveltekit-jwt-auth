import { theme } from "$lib/stores/theme";
import type { MessageType } from "$lib/types/utils";
import toast from "svelte-french-toast";
import { get } from "svelte/store";

export const toaster = ({ type, message }: MessageType) => {
  const bgTheme = get(theme);

  const bg = bgTheme === "light" ? "var(--white)" : "var(--text-color)";

  const options = {
    style: `border-shadow: var(--shadow-inset); background: ${bg}; color: inherit;`,
  };

  if (type === "error") {
    return toast.error(message, options);
  }

  if (type === "success") {
    return toast.success(message, options);
  }
};
