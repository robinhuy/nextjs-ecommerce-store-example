import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { adminPath } from 'app.config';

const AdminBreadcrumb = ({ breadcrumb, lastBreadcrumbItem }) => {
  let BreadcrumbItems = [];

  BreadcrumbItems.push(
    <Breadcrumb.Item key={'/'}>
      <Link href={adminPath + '/'} as={adminPath + '/'}>
        <a style={{ fontSize: '14px' }}>Dashboard</a>
      </Link>
    </Breadcrumb.Item>
  );

  for (const item of breadcrumb) {
    BreadcrumbItems.push(
      <Breadcrumb.Item key={item.path}>
        <Link href={adminPath + item.path} as={adminPath + item.as}>
          <a style={{ fontSize: '14px' }}>{item.title}</a>
        </Link>
      </Breadcrumb.Item>
    );
  }

  BreadcrumbItems.push(
    <Breadcrumb.Item key="admin">{lastBreadcrumbItem.title}</Breadcrumb.Item>
  );

  return <Breadcrumb style={{ margin: '16px' }}>{BreadcrumbItems}</Breadcrumb>;
};

export default AdminBreadcrumb;
