import AdminLayout from 'components/admin/AdminLayout';

const ProductDetail = ({ firebase }) => {
  const breadcrumb = [
    { title: 'Products', path: '/products', as: '/products' },
    { title: 'Edit Product' }
  ];

  return <AdminLayout breadcrumb={breadcrumb}>Users id</AdminLayout>;
};

export default ProductDetail;
