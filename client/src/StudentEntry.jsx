import React, { Component } from 'react';

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
      <div>
        <br />
        {student.beforeHR}
        <br />
        {student.homeCity}
        <br />
        {student.interests}
        <br />
        {student.prevExperience}
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