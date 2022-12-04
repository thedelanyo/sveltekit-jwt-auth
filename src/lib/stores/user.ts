import type { User } from "$lib/types/user";
import { writable } from "svelte/store";

export const viewer: User = {
  name: "",
  username: "",
  email: "",
  country: "",
  phone: "",
  about: "",
  avatar: { src: "" },
  uid: "",
  role: "viewer",
  handles: [],
};

export const user = writable<User>(viewer);
