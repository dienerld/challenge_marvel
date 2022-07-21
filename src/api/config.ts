import crypto from 'crypto';

const privateKey = import.meta.env.PRIVATE_KEY;
const publicKey = import.meta.env.PUBLIC_KEY;
const ts = new Date().getTime();

export const md5 = crypto.createHash('md5')
  .update(String(ts) + privateKey + publicKey).digest('hex');
