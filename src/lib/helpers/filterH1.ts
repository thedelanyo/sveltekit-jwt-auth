export const filterH1 = (source: string) => {
  const rgx = /(<h1.*?>.*?<\/h1>)/g;

  return source.replace(rgx, "");
};
