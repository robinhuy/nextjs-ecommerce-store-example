import AdminLayout from 'components/admin/AdminLayout';

export default function Home() {
  const breadcrumb = [{ title: 'Dashboard' }];

  return <AdminLayout breadcrumb={breadcrumb}>Dashboard</AdminLayout>;
}
