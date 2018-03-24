import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  render() {
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