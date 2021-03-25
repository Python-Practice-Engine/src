import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
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

const [user] = useAuthState();

function SignIn(){
    return (
        <section>
            {user ? <Outline /> : }
        </section>
    )
}