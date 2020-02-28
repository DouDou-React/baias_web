export const emptyObject = Object.freeze({});

// 判断是否未定义
export function isUndef(v) {
  return v === undefined || v === null;
}

// 判断是否定义
export function isDef(v) {
  return v !== undefined && v !== null;
}

// 判断是否true
export function isTrue(v) {
  return v === true;
}

// 判断是否false
export function isFalse(v) {
  return v === false;
}

// 判断是否为对象
export function isObject(v) {
  return v !== null && typeof v === 'object';
}

// 空方法
export function noop(v = {}) {
  return v;
}
