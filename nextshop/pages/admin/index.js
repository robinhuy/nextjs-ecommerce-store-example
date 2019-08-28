import AdminLayout from 'components/admin/AdminLayout';

export default function Index() {
  const breadcrumb = [{ title: 'Dashboard' }];

  return <AdminLayout breadcrumb={breadcrumb}>Dashboard</AdminLayout>;
}
