import AdminLayout from 'components/admin/AdminLayout';

export default function UserDetail() {
  const breadcrumb = [
    { title: 'Products', path: '/products', as: '/products' },
    { title: 'Edit Product' }
  ];

  return <AdminLayout breadcrumb={breadcrumb}>Users id</AdminLayout>;
}
