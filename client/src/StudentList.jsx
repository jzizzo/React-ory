import React from 'react';
import StudentEntry from './StudentEntry.jsx';

let StudentList = (props) => (
    <div>
      {props.students.map((student, key) => (
        <StudentEntry student={student} key={key}/>))}
    </div>
);

export default StudentList;