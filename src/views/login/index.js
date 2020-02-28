import React from 'react';
import './style.scss';
import { Form, Input, Button } from 'antd';
import { LOGIN } from '@models/auth';
import { connect } from 'react-redux';

export default
@Form.create()
@connect(({ global, auth }) => {
  return {
    ...global,
    ...auth
  };
})
class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 'admin',
      passWord: 'admin'
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { form, dispatch } = this.props;
    const { validateFields } = form;
    validateFields((err, values) => {
      if (!err) {
        dispatch({ type: LOGIN, payload: values });
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    const { userName, passWord } = this.state;

    return (
      <div className='container'>
        <div className='shade'>
          <div className='login-container'>
            <Form layout='horizontal' onSubmit={this.handleSubmit}>
              <Form.Item label='用户名'>
                {getFieldDecorator('userName', {
                  initialValue: userName,
                  rules: [
                    {
                      required: true,
                      message: '请输入用户名!'
                    }
                  ]
                })(<Input placeholder='请输入用户名' />)}
              </Form.Item>
              <Form.Item label='密码'>
                {getFieldDecorator('passWord', {
                  initialValue: passWord,
                  rules: [
                    {
                      required: true,
                      message: '请输入密码!'
                    }
                  ]
                })(<Input placeholder='请输入密码' type='password' />)}
              </Form.Item>
              <Form.Item>
                <Button type='primary' htmlType='submit'>
                  登陆
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}
