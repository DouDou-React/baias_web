import React from 'react';
import {
  Route,
  Switch,
  HashRouter as Router,
  Redirect,
  useLocation
} from 'react-router-dom';
import Layout from '@coms/layout';
import { connect } from 'react-redux';
import { WHITE_LIST } from '@/constants';
import getRoutes from './core/handleRoute';

export default
@connect(({ global, auth }) => {
  return {
    ...global,
    ...auth
  };
})
class RouteComponent extends React.Component {
  render() {
    const { userInfo } = this.props;
    const isLogin = userInfo != null;
    return (
      <Router>
        <Switch>
          <AuthRoute {...this.props} isLogin={isLogin} />
        </Switch>
      </Router>
    );
  }
}

class AuthRoute extends React.Component {
  render() {
    const { location, isLogin } = this.props;
    const { pathname, search } = location;

    // 登陆状态下，输入登陆路由
    if (isLogin && pathname === '/login') {
      return <Redirect to='/' />;
    }
    // 未登录状态下，输入私有路由以外的路由
    if (!isLogin && WHITE_LIST.filter(i => i === pathname).length > 0) {
      return (
        <div
          style={{
            height: '100%'
          }}
        >
          {getRoutes(false)}
        </div>
      );
    }
    // 登陆状态 私有路由
    if (isLogin) {
      return <PermissionRoute {...this.props} />;
    }
    return <Redirect to='/login' />;
  }
}

class PermissionRoute extends React.Component {
  render() {
    return <Layout {...this.props}>{getRoutes()}</Layout>;
  }
}
