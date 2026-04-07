export const buildApiUrl = (
  path: string,
  params: Record<string, string> = {},
): string => {
  let base = '';

  if (process.env.NEXT_PUBLIC_BASE_URL) {
    base = process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    base = 'http://localhost:3000';
  }

  const url = new URL(path, base);

  const hasParams = Object.keys(params).length > 0;
  if (hasParams) url.search = new URLSearchParams(params).toString();

  return url.toString();
};

export const sendRequest = async <T>(
  url: string,
  init?: RequestInit,
): Promise<T> => {
  const res = await fetch(url, init);

  if (!res.ok) throw new Error(await res.text());

  return (await res.json()) as T;
};
