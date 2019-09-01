import React, { Component } from 'react';
import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

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
  }

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();

  getMessages = () => this.db.collection('messages').get();

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
