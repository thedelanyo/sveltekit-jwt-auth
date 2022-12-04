export const shuffle = <Type>(array: Type[]) => {
  return array
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const shuffleSome = <Type>(array: Type[], pos: number) => {
  const item = array[pos];

  let items = array
    .filter((_, index) => index !== pos)
    .map((value) => ({ sort: Math.random(), value }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);

  items.splice(1, 0, item);

  return items;
};
