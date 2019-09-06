import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';
import AdminLayout from 'components/admin/AdminLayout';

import { Button } from 'antd';

const Products = ({ firebase }) => {
  const breadcrumb = [
    { title: 'Products', path: '/products', as: '/products' },
    { title: 'Create Product' }
  ];

  const [products, setProducts] = useState([]);

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      <Button icon="left" style={{ marginBottom: 15 }} onClick={Router.back}>
        Back
      </Button>
    </AdminLayout>
  );
};

export default withFirebase(Products);
