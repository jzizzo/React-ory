import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import firebase from 'firebase';
import config from './config/config.js';

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
  console.log(store);
  ReactDOM.render(
    <App {...actions} {...store} />,
    document.getElementById('app')
  );
});