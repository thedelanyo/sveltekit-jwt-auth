export const fetcher = async (
  path: string,
  method: string,
  body = {},
  header = {}
) => {
  return await fetch(path, {
    method,
    body: JSON.stringify(body),
    headers: header,
  });
};
