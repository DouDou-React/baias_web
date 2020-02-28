// 白名单
export const WHITE_LIST = ['/login', '/findpassword', '/privacyPolicy'];

// 接口
export const SUCCESS = 200;
export const UNAUTHORIZED = 401;

// 错误信息
export const NETWORK_ERROR = '网络连接失败，请稍候！';
export const UNAUTHORIZED_ERROR = '您的登录信息已经失效，请进行重新登录！';

// 有效期
export const EXPIRES = 1; // 单位天

// 加密,解密key
export const CRYPTO_KEY = 'MsWfgwghu9qJOGIN';

// redux 缓存key
export const REDUX_KEY = 'xlD70mAkVPDj';

// 默认错误
export const COMMON_ERROR = {
  code: -1,
  message: '网络连接出错',
  data: null
};

// 默认成功
export const COMMON_SUCCESS = {
  code: 200,
  message: '操作成功',
  data: []
};
