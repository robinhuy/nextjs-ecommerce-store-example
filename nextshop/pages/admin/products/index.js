import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';
import AdminLayout from 'components/admin/AdminLayout';

import { Button, Table, Divider, Tag } from 'antd';

const Products = ({ firebase }) => {
  const breadcrumb = [{ title: 'Products' }];

  const [products, setProducts] = useState([]);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image'
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
      .then(docs => {
        let listProducts = [];

        docs.forEach(function(doc) {
          let data = doc.data();
          data.key = doc.id;
          listProducts.push(data);
        });

        setProducts(listProducts);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  function goToCreateProductPage() {
    Router.push('/admin/products/create');
  }

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      <Button type="primary" icon="plus" style={{ marginBottom: 15 }} onClick={goToCreateProductPage} >
        Create Product
      </Button>

      <Table columns={columns} dataSource={products} />
    </AdminLayout>
  );
};

export default withFirebase(Products);
