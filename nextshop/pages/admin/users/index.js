import AdminLayout from 'components/admin/AdminLayout';
import Link from 'next/link';

export default function User() {
  const breadcrumb = [{ title: 'Users' }];

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      <h1>Users</h1>
      
      <Link href="/admin/users/[id]" as="/admin/users/1">
        <a>Detail</a>
      </Link>
    </AdminLayout>
  );
}
