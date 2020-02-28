import React from 'react';
import './style.scss';
import { connect } from 'react-redux';
import { SET_BREAD } from '@models/global';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;
import { Link } from 'react-router-dom';

export default
@connect(({ global, auth }) => {
  return {
    ...global,
    ...auth
  };
})
class MenuLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };
  }

  toggleCollapsed = () => {
    const { collapsed } = this.state;

    this.setState({
      collapsed: !collapsed
    });
  };

  nav = (location, parent, child) => {
    // this
    //     .props
    //     .dispatch({
    //         type: SET_BREAD,
    //         payload: [parent, child]
    //     })
    return {
      ...location,
      pathname: child == null ? parent.router : child.router
    };
  };

  render() {
    const { menu } = this.props;
    const { collapsed } = this.state;
    const menuList = (menu || []).map(item => {
      if (item.children.length === 0) {
        return (
          <Menu.Item key={item.code}>
            <Icon type={item.icon} />
            <span>
              <Link to={location => this.nav(location, item, null)}>
                {item.name}
              </Link>
            </span>
          </Menu.Item>
        );
      }

      const subMenus = item.children.map(sub => {
        return (
          <Menu.Item key={sub.code}>
            <Link to={location => this.nav(location, item, sub)}>
              {sub.name}
            </Link>
          </Menu.Item>
        );
      });
      return (
        <SubMenu
          key={item.code}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.name}</span>
            </span>
          }
        >
          {subMenus}
        </SubMenu>
      );
    });
    return (
      <Sider
        className='sider-container'
        collapsible
        width={150}
        collapsed={collapsed}
        onCollapse={this.toggleCollapsed}
        theme='light'
      >
        <Menu
          mode='inline'
          style={{
            height: '100%',
            borderRight: 0
          }}
        >
          {menuList}
        </Menu>
      </Sider>
    );
  }
}
