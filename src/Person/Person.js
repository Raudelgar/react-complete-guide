import React from 'react';
import Radium from 'radium';
import './Person.css';

const person = (props) => {

  const designPers = {
    "@media (min-width: 500px)": {
      width: "450px"
    }
  };

  return (
    <div className="Person" style={designPers}>
      <p onClick={props.click}>This is {props.name}, and {props.gender} is {props.age} years old</p>
      <p>{props.children}</p>   
      <input type="text" onChange={props.change} value={props.name}/> 
    </div>
  )
};

export default Radium(person);