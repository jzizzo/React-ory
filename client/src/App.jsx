import React, { Component } from 'react';
import StudentList from './StudentList.jsx';
import Form from './Form.jsx';

const App = (props) => {

  return (
    <div>
      <h1>Welcome to React-ory</h1>
      <h4>Students:</h4>
      <StudentList students={props.students} />
      <br />
      <br />
      <h4>Join React-ory</h4>
      <Form addStudent={props.addStudent} />
    </div>
  );
};

export default App;