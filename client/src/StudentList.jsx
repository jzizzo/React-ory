import React from 'react';
import StudentEntry from './StudentEntry.jsx';

let StudentList = (props) => (
    <div>
    {Object.keys(props.students).map((key) => (
      <StudentEntry student={props.students[key]} key={key}/>))
    }
    </div>
);

export default StudentList;