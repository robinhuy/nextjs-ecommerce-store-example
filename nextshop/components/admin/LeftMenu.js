import { Layout, Menu, Icon } from 'antd';

const { Sider } = Layout;

export default function LeftMenu(props) {
  return (
    <Sider breakpoint="lg" collapsedWidth="0" style={{ minHeight: '100vh' }}>
      <div className="admin-logo">
        <a href="/" target="_blank">NextShop Admin</a>
      </div>

      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>

        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
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
  )
}
