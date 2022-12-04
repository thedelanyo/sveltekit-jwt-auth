export const LSSave = <Type>(key: string, value: Type) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const LSGet = (key: string) => {
  const value = localStorage.getItem(key) || "";

  if (!value) return;

  return JSON.parse(value);
};

export const LSRemove = (key: string) => {
  localStorage.removeItem(key);
};
