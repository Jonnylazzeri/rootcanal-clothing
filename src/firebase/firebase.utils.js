import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBm9fMS0dpVX3t0hLfB5IqAznx8YcwJopQ",
  authDomain: "rootcanal-db.firebaseapp.com",
  databaseURL: "https://rootcanal-db.firebaseio.com",
  projectId: "rootcanal-db",
  storageBucket: "rootcanal-db.appspot.com",
  messagingSenderId: "108609827620",
  appId: "1:108609827620:web:adcfe0d25327572fbdf9b1",
  measurementId: "G-P5KJSPVLXD"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;