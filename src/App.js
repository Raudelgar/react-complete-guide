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
  // switchNameHandler = (newName) => {
  //   // console.log("Was cliked!!");
  //   this.setState({
  //     person: [
  //       {name: newName, gender: "he", age: 32},
  //       {name: "Marjorie", gender: "she",age: 31}
  //     ]
  //   } 
  //   );
  // }

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

  //delete a person method
  deletePersonHandler = (indexPerson) => {
    const personDel = this.state.person;
    personDel.splice(indexPerson, 1);
    this.setState({personDel : personDel})
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

    let persons = null;

    if(this.state.showPerson) {
      persons = (
          <div>
            {this.state.person.map((person, index) => {
              return <Person 
                click={this.deletePersonHandler.bind(this,index)}
                name={person.name}
                gender={person.gender}
                age={person.age}/>
            })}
          </div>
      );
    }

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
        {persons}
      </div>
    );

    //this is the same as above
    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Does this works?'));
  }
}

export default App;