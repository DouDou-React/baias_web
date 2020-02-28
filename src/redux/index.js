import { configuration } from './models/core';
import global from './models/global';
import auth from './models/auth';

export default function createStore(initialState = {}) {
  return configuration([global, auth], initialState);
}
