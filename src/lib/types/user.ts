export type SocialHandleTYpe = { name: string; href: string };

export type User = {
  name: string;
  email: string;
  country: string;
  phone: string;
  username: string;
  about: string;
  avatar: { src: string };
  uid: string;
  role: "viewer" | "user" | "admin";
  handles: SocialHandleTYpe[];
};
