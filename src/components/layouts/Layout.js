import React, { useState } from 'react';
import { Menu, Layout } from 'antd';

import {
  UserOutlined,
  TeamOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  TableOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import './layout.sass'
import { publicRoutes } from '../../utils/routes';
import { HOME } from '../../helpers/url';

const { Header, Footer, Sider, Content } = Layout;

const { SubMenu } = Menu;

const LayoutContainer = () => {

  const [collapsed, setCollapsed] = useState(false)

  const collapsedToggle = () => setCollapsed(!collapsed)

  return (
    <Layout style={{ width: '100%', height: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to={'/'}>
              Главная
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TableOutlined />}>
            <Link to={'/all'}>
              Таблицы
            </Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<UserOutlined />} title="Пользователь">
            <Menu.Item key="6">Личный кабинет</Menu.Item>
            <Menu.Item key="8">Выход</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: collapsedToggle,
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '10px',
            minHeight: 280,
          }}
        >
          <Routes>
            {publicRoutes.map(({ path, Component }) =>
              <Route key={path} path={path} exact element={<Component />} />
            )}
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default LayoutContainer;
