import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  LogoutOutlined,
  BookOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import logo from "../assets/logo.png"
import { signOut, auth } from "../db//firebase.jsx"
import { useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  //logout button menu mein tha issylye profile se yahan move krdiya code
  const logoutUser = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("User signed out successfully.");
      // window.location.pathname = "/" no need to do this coz, Router File mein user hoga toh Profile Page accessible hoga else user will be moved to login page (Secure Working)
    }).catch((error) => {
      // An error happened.
      console.error("Error signing out: ", error);
    });
  }

  // const MoveToCourses = () => {
  //   // <Navigate to={"courses"}></Navigate>
  //   window.location.pathname = "courses"
  // }

  // function navigateToUsers () {
  //   window.location.pathname = "/users"
  // }

  const navigate = useNavigate();


  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme='light'>
        <div className="demo-logo-vertical d-flex justify-content-center align-items-center" >
          <img width={collapsed ? "auto" : "auto"} src={collapsed ? logo : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdeRJ-zALk4x447wm6_yVL_KQySoGGkIljtw&s"} alt="" style={{ height: "70px", margin: "30px" }} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          // defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Users',
              // onClick: window.location.pathname = "/users"
              // onClick : () => navigateToUsers()
              onClick : () => navigate("/users")
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
            {
              key: '4',
              icon: <BookOutlined />,
              label: 'Courses',
              // onClick: () => MoveToCourses()
            },
            {
              key: '5',
              icon: <LogoutOutlined />,
              label: 'Logout',
              onClick: () => logoutUser()
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AppLayout;