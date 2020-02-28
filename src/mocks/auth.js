import { COMMON_ERROR as error, COMMON_SUCCESS as success } from '@/constants';
import menusData from '@/constants/menu';
import { BASE_URL_CONFIG } from '@/configs';

export default {
  login: {
    path: `${BASE_URL_CONFIG}/auth/login`,
    method: 'post',
    success({ body }) {
      const req = JSON.parse(body);
      console.log(req);
      const res = success;
      success.data = {
        username: '管理员',
        usertoken: 'usertoken',
        phone: '150****7168'
      };
      return res;
    },
    error() {
      const res = error;
      return res;
    }
  },
  getMenu: {
    path: `${BASE_URL_CONFIG}/auth/menu`,
    method: 'post',
    success() {
      const res = success;
      success.data = menusData;
      return res;
    },
    error() {
      const res = error;
      return res;
    }
  }
};
