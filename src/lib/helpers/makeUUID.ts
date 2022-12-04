import buffer from "buffer/index.js";

const buff = buffer.Buffer;

export const randomInt = () => {
  return Math.floor(Math.random() * Date.now());
};

export const makeUUID = (string: string) => {
  const stringUnit8 = new TextEncoder().encode(
    `${randomInt()}${Date.now()}${string}`
  );

  crypto.getRandomValues(stringUnit8);
  const hashBuffer = crypto.getRandomValues(stringUnit8);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2)).join("");

  const buffered = buff.from(hashHex).toString("base64");

  return buffered
    .replace(/\+/g, "")
    .replace(/\//g, "")
    .replace(/\=+$/, "")
    .slice(0, 15);
};
