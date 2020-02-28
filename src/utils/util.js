import CryptoJS from 'crypto-js';
import { CRYPTO_KEY, EXPIRES } from '@/constants';
// 加密
export function encrypt(word, keyStr) {
  keyStr = keyStr || CRYPTO_KEY;
  const key = CryptoJS.enc.Utf8.parse(keyStr); // Latin1 w8m31+Yy/Nw6thPsMpO5fg==
  const srcs = CryptoJS.enc.Utf8.parse(word);
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return encrypted.toString();
}
// 解密
export function decrypt(word, keyStr) {
  keyStr = keyStr || CRYPTO_KEY;
  const key = CryptoJS.enc.Utf8.parse(keyStr); // Latin1 w8m31+Yy/Nw6thPsMpO5fg==
  const decryptText = CryptoJS.AES.decrypt(word, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Utf8.stringify(decryptText).toString();
}

// 扩展
export function extend(tag, source) {
  tag = tag || {};
  source = source || {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (typeof source[key] === 'object') {
        tag[key] = extend(source[key]); // 递归复制
      } else {
        tag[key] = source[key];
      }
    }
  }
  return tag;
}
