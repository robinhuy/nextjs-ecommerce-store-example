import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';
import AdminLayout from 'components/admin/AdminLayout';

const Index = ({ firebase }) => {
  const breadcrumb = [{ title: 'Dashboard' }];

  const [list, setList] = useState([]);

  useEffect(() => {
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
