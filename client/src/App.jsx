import React, { Component } from 'react';
import StudentList from './StudentList.jsx';
import Form from './Form.jsx';
import styles from './styles/style.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayForm: false
    };
    this.toggleDisplayForm = this.toggleDisplayForm.bind(this);
  }

  toggleDisplayForm() {
    this.setState({
      displayForm: !this.state.displayForm
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Welcome to React-ory</h1>

        <h4>Students:</h4>
        <StudentList className="container-fluid" students={this.props.students} />
        <br />
        <button onClick={this.toggleDisplayForm}>Join React-ory</button>
        { this.state.displayForm === true ?
          <Form
            className="container-fluid"
            addStudent={this.props.addStudent}
            toggleDisplayForm={this.toggleDisplayForm}/>
          : null}
      </div>
    );
  }
}

export default App;