import Head from 'next/head';
import Link from 'next/link';
import { Layout, Breadcrumb } from 'antd';
import { adminPath } from 'app.config';
import LeftMenu from './LeftMenu';

const { Header, Content, Footer } = Layout;

export default function AdminLayout({ breadcrumb, children }) {
  const lastBreadcrumbItem = breadcrumb.pop();

  let BreadcrumbItems = [];

  for (const item of breadcrumb) {
    BreadcrumbItems.push(
      <Breadcrumb.Item key={item.path}>
        <Link href={adminPath + item.path} as={adminPath + item.as}>
          <a>{item.title}</a>
        </Link>
      </Breadcrumb.Item>
    );
  }

  BreadcrumbItems.push(
    <Breadcrumb.Item key="admin">{lastBreadcrumbItem.title}</Breadcrumb.Item>
  );

  return (
    <Layout>
      <Head>
        <title>{lastBreadcrumbItem.title}</title>
      </Head>

      <LeftMenu />

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />

        <Breadcrumb style={{ margin: '16px' }}>{BreadcrumbItems}</Breadcrumb>

        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Next Shop Admin Panel ©2019 Created by Robin Huy
        </Footer>
      </Layout>
    </Layout>
  );
}
