import md5 from 'md5';

export function auth() {
  const privateKey = import.meta.env.PRIVATE_KEY;
  const publicKey = import.meta.env.PUBLIC_KEY;
  const ts = new Date().getTime();

  console.log(privateKey, publicKey, ts);

  const hash = md5(String(ts) + privateKey + publicKey);
  console.log(hash);

  return {
    ts,
    apiKey: publicKey,
    hash,
  };
}
