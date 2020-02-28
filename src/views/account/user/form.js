import React from 'react';
import { connect } from 'react-redux';
import { Form, Row, Col, Input, Button, Icon } from 'antd';

export default
@Form.create()
class UserFormView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form
          layout='inline'
          className='components-table-demo-control-bar'
          style={{
            marginBottom: 16
          }}
        />
      </div>
    );
  }
}
