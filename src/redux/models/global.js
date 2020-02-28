import * as api from '@/api/auth';
import { SUCCESS as success } from '@/constants';

// reducers types
export const SET_BREAD = 'SET_BREAD';
// effects types

export default {
  namespace: 'global',
  state: {
    breadCrumb: null
  },
  reducers: {
    [SET_BREAD](state, action) {
      return {
        ...state,
        loading: false,
        breadCrumb: action.payload
      };
    }
  },
  effects: {}
};
