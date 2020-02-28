import React from 'react';
import ReactDom from 'react-dom';
import createStore from '@/redux';
import { Provider } from 'react-redux';
import RouteComponent from '@/middleware/router';
import ErrorComponent from '@/components/error';

import '@style/base.scss';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistStore } from 'redux-persist';

const store = createStore();
const persistor = persistStore(store);

const elRoot = document.getElementById('root');

const render = Component => {
  ReactDom.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ErrorComponent>
          <Component />
        </ErrorComponent>
      </PersistGate>
    </Provider>,
    elRoot
  );
};

render(RouteComponent);
