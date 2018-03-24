import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
     let persons = null;

    if(this.state.showPerson) {
      persons = <Persons
                  person={this.state.person}
                  delete={this.deletePersonHandler}
                  change={this.changeNameHandler}/>
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            appTitle={this.props.title}
            person={this.state.person}
            showPerson={this.state.showPerson}
            toggle={this.togglePeronsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;