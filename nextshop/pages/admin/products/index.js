import Link from 'next/link';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';

import { Table, Button, Modal, message } from 'antd';
const { confirm } = Modal;

import AdminLayout from 'components/admin/AdminLayout';

const Products = ({ firebase }) => {
  const breadcrumb = [{ title: 'Products' }];

  const [products, setProducts] = useState([]);

  const columns = [
    {
      title: 'Image',
      dataIndex: 'image',
      render: (text, record) => (
        <Link href={'/admin/products/[id]'} as={'/admin/products/' + record.id}>
          <a>
            <img src={text} alt={text} style={{ maxWidth: 200 }} />
          </a>
        </Link>
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text, record) => (
        <Link href={'/admin/products/[id]'} as={'/admin/products/' + record.id}>
          <a>{text}</a>
        </Link>
      )
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
        <a onClick={() => deleteProduct(record)}>Delete</a>
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

  function deleteProduct(product) {
    confirm({
      title: 'Delete Data',
      content: `You may be deleting product ${product.name}. After you delete this, it can't be recovered.`,
      onOk() {
        firebase
          .deleteProduct(product.id)
          .then(() => {
            setProducts(products.filter(item => item.id != product.id));

            //TODO: remove images
            message.success('Delete product successfully');
          })
          .catch(err => {
            message.error(err.message);
          });
      }
    });
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
