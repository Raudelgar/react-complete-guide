import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  constructor(props) {
    super(props);
    console.log("[Persons.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Persons.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Persons.js] Inside componentDidMount()");
  }

  componentWillReceiveProps(nextProps) {
    console.log("[UPDATE Persons.js] Inside componentWillReceiveProps()", nextProps);
  }

  //This method may cancel update process
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside shouldComponentUpdate()", nextProps, nextState); 
    // return true; //the update continue 
    return nextProps.person !== this.props.person;
    // return false; //the update will stop, not update perform  
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("[UPDATE Persons.js] Inside componentWillUpdate()", nextProps, nextState);
  }

  componentDidUpdate() {
    console.log("[UPDATE Persons.js] Inside componentDidUpdate()");
  }

  render() {
    console.log("[Persons.js] Inside render()");
    return this.props.person.map((person, index) => {
      return <Person 
          click={() => this.props.delete(index)}
          name={person.name}
          gender={person.gender}
          age={person.age}
          key={person.id}
          change={(event) => this.props.change(event,  person.id)}/>
    });
  }
}

// const persons = (props) => props.person.map((person, index) => {
//     return <Person 
//         click={() => props.delete(index)}
//         name={person.name}
//         gender={person.gender}
//         age={person.age}
//         key={person.id}
//         change={(event) => props.change(event,  person.id)}/>
//   });

export default Persons;