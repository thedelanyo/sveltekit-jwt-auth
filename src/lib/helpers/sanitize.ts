import DOMPurify from "dompurify";

export const sanitizeDOM = (source: string): string => {
  return DOMPurify.sanitize(source);
};
