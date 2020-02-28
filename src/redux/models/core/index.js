import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import {
  combineReducers,
  compose,
  applyMiddleware,
  createStore as _createStore
} from 'redux';

import getReducer from './reducer';
import getSaga from './saga';
import createStore from './createStore';

const only = [];
const except = [];

const onError = (err, extension) => {
  if (err) {
    if (typeof err === 'string') {
      err = new Error(err);
    }
    err.preventDefault = () => {
      err._dontReject = true;
    };
    throw new Error(err.stack || err);
  }
};

function onEffect(effect, { put }, model, actionType) {
  const { namespace } = model;
  if (
    (only.length === 0 && except.length === 0) ||
    (only.length > 0 && only.indexOf(actionType) !== -1) ||
    (except.length > 0 && except.indexOf(actionType) === -1)
  ) {
    return function*(...args) {
      yield effect(...args);
    };
  }
  return effect;
}

const sagas = [];
const reducers = {};

export function configuration(models = [], initialState = {}) {
  for (const m of models) {
    reducers[m.namespace] = getReducer(m.namespace, m.reducers, m.state);
    if (m.effects) {
      sagas.push(getSaga(m.effects, m, onError, [onEffect]));
    }
  }

  function createReducer() {
    return combineReducers(reducers);
  }

  const sagaMiddleware = createSagaMiddleware();
  const extraMiddleware = routerMiddleware({});

  const store = createStore({
    reducers: createReducer(),
    initialState,
    sagaMiddleware,
    extraMiddleware
  });

  store.runSaga = sagaMiddleware.run;

  if (sagas.length === 1) {
    store.runSaga(sagas[0]);
  } else {
    sagas.forEach(sagaMiddleware.run);
  }

  return store;
}
