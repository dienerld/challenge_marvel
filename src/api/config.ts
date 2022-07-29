import md5 from "md5";

export const BASE_URL = "https://gateway.marvel.com:443/v1/public";
export function auth() {
  const privateKey = import.meta.env.VITE_PRIVATE_KEY as string;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY as string;
  const ts = new Date().getTime();
  const hash = md5(String(ts) + privateKey + publicKey);

  return {
    ts: String(ts),
    apikey: publicKey,
    hash,
  };
}
