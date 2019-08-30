import AdminLayout from 'components/admin/AdminLayout';

function Index() {
  const breadcrumb = [{ title: 'Dashboard' }];

  return <AdminLayout breadcrumb={breadcrumb}>Dashboard</AdminLayout>;
}

export default Index
