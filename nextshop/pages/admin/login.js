import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setEmail } from 'store/index';

import Router from 'next/router';
import { withFirebase } from 'lib/with-firebase';

import { Card, Form, Icon, Input, Button, Alert } from 'antd';

const LoginForm = ({ firebase, form }) => {
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    form.validateFields((err, values) => {
      if (!err) {
        firebase
          .signInWithEmailAndPassword(values.email, values.password)
          .then(account => {
            dispatch(setEmail(account.user.email));
            Router.push('/admin');
          })
          .catch(error => {
            setError(true);
            setErrorMessage(error.message);
          });
      }
    });
  };

  const { getFieldDecorator } = form;

  return (
    <div className="background">
      <div className="wrapper">
        <Card
          title="Nextshop Admin"
          style={{ width: 300, textAlign: 'center' }}
        >
          <Form>
            {isError && (
              <Form.Item>
                <Alert message={errorMessage} type="error" />
              </Form.Item>
            )}

            <Form.Item>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Please input your email!' }]
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

            <div>
              <Button
                type="primary"
                style={{ width: '100%' }}
                onClick={handleLogin}
              >
                Log in
              </Button>

              <a href="" className="forgot-link">
                Forgot password
              </a>
            </div>
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
        }
        .forgot-link {
          display: block;
          margin-top: 15px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default withFirebase(Form.create()(LoginForm));
