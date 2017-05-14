import React, { Component } from 'react';
import StudentList from './StudentList.jsx';

class App extends Component {


  render () {

    return (
      <div>
        <h1>Welcome to React-ory</h1>
        <StudentList />
      </div>
    );
  }

}

export default App;