import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { adminPath } from 'app.config';

export default function AdminBreadcrumb({ breadcrumb, lastBreadcrumbItem }) {
  let BreadcrumbItems = [];

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
}
