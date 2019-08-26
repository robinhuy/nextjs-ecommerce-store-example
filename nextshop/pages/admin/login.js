import React, { Component } from 'react';
import Router from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import clientCredentials from 'credentials/client';
import { Card, Form, Icon, Input, Button, Alert } from 'antd';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { isError: false, errorMessage: '' };
  }

  componentDidMount() {
    firebase.initializeApp(clientCredentials);

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user);
      } else {
        console.log('not sign in');
      }
    });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        firebase
          .auth()
          .signInWithEmailAndPassword(values.email, values.password)
          .then(() => {
            Router.push('/admin');
          })
          .catch(error => {
            this.setState({ isError: true, errorMessage: error.message });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="background">
        <div className="wrapper">
          <Card title="Nextshop Admin" style={{ width: 300 }}>
            <Form onSubmit={this.handleSubmit}>
              {this.state.isError && (
                <Form.Item>
                  <Alert message={this.state.errorMessage} type="error" />
                </Form.Item>
              )}

              <Form.Item>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please input your email!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    placeholder="Email"
                  />
                )}
              </Form.Item>

              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      min: 6,
                      message: 'Password must be at least 6 characters long!'
                    }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>

              <Form.Item style={{ marginBottom: 0 }}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '100%' }}
                >
                  Log in
                </Button>

                <a href="" style={{ display: 'inline-block', marginTop: 10 }}>
                  Forgot password
                </a>
              </Form.Item>
            </Form>
          </Card>
        </div>

        <style jsx>{`
          .background {
            min-height: 100vh;
            background-color: #f8f8f8;
          }
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 80vh;
            text-align: center;
          }
        `}</style>
      </div>
    );
  }
}

export default Form.create()(LoginForm);
