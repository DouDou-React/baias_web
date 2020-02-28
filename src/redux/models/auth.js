import * as api from '@/api/auth';
import { SUCCESS as success } from '@/constants';

// reducers types
export const SET_USERINFO = 'SET_USERINFO';
export const SET_MENU = 'SET_MENU';

// effects types
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_MENU = 'GET_MENU';

export default {
  namespace: 'auth',
  state: {
    userInfo: null,
    menu: []
  },
  reducers: {
    [SET_USERINFO](state, action) {
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    },
    [SET_MENU](state, action) {
      return {
        ...state,
        loading: false,
        menu: action.payload
      };
    }
  },
  effects: {
    *[LOGIN]({ payload }, { call, put }) {
      const { userName, passWord } = payload;
      const res = yield call(api.login.bind(this, { userName, passWord }));
      if (res.code === success) {
        yield put({ type: SET_USERINFO, payload: res.data });
      }
    },
    *[LOGOUT]({ payload }, { call, put }) {
      yield put({ type: SET_USERINFO, payload: null });
      yield put({ type: SET_MENU, payload: null });
    },
    *[GET_MENU]({ payload }, { call, put }) {
      const parm = payload;
      const res = yield call(api.getMenu.bind(this, {}));
      if (res.code === success) {
        yield put({ type: SET_MENU, payload: res.data });
      }
    }
  }
};
