import React, { Component } from 'react';
import StudentList from './StudentList.jsx';
import Form from './Form.jsx';

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
    this.addStudent = this.addStudent.bind(this);
  }

  addStudent (newStudent) {
    this.setState({students: [...this.state.students, newStudent]});
  }

  render () {
    const { students } = this.state;
    return (
      <div>
        <h1>Welcome to React-ory</h1>
        <StudentList students={students} />
        <Form addStudent={this.addStudent}/>
      </div>
    );
  }
}

export default App;