import React, { Component } from 'react';

class StudentEntry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { student } = this.props;
    return (
      <div>
        {student.name}
      </div>
    );
  }

}

export default StudentEntry;