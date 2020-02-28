import axios from 'axios';
import NProgress from 'nprogress';
import { BASE_URL_CONFIG, MOCK_CONFIG } from '@/configs';
import Mock from '@/mocks';
import { message } from 'antd';
import {
  SUCCESS,
  UNAUTHORIZED,
  NETWORK_ERROR,
  UNAUTHORIZED_ERROR
} from '@/constants';

const JSON_HEADER = 'application/json;charset=UTF-8';
const FILE_HEADER = 'multipart/form-data';
let IS_FILE = false;

if (MOCK_CONFIG) {
  Mock.startMock();
}

axios.defaults.withCredentials = false;
const request = axios.create({
  baseURL: BASE_URL_CONFIG,
  timeout: 15000 // 请求超时时间
});

// request拦截器
request.interceptors.request.use(
  config => {
    NProgress.start();
    config.headers['Content-Type'] = IS_FILE ? FILE_HEADER : JSON_HEADER;
    return config;
  },
  error => {
    NProgress.done();
    Promise.reject(error);
  }
);

// respone拦截器
request.interceptors.response.use(
  response => {
    NProgress.done();
    const res = response.data;
    if (res) {
      if (res.code !== SUCCESS) {
        // token失效或验证失败
        if (res.code === UNAUTHORIZED) {
          message.error(UNAUTHORIZED_ERROR).then(result => {
            // '/login'
          });
        } else if (res.type === 'multipart/form-data') {
          // 判断是否是导出数据
          return response;
        } else {
          message.error(res.message);
          NProgress.done();
          return Promise.reject(new Error());
        }
      }
      if (res.code === SUCCESS) {
        return res;
      }
    } else {
      message.error(NETWORK_ERROR);
      return Promise.reject(new Error());
    }
    return {};
  },
  error => {
    const res = error.response;
    if (res) {
      if (res.status === UNAUTHORIZED) {
        message.error(UNAUTHORIZED_ERROR).then(result => {
          // '/login'
        });
      } else {
        if (res.data.code === UNAUTHORIZED) {
          message.error(UNAUTHORIZED_ERROR).then(result => {
            // '/login'
          });
        } else {
          message.error(res.data.message);
          return Promise.reject(new Error());
        }
      }
    } else {
      message.error(NETWORK_ERROR);
      return Promise.reject(new Error());
    }
    return {};
  }
);
export const post = function(ops) {
  IS_FILE = false;
  return request({
    method: 'post',
    ...ops
  });
};
export const get = function(ops) {
  IS_FILE = false;
  return request({
    method: 'get',
    ...ops
  });
};
export const upload = function(ops) {
  IS_FILE = true;
  return request({
    method: 'post',
    ...ops
  });
};
