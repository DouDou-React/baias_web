import React from 'react';
import './style.scss';
import { Layout, Menu, Dropdown, Row, Col, Avatar, Input } from 'antd';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { LOGOUT } from '@models/auth';

const { Search } = Input;
const { Header } = Layout;

export default
@connect(({ global, auth }) => {
  return {
    ...global,
    ...auth
  };
})
class HeaderLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logout = e => {
    const { dispatch } = this.props;
    dispatch({ type: LOGOUT });
  };

  search = value => {
    console.log(value);
  };

  render() {
    const { userInfo } = this.props;
    const menu = (
      <Menu>
        <Menu.Item>
          <Link
            to={{
              pathname: '/message'
            }}
          >
            消息
          </Link>
        </Menu.Item>
      </Menu>
    );
    return (
      <Layout>
        <Header className='header'>
          <Row>
            <Col span={3}>
              <div className='logo'>网络货运平台</div>
            </Col>
            <Col span={4} />
            <Col span={10}>
              <Search
                className='search'
                placeholder='搜索你想要的...'
                onSearch={this.search}
                enterButton
              />
            </Col>
            <Col span={4} />
            <Col span={3}>
              <Dropdown overlay={menu}>
                <Avatar className='avatar' icon='user' />
              </Dropdown>
              <a
                className='ant-dropdown-link'
                style={{
                  color: '#1890ff',
                  margin: '0 20px 0 0'
                }}
              >
                {userInfo.username}
              </a>
              <a
                className='ant-dropdown-link'
                onClick={this.logout}
                style={{
                  color: '#1890ff',
                  cursor: 'pointer'
                }}
              >
                退出
              </a>
            </Col>
          </Row>
        </Header>
      </Layout>
    );
  }
}
