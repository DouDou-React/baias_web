import { encrypt, decrypt } from './util';

export function setCache(key, data, expires = 1000 * 60 * 60) {
  const now = new Date();
  localStorage.setItem(
    key,
    encrypt(
      JSON.stringify({
        data: data,
        expires: new Date(now.getTime() + expires)
      })
    )
  );
}
export function getCache(key, defaultValue = {}) {
  const now = new Date();
  let returnObj = localStorage.getItem(key);
  if (returnObj) {
    returnObj = JSON.parse(decrypt(returnObj));
    if (now.getTime() > returnObj.expires.getTime()) {
      returnObj.data = defaultValue;
    }
    return returnObj.data;
  }
  return defaultValue;
}
export function removeCache(key) {
  localStorage.removeItem(key);
}
export function clearAll() {
  localStorage.clear();
}
