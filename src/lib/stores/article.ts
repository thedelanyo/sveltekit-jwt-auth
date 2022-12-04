import type { ArticleData, ContentData } from "$lib/types/article";
import { writable } from "svelte/store";

export const initPost: ArticleData = {
  title: "",
  topic: { name: "", slug: "" },
  date: { published: 0, updated: 0 },
  thumbnail: { src: "", alt: "" },
  authorId: "",
  status: "DRAFT",
};

export const initContent: ContentData = {
  content: "",
  summary: "",
};

export const article = writable<ArticleData>(initPost);
export const articleContent = writable<ContentData>(initContent);

export type imageUploadType = { src: string; alt: string; filename: string };

export const imageSources = writable<imageUploadType[]>([]);
