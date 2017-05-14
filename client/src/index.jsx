import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCdT7fIeaT_iwxCKjCvcbWR5LmL_pbD3BI',
  authDomain: 'react-ory.firebaseapp.com',
  databaseURL: 'https://react-ory.firebaseio.com',
  projectId: 'react-ory',
  storageBucket: 'react-ory.appspot.com',
  messagingSenderId: '130689649897'
};


console.log('herro?')
const fb = firebase
  .initializeApp(config)
  .database()
  .ref();

fb.on('value', snapshot => {
  console.log('we outchea')
  const store = snapshot.val();
  ReactDOM.render(
    <App {...store} />,
    document.getElementById('app')
  );
});