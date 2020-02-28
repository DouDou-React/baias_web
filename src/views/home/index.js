import React from 'react';
import { Tabs, Icon } from 'antd';
import { connect } from 'react-redux';
import { GET_MENU } from '@models/auth';

import DataView from './data';
import StatsView from './stats';

export default
@connect(({ global, auth }) => {
  return {
    ...global,
    ...auth
  };
})
class HomeView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'small'
    };
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: GET_MENU, payload: {} });
  }

  render() {
    const { TabPane } = Tabs;
    const { size } = this.state;

    return (
      <Tabs defaultActiveKey='data' size={size}>
        <TabPane
          tab={
            <span>
              <Icon type='database' />
              数据
            </span>
          }
          key='data'
        >
          <DataView />
        </TabPane>
        <TabPane
          tab={
            <span>
              <Icon type='dot-chart' />
              统计
            </span>
          }
          key='stats'
        >
          <StatsView />
        </TabPane>
      </Tabs>
    );
  }
}
