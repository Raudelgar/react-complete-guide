import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      //jsx syntax
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working!!</p>
        <Person name="Raudel" gender="he" age="31"/>
        <Person name="Marjorie" gender="she" age="30">My hobbies: Teaching</Person>
      </div>
    );

    //this is the same as above
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this works?'));
  }
}

export default App;