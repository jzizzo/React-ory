import React, { Component } from 'react';
import StudentList from './StudentList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nextId: 4,
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleSubmit(event) {
    let newStudent = {id: this.state.nextId, name: this.state.value};
    this.setState({students: [...this.state.students, newStudent], nextId: this.state.nextId + 1});
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {
    const { students } = this.state;
    return (
      <div>
        <h1>Welcome to React-ory</h1>
        <StudentList students={students}/>
        <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }

}

export default App;