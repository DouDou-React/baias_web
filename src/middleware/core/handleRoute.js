import React from 'react';
import { Route, useParams, useHistory, useLocation } from 'react-router-dom';
import routes from '@/configs/routers';
import DocumentTitle from 'react-document-title';

function CustomHandle({ Component }) {
  const parm = useParams();
  const history = useHistory();
  const location = useLocation();
  return <Component />;
}
export default (permission = true) => {
  return routes
    .filter(i => i.permission === permission || i.permission === undefined)
    .map((route, index) => {
      return (
        <Route
          key={`route-key-${index}`}
          path={route.path}
          exact={route.exact ? route.exact : false}
          component={route.component}
        />
      );
    });
};
