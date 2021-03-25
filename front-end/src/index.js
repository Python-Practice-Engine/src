import React from 'react';
import ReactDOM from 'react-dom';

// Style imports
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/icecoder.css';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import firebase from 'firebase/app';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';

// Personal component import
import Outline from './components/Outline';

firebase.initializeApp({
  apiKey: 'AIzaSyA9eJDXGjWHXXBboWbflw_HNHocR_4sIIU',
  authDomain: 'python-learning-87aa4.firebaseapp.com',
  projectId: 'python-learning-87aa4',
  storageBucket: 'python-learning-87aa4.appspot.com',
  messagingSenderId: '385323662435',
  appId: '1:385323662435:web:1b99a3b85221a158850c56',
  measurementId: 'G-WK5GEQ4YW2',
});

const [user] = useAuthState(firebase.auth());

ReactDOM.render(
  <React.StrictMode>
    {user ? <Outline /> : <SignIn /> }
  </React.StrictMode>,
  document.getElementById('root'),
);

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  };

  return (
    <button onClick={signInWithGoogle} type="button"> Sign in with Google</button>
  );
}
