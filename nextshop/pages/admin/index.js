import AdminLayout from 'components/admin/AdminLayout';

import React, { Component } from 'react';
import 'isomorphic-unfetch';

export default class Index extends Component {
  static async getInitialProps({ req, query }) {
    const user = req && req.session ? req.session.decodedToken : null;
    // don't fetch anything from firebase if the user is not found
    // const snap = user && await req.firebaseServer.database().ref('messages').once('value')
    // const messages = snap && snap.val()
    const messages = null;
    return { user, messages };
  }

  render() {
    const breadcrumb = [{ title: 'Dashboard' }];

    return (
      <AdminLayout breadcrumb={breadcrumb}>
        Dashboard        
      </AdminLayout>
    );
  }
}
