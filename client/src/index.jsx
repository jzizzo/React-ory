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


const fb = firebase
  .initializeApp(config)
  .database()
  .ref();

const addStudent = data => fb.child('students').push(data, response => response);
const actions = {
  addStudent
};

fb.on('value', snapshot => {
  const store = snapshot.val();
  ReactDOM.render(
    <App {...actions} {...store} />,
    document.getElementById('app')
  );
});