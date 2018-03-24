import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.person.map((person, index) => {
    return <Person 
        click={() => props.delete(index)}
        name={person.name}
        gender={person.gender}
        age={person.age}
        key={person.id}
        change={(event) => props.change(event,  person.id)}/>
  }
);

export default persons;