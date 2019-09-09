import { useState, useEffect } from 'react';
import { withFirebase } from 'lib/with-firebase';
import AdminLayout from 'components/admin/AdminLayout';

const Index = ({ firebase }) => {
  const breadcrumb = [];

  const [list, setList] = useState([]);

  useEffect(() => {
    firebase
      .getProducts()
      .then(docs => {
        let listItems = [];

        docs.forEach(function(doc) {
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
