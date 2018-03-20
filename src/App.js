import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      {name: "Raudel", gender: "he", age: 31},
      {name: "Marjorie", gender: "she",age: 30}
    ]
  }

  switchNameHandler = () => {
    console.log("Was cliked!!");
  }

  render() {
    return (
      //jsx syntax
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working!!</p>
        <button onClick={this.switchNameHandler}>Switch Names</button>
        <Person name={this.state.person[0].name} gender={this.state.person[0].gender} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} gender={this.state.person[1].gender} age={this.state.person[1].age}>My hobbies: Teaching</Person>
      </div>
    );

    //this is the same as above
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this works?'));
  }
}

export default App;