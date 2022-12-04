export const abbrevNum = (number = 0) => {
  return Intl.NumberFormat("en", { notation: "compact" }).format(number);
};
