import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  //Initializing variables
  state = {
    person: [
      {name: "Raudel", gender: "he", age: 31},
      {name: "Marjorie", gender: "she",age: 30}
    ],
    showPerson : false
  }

  //Method
  switchNameHandler = (newName) => {
    // console.log("Was cliked!!");
    this.setState({
      person: [
        {name: newName, gender: "he", age: 32},
        {name: "Marjorie", gender: "she",age: 31}
      ]
    } 
    );
  }

  //Method
  changeNameHandler = (event) =>{
    this.setState({
      person: [
        {name: "Raudel", gender: "he", age: 31},
        {name: event.target.value, gender: "she",age: 30}
      ]
    });
  }

  togglePeronsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  //React execution method
  render() {
    //inline style
    const designBtn = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      //jsx syntax
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is working!!</p>
        <button
        style={designBtn} 
        onClick={this.togglePeronsHandler}>
        Show Person
        </button>
        { 
          this.state.showPerson ?
            <div>
              <Person
                name={this.state.person[0].name} 
                gender={this.state.person[0].gender} 
                age={this.state.person[0].age}/>
              <Person
                click={this.switchNameHandler.bind(this, "Rau!!")}  
                name={this.state.person[1].name} 
                gender={this.state.person[1].gender} 
                age={this.state.person[1].age}
                change={this.changeNameHandler}>
                My hobbies: Teaching
              </Person>
            </div> : null
        }
      </div>
    );

    //this is the same as above
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this works?'));
  }
}

export default App;