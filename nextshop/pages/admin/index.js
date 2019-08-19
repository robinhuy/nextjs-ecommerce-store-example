import AdminLayout from 'components/admin/AdminLayout';

export default function Dashboard() {
  const breadcrumb = [{ title: 'Dashboard' }];

  return <AdminLayout breadcrumb={breadcrumb}>Dashboard</AdminLayout>;
}
