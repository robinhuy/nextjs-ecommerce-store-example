import Link from 'next/link';
import { Layout, Breadcrumb } from 'antd';
import LeftMenu from './LeftMenu';

const { Header, Content, Footer } = Layout;

export default function AdminLayout(props) {
  return (
    <Layout>
      <LeftMenu />

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />

        <Breadcrumb style={{ margin: '16px' }}>
          <Breadcrumb.Item>
            <Link href="/admin" as="/admin"><a>Dashboard</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/admin/users" as="/admin/users"><a>List</a></Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>

        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>{props.children}</div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>Next Shop Admin Panel ©2019 Created by Robin Huy</Footer>
      </Layout>

    </Layout>
  )
}
