import React, { Component } from 'react';
import app from 'firebase/app';
import 'firebase/auth';

import { firebaseConfig } from 'app.config';

const FirebaseContext = React.createContext();

class Firebase extends Component {
  constructor(props) {
    super(props);

    if (!app.apps.length) {
      app.initializeApp(firebaseConfig);
    }
  }

  signInWithEmailAndPassword = (email, password) =>
    app.auth().signInWithEmailAndPassword(email, password);

  signOut = () => app.auth().signOut();

  render() {
    return (
      <FirebaseContext.Provider value={app}>
        {this.props.children}
      </FirebaseContext.Provider>
    );
  }
}

const FirebaseConsumer = FirebaseContext.Consumer;

export default Firebase;
export { FirebaseConsumer };
