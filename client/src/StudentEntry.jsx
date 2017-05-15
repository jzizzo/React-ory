import React, { Component } from 'react';

class StudentEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { student } = this.props;
    return (
      <div>
      <br />
        <li>
          {student.name}
        </li>
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

}

export default StudentEntry;