import React from 'react';
import './style.scss';

import { Layout, Breadcrumb } from 'antd';

const { Content } = Layout;

export default class ContentLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // let contentEl = document.getElementById('content');
  }

  render() {
    const { children } = this.props;
    return (
      <Layout
        style={{
          padding: '10px 24px 24px 24px'
        }}
      >
        <Breadcrumb
          style={{
            margin: '0 0 10px 0'
          }}
        >
          <Breadcrumb.Item>成员管理</Breadcrumb.Item>
          <Breadcrumb.Item>用户管理</Breadcrumb.Item>
        </Breadcrumb>
        <Content id='content' className='content'>
          {children}
        </Content>
      </Layout>
    );
  }
}
