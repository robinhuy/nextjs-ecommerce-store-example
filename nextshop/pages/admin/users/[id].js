import AdminLayout from 'components/admin/AdminLayout';

export default function UserDetail() {
  const breadcrumb = [
    { title: 'Users', path: '/users', as: '/users' },
    { title: 'User Detail' }
  ];

  return <AdminLayout breadcrumb={breadcrumb}>Users id</AdminLayout>;
}
