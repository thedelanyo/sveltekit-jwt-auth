import bcrypt from "bcryptjs";

export const hashString = async (pass: string) => {
  const hash = await bcrypt.hash(pass, 10);

  return hash;
};

export const compareHash = async (pass: string, hashed: string) => {
  return await bcrypt.compare(pass, hashed);
};
