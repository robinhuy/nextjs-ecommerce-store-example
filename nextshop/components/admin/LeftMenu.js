import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';
import { Layout, Menu, Icon } from 'antd';
import { adminPath } from 'nextshop.config';

const { Sider } = Layout;

const LeftMenu = ({ router }) => {
  const onMenuItemClick = e => {
    router.push(e.key);
  };

  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ minHeight: '100vh' }}>
      <div className="admin-logo">
        <a href="/" target="_blank">
          NextShop Admin
        </a>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[router.pathname]}
        onClick={onMenuItemClick}
      >
        <Menu.Item key="/admin">
          <Icon type="dashboard" />
          <span className="nav-text">Dashboard</span>
        </Menu.Item>

        <Menu.Item key="/admin/users">
          <Icon type="user" />
          <span className="nav-text">Users</span>
        </Menu.Item>

        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>

        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>

      <style jsx>{`
        .admin-logo {
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
        .admin-logo > a {
          color: #ffffff;
        }
      `}</style>
    </Sider>
  );
};

export default withRouter(LeftMenu);
