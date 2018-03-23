import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  //Initializing variables
  state = {
    person: [
      {id: 1, name: "Raudel", gender: "he", age: 31},
      {id: 2, name: "Marjorie", gender: "she",age: 30}
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
  changeNameHandler = (event, id) =>{
    const personIndex = this.state.person.findIndex((p) => {
      return p.id === id;
    });

    //Using ES5 syntax
    //const person = Object.assign({}, this.state.person[personIndex]);

    //Using ES6 syntax
    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState({person: persons});
  }

  togglePeronsHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow});
  }

  //delete a person method
  deletePersonHandler = (indexPerson) => {
    //since array are objects in JS, you need to make 
    //a copy of its reference in order to manipulated
    //One way to do it is using slice()
    // const personDel = this.state.person.slice();
    //Other way is implementing ES6 syntax
    const personDel = [...this.state.person];
    personDel.splice(indexPerson, 1);
    this.setState({person : personDel});
  }

  //React execution method
  render() {
    //inline style
    const designBtn = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;

    if(this.state.showPerson) {
      persons = (
          <div>
            {this.state.person.map((person, index) => {
              return <Person 
                click={this.deletePersonHandler.bind(this,index)}
                // click={() => this.deletePersonHandler(index)}
                name={person.name}
                gender={person.gender}
                age={person.age}
                key={person.id}
                change={(event) => this.changeNameHandler(event, person.id)}/>
            })}
          </div>
      );
      designBtn.backgroundColor = "red";
    }

    let classesVar = []; 
    if(this.state.person.length <= 1) {
      classesVar.push(classes.blue); //classesVar = ["blue"]
    }
    if(this.state.person.length < 1) {
      classesVar.push(classes.bold); //classesVar = ["blue", "bold"] = //"blue bold"
    }
    return (
        <div className={classes.App}>
          <h1>Hi, I am a React App</h1>
          <p className={classesVar.join(" ")}>This is working!!</p>
          <button
          style={designBtn} 
          onClick={this.togglePeronsHandler}>
          Show Person
          </button>
          {persons}
        </div>
    );
  }
}

export default App;