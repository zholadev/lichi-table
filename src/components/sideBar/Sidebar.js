import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, ContainerOutlined, DesktopOutlined, PieChartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false)

  const collapsedToggle = () => setCollapsed(!collapsed)

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={collapsedToggle} style={{ marginBottom: 16 }}>
        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Главная
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Таблицы
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Создать
        </Menu.Item>
        {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu> */}
      </Menu>
    </div>
  );
}

export default Sidebar;
