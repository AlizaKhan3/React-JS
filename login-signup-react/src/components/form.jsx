import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { purple } from '@mui/material/colors';
import PurePanel from 'antd/es/popover/PurePanel';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const AppBasicForm = () => (
  <Form
    name="basic"
    labelCol={{
      span: 7,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      width: 400,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 2,
        span: 16,
      }} 
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 11,
        span: 16,
      }}
    >
      <Button className="btnColor" type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
);
export default AppBasicForm;