import React, { Component } from 'react';
import StudentList from './StudentList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [{
        id: 1,
        name: 'Shawn'},
      {
        id: 2,
        name: 'Joe'},
      {
        id: 3,
        name: 'Armen'}
      ]
    };
  }

  render () {
    const { students } = this.state;
    return (
      <div>
        <h1>Welcome to React-ory</h1>
        <StudentList students={students}/>
      </div>
    );
  }

}

export default App;