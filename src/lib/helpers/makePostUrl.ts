import { slugify } from "./slugify";

export const makePostUrl = (title: string, postId: string) => {
  return `/reader/${slugify(title)}?id=${postId}`;
};
