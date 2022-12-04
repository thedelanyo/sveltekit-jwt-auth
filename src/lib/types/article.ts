type Author = {
  username: string;
  name: string;
  avatarUrl: string;
  uid: string;
};

export type ArticleType = {
  id: string;
  title: string;
  topic: { name: string; slug: string };
  summary: string;
  date: { published: number; updated: number };
  thumbnail: { src: string; alt: string };
  content: string;
  author: Author;
  claps: number;
  views: number;
  readTime: number;
  status: "PUBLISHED" | "DRAFT";
};

export type CommentType = {
  id: string;
  articleId: string;
  message: string;
  claps: number;
  author: Author;
};

type PageViews = {
  id: string | number;
  title: string;
  slug: string;
  views: number;
};

export type WritingStats = {
  totalViews: number;
  posts: PageViews[];
};

export type ArticleData = {
  title: string;
  authorId: string;
  status: "PUBLISHED" | "DRAFT";
  topic: { name: string; slug: string };
  date: { published: number; updated: number };
  thumbnail: { src: string; alt: string };
  id?: string;
};

export type ContentData = {
  content: string;
  summary: string;
};
