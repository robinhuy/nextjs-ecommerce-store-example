import AdminLayout from 'components/admin/AdminLayout';
import { withFirebase } from 'lib/with-firebase';
import React, { useContext, useState, useEffect } from 'react';

const Index = ({ firebase }) => {
  const breadcrumb = [{ title: 'Dashboard' }];

  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('EFFECT');
    firebase
      .getMessages()
      .then(function(querySnapshot) {
        let listItems = [];

        querySnapshot.forEach(function(doc) {
          console.log(doc.id);
          listItems.push(<li key={doc.id}>{doc.id}</li>);
        });

        setList(listItems);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <AdminLayout breadcrumb={breadcrumb}>
      Dashboard
      <ul>{list}</ul>
    </AdminLayout>
  );
};

export default withFirebase(Index);
