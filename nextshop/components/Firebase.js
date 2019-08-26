import app from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from 'app.config';

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }

  signInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signOut = () => this.auth.signOut();
}

export default Firebase;
