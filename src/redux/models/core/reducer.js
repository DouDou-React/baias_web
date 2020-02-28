// 部分代码参考dav.js
import { noop } from '@/utils';

// 获取reducer 处理方法
function handleAction(namespace, actionType, reducer = noop) {
  return (state, action) => {
    if (actionType === action.type) {
      return reducer(state, action);
    }
    return state;
  };
}

// reducers 处理
function reduceReducers(...reducers) {
  return (state, action) => reducers.reduce((p, r) => r(p, action), state);
}

function handleActions(namespace, handlers, defaultState) {
  const reducers = Object.keys(handlers).map(type => {
    return handleAction(namespace, type, handlers[type]);
  });
  const reducer = reduceReducers(...reducers);
  return (state = defaultState, action) => reducer(state, action);
}

export default function getReducer(namespace, reducers, state) {
  return handleActions(namespace, reducers || {}, state);
}
