import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';

import { Row, Col, Form, Input, Select, Button } from 'antd';
const { Option } = Select;

import AdminLayout from 'components/admin/AdminLayout';

const Products = ({ firebase, form }) => {
  const breadcrumb = [
    { title: 'Products', path: '/products', as: '/products' },
    { title: 'Create Product' }
  ];

  const [products, setProducts] = useState([]);

  const { getFieldDecorator } = form;

  const createProduct = () => {
    form.validateFields((err, values) => {
      if (!err) {
        firebase
          .createProduct(values)
          .then(result => {
            console.log(result);
            // dispatch(setEmail(account.user.email));
            // Router.push('/admin');
          })
          .catch(error => {
            // setError(true);
            // setErrorMessage(error.message);
          });
      }
    });
  };

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Name">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Please input Name!' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Price">
              {getFieldDecorator('price', {
                rules: [{ required: true, message: 'Please input Price!' }]
              })(<Input />)}
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', {
                rules: [{ required: true, message: 'Please input Quantity!' }]
              })(<Input />)}
            </Form.Item>

            <Form.Item label="Status">
              {getFieldDecorator('status', { initialValue: 'draft' })(
                <Select>
                  <Option value="draft">Draft</Option>
                  <Option value="public">Public</Option>
                </Select>
              )}
            </Form.Item>
          </Col>
        </Row>

        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button icon="left" onClick={Router.back} style={{ marginRight: 16 }}>
            Back
          </Button>

          <Button type="primary" onClick={createProduct}>
            Create
          </Button>
        </div>
      </Form>
    </AdminLayout>
  );
};

export default withFirebase(Form.create()(Products));
