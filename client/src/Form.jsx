import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nextId: 4
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let newStudent = {id: this.state.nextId, name: this.state.value};
    this.setState({nextId: this.state.nextId + 1, value: ''});
    this.props.addStudent(newStudent);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render () {

    return (

      <div>
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



export default Form;