import React from 'react';
import { withRouter } from 'next/router';

import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

import { adminPath } from 'app.config';

const LeftMenu = ({ router }) => {
  const onMenuItemClick = e => {
    router.push(e.key);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ minHeight: '100vh' }}>
      <div className="logo">
        <a href="/" target="_blank">
          NextShop Admin
        </a>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[router.pathname]}
        onClick={onMenuItemClick}
        style={{marginTop: '18px'}}
      >
        <Menu.Item key={adminPath}>
          <Icon type="dashboard" />
          <span className="nav-text">Dashboard</span>
        </Menu.Item>

        <Menu.Item key={adminPath + '/users'}>
          <Icon type="user" />
          <span className="nav-text">Users</span>
        </Menu.Item>
      </Menu>

      <style jsx>{`
        .logo {
          background: rgba(255, 255, 255, 0.2);
          height: 64px;
          font-size: 16px;
          font-weight: 700;
          text-transform: uppercase;
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .logo > a {
          color: #ffffff;
        }
      `}</style>
    </Sider>
  );
};

export default withRouter(LeftMenu);
