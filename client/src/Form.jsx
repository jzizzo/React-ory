import React, { Component } from 'react';
import styles from './styles/style.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      beforeHR: '',
      homeCity: '',
      interests: '',
      prevExperience: '',
      randomFact: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state name:', this.state);
    let newStudent = {
      name: this.state.name,
      beforeHR: this.state.beforeHR,
      homeCity: this.state.homeCity,
      interests: this.state.interests,
      prevExperience: this.state.prevExperience,
      randomFact: this.state.randomFact
    };
    this.setState({
      name: '',
      beforeHR: '',
      homeCity: '',
      interests: '',
      prevExperience: '',
      randomFact: ''
    });
    this.props.addStudent(newStudent);
  }

  handleChange(event) {
    console.log('ETN:', event.target.name);
    console.log('ETV', event.target.value);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render () {

    return (

      <div className={styles.modal}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Preferred name (first and last, and proper pronunciation for either or both if needed - it helps so much!):
            <br />
            <input
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            What have you been up to before Hack Reactor?:
            <br />
            <input
              name="beforeHR"
              type="text"
              value={this.state.beforeHR}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            What city are you coming from to be here at HR?
            <br />
            <input
              name="homeCity"
              type="text"
              value={this.state.homeCity}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Tech interests?
            <br />
            <input
              name="interests"
              type="text"
              value={this.state.interests}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Coding experience?
            <br />
            <input
              name="prevExperience"
              type="text"
              value={this.state.prevExperience}
              onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Fun random stuff?
            <br />
            <input
              name="randomFact"
              type="text"
              value={this.state.randomFact}
              onChange={this.handleChange} />
          </label>
          <br />
          <button onClick={this.props.toggleDisplayForm}>Cancel</button>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}



export default Form;