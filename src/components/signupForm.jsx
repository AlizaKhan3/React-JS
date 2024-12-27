import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
// const onFinish = (values) => {
//     console.log('Success:', values);
// };
//values i was getting from onFinish now I'm getting through REGISTERUSER Function created by me to store data in firebase.
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const SignupForm = ({registerUser}) => (
    <Form
        name="basic"

        initialValues={{
            remember: true,
        }}

        onFinish={registerUser}
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
            label="Full Name"
            name="fullName"
            rules={[
                {
                    required: true,
                    message: 'Please input your full name!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        {/* <Form.Item
            label="Email Address"
            name="email"
            rules={[
                {
                    required: true,
                    message: 'Please input your Email Address!',
                },
                {
                    message: 'Please enter correct Email Address!',
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                }
            ]}
        >
            <Input />
        </Form.Item> */ }

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

        <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
);
export default SignupForm;