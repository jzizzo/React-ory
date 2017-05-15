import React, { Component } from 'react';
import StudentList from './StudentList.jsx';
import Form from './Form.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    };
  }

  toggleDisplayForm() {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  render() {
    return (
      <div>
        <h1>Welcome to React-ory</h1>

        <h4>Students:</h4>
        <StudentList students={this.props.students} />
        <br />
        <button onClick={this.toggleDisplayForm.bind(this)}>Join React-ory</button>
        { this.state.displayForm === true ? <Form addStudent={this.props.addStudent} /> : null}
      </div>
    );
  }
}

export default App;