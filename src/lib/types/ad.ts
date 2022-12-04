export type AdFormat = "VIDEO" | "BANNER" | "INTERSTITIAL" | "TEXT";

export type AdReach = "NATIONWIDE" | "REGIONAL" | "LOCAL";

export type AdType = {
  id: string;
  format: AdFormat;
  banners?: string[];
  video?: string;
  text?: string;
  inters?: string[];
  message: string;
  customerId: string;
  impressions: number;
  budget: number;
  views: number;
  referral: { text: string; href: string };
  status: "PAUSED" | "RUNNING" | "ENDED";
  reach: { stretch: AdReach; region: string; city: string };
};
