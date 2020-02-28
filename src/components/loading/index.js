import React from 'react';
import NProgress from 'nprogress';
import { Skeleton, Icon, Result } from 'antd';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { isLoading, pastDelay, error } = this.props;
    let content = (
      <Skeleton
        style={{
          height: '100%'
        }}
      />
    );
    if (isLoading) {
      NProgress.start();
    }
    if (!isLoading) {
      content = null;
      NProgress.done();
    }
    if (error != null) {
      content = (
        <Result status='error' title={error.code} subTitle={error.message} />
      );
      NProgress.done();
    }
    return (
      <div
        style={{
          height: '100%',
          margin: '0 auto'
        }}
      >
        {content}
      </div>
    );
  }
}
