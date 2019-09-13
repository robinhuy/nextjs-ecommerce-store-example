import React, { Component } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import { firebaseConfig } from 'app.config';

const FirebaseContext = React.createContext(null);

class Firebase extends Component {
  constructor(props) {
    super(props);

    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }

    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  getMessages = () => this.db.collection('messages').get();

  createProduct = product => {
    product.created_at = new Date().valueOf();
    return this.db.collection('products').add(product);
  };

  getProducts = () =>
    this.db
      .collection('products')
      .orderBy('created_at', 'desc')
      .get()
      .then(docs => {
        console.log(docs);
        let listProducts = [];

        docs.forEach(function(doc) {
          let data = doc.data();
          data.key = doc.id;
          data.image = '';

          if (data.imageURLs && data.imageURLs.length > 0) {
            data.image = data.imageURLs[0];
          }

          listProducts.push(data);
        });

        return listProducts;
      });

  uploadImages = file =>
    this.storage.ref(`images/${file.uid + file.name}`).put(file);

  getFileDownloadURL = url =>
    this.storage
      .ref()
      .child(url)
      .getDownloadURL();

  render() {
    return (
      <FirebaseContext.Provider value={this}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default Firebase;
export { FirebaseContext, withFirebase };
