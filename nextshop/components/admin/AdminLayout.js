import Head from 'next/head';
import React, { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail } from 'store/index';
import { FirebaseContext } from 'lib/with-firebase';

import { Layout, Avatar } from 'antd';
const { Header, Content, Footer } = Layout;

import LeftMenu from 'components/admin/LeftMenu';
import AdminBreadcrumb from 'components/admin/AdminBreadcrumb';

function AdminLayout({ breadcrumb, children }) {
  const firebase = useContext(FirebaseContext);

  const lastBreadcrumbItem = breadcrumb.pop();

  let userEmail = useSelector(state => state.email);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!userEmail) {
      firebase.auth.onAuthStateChanged(user => {
        if (user && user.email) {
          // dispatch(setEmail(user.email));
        } else {
          console.log('logout');
        }
      });
    }
  });

  return (
    <Layout>
      <Head>
        <title>{lastBreadcrumbItem.title}</title>
      </Head>

      <LeftMenu />

      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <div style={{ float: 'right', paddingRight: 16 }}>
            {userEmail} <Avatar icon="user" />
          </div>
        </Header>

        <AdminBreadcrumb
          breadcrumb={breadcrumb}
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
}

export default AdminLayout;
