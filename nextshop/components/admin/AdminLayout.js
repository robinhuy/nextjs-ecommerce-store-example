import { Layout, Menu, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default function AdminLayout(props) {
  return (
    <Layout>
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
      </Sider>

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />

        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>{props.children}</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Next Shop Admin Panel ©2019 Created by Robin Huy</Footer>
      </Layout>

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
    </Layout>
  )
}
