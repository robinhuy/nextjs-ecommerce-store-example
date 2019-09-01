import Head from 'next/head';
import Router from 'next/router';
import React, { useContext, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from 'store/index';
import { FirebaseContext } from 'lib/with-firebase';

import { Layout } from 'antd';
const { Content, Footer } = Layout;

import AdminHeader from 'components/admin/AdminHeader';
import AdminBreadcrumb from 'components/admin/AdminBreadcrumb';
import LeftMenu from 'components/admin/LeftMenu';

const AdminLayout = ({ breadcrumb, children }) => {
  const firebase = useContext(FirebaseContext);
  const dispatch = useDispatch();

  const userEmail = useSelector(state => state.email);

  const [lastBreadcrumbItem] = useState(breadcrumb.pop());
  const [breadcrumbItems] = useState(breadcrumb);

  useEffect(() => {
    if (!userEmail) {
      firebase.auth.onAuthStateChanged(user => {
        if (user && user.email) {
          dispatch(setEmail(user.email));
        } else {
          dispatch(setEmail(''));
          Router.push('/admin/login');
        }
      });
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>{lastBreadcrumbItem.title}</title>
      </Head>

      <LeftMenu />

      <Layout>
        <AdminHeader userEmail={userEmail} />

        <AdminBreadcrumb
          breadcrumb={breadcrumbItems}
          lastBreadcrumbItem={lastBreadcrumbItem}
        />

        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: '100%' }}>
            {children}
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          Next Shop Admin Panel ©2019 Created by Robin Huy
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
