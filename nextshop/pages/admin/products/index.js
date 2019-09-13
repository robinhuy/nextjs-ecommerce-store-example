import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';

import { Table, Divider, Button, message } from 'antd';

import AdminLayout from 'components/admin/AdminLayout';

const Products = ({ firebase }) => {
  const breadcrumb = [{ title: 'Products' }];

  const [products, setProducts] = useState([]);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: image => <img src={image} alt={image} style={{ maxWidth: 200 }} />
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: 'Category',
      dataIndex: 'category'
    },
    {
      title: 'Price',
      dataIndex: 'price'
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a>Edit</a>
          <Divider type="vertical" />
          <a>Delete</a>
        </span>
      )
    }
  ];

  useEffect(() => {
    firebase
      .getProducts()
      .then(products => {
        setProducts(products);
      })
      .catch(error => {
        message.error(error.message);
      });
  }, []);

  function goToCreateProductPage() {
    Router.push('/admin/products/create');
  }

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      <Button
        type="primary"
        icon="plus"
        style={{ marginBottom: 15 }}
        onClick={goToCreateProductPage}
      >
        Create Product
      </Button>

      <Table columns={columns} dataSource={products} />
    </AdminLayout>
  );
};

export default withFirebase(Products);
