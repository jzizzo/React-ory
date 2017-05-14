import React, { Component } from 'react';
import StudentList from './StudentList.jsx';
import Form from './Form.jsx';

const App = (props) => {

  return (
    <div>
      <h1>Welcome to React-ory</h1>
      <StudentList students={props.students} />
      <Form addStudent={props.addStudent} />
    </div>
  );
};

export default App;