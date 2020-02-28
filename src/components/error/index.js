import React from 'react';
import NotFound from './404';

export default class NoExist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false
    };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    return error ? <NotFound /> : children;
  }
}
