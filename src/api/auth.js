import { get, post } from '@/utils';

// 登录
export const login = parm => {
  return post({ url: '/auth/login', data: parm });
};

// 获取菜单
export const getMenu = parm => {
  return post({ url: '/auth/menu', data: parm });
};
