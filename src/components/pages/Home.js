import React from 'react';
import Info from '../layout/Info';
import 'antd/dist/antd.css';
import { Layout, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import AddBtn from '../layout/AddBtn';

const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <div id="container" style={{ padding: '24px' }}>
      <Layout className="layout">
        <Header>
          <div className="logo" />

          <ul style={{ float: 'right' }}>
            <li>
              <Link to="/login">Login</Link>{' '}
              <Link to="/register">Register</Link>{' '}
              <Link to="/about">About</Link>
            </li>
          </ul>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Bootcamps</Breadcrumb.Item>
            <Breadcrumb.Item>Courses</Breadcrumb.Item>
            <Breadcrumb.Item>Reviews</Breadcrumb.Item>
            <AddBtn />
          </Breadcrumb>
          <Info />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Devcamper_api_frontend ©2018 Created by Harrison
        </Footer>
      </Layout>
    </div>
  );
};

export default Home;
