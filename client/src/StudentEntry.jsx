import React, { Component } from 'react';
import styles from './styles/style.css';

class StudentEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayStudentDetails: false
    };
  }

  toggleStudentDetails() {
    this.setState({
      displayStudentDetails: !this.state.displayStudentDetails
    });
  }

  displayStudentDetails() {
    const { student } = this.props;

    return (
      <div className="container-fluid .blue">
        <br />
        <b>Life before Hack Reactor:</b>
        <br />
        {student.beforeHR}
        <br />
        <b>Hailing from:</b>
        <br />
        {student.homeCity}
        <br />
        <b>Tech Interests:</b>
        <br />
        {student.interests}
        <br />
        <b>Coding Experience:</b>
        <br />
        {student.prevExperience}
        <br />
        <b>Random Fact:</b>
        <br />
        {student.randomFact}
        <br />
      </div>
    );
  }

  render() {
    const { student } = this.props;
    return (
      <div>
      <br />
        <li onClick={this.toggleStudentDetails.bind(this)}>
          {student.name}
        </li>
        {this.state.displayStudentDetails === true ? this.displayStudentDetails() : null }
      </div>
    );
  }

}

export default StudentEntry;