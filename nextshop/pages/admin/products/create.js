import Router from 'next/router';
import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';

import {
  Row,
  Col,
  Form,
  Input,
  Select,
  Button,
  Upload,
  Icon,
  Modal,
  message
} from 'antd';
const { Option } = Select;

import AdminLayout from 'components/admin/AdminLayout';

const MAX_IMAGES = 4;

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

const Products = ({ firebase, form }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([]);

  const breadcrumb = [
    { title: 'Products', path: '/products', as: '/products' },
    { title: 'Create Product' }
  ];

  const { getFieldDecorator } = form;

  function createProduct() {
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
  }

  function handleCancel() {
    setPreviewVisible(false);
  }

  async function handlePreview(file) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  }

  function handleChange({ fileList, file }) {
    setFileList(fileList);
  }

  function handleRemove(file) {
    return firebase.storage
      .ref()
      .child(`images/${file.uid + file.name}`)
      .delete()
      .then(function() {
        return true;
      })
      .catch(function(err) {
        message.error(err.message);
        return false;
      });
  }

  function beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isLt2M;
  }

  function uploadImage({ file, onSuccess, onError }) {
    firebase.storage
      .ref(`images/${file.uid + file.name}`)
      .put(file)
      .then(function(snapshot) {
        if (snapshot.state === 'success') {
          onSuccess('ok');
        } else {
          onError();
        }
      })
      .catch(function(err) {
        onError(err);
      });
  }

  const uploadButton = (
    <div>
      <Icon type="plus" />
      <div className="ant-upload-text">Upload</div>
    </div>
  );

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

        <Row>
          <Col span={24}>
            <Form.Item label="Images">
              {getFieldDecorator('images', {
                rules: [
                  { required: true, message: 'Please upload at least 1 image!' }
                ]
              })(
                <Upload
                  listType="picture-card"
                  accept="image/*"
                  fileList={fileList}
                  beforeUpload={beforeUpload}
                  customRequest={uploadImage}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  onRemove={handleRemove}
                >
                  {fileList.length >= MAX_IMAGES ? null : uploadButton}
                </Upload>
              )}
            </Form.Item>

            <Modal
              visible={previewVisible}
              footer={null}
              onCancel={handleCancel}
              style={{ textAlign: 'center' }}
            >
              <img
                alt="example"
                style={{ maxWidth: '100%' }}
                src={previewImage}
              />
            </Modal>
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
