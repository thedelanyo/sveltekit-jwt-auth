import ipify from "ipify";

export const getUniqueView = async () => {
  const ip = await ipify({ endpoint: "https://api64.ipify.org" });

  return { route: ip.replaceAll(".", ""), ip };
};
