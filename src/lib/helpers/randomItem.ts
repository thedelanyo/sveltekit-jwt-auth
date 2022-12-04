export const randomItem = <Type>(items: Type[]): Type => {
  let pos = Math.floor(Math.random() * items.length);
  return items[pos];
};
