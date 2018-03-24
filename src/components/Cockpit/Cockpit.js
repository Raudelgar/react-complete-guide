import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../Hoc/AuxHoc';

const cockpit = (props) => {
  let btnClass = classes.btn;
  let classesVar = []; 

  if(props.showPerson) {
    btnClass = [classes.btn, classes.red].join(" ");
  }

  if(props.person.length <= 1) {
    classesVar.push(classes.blue); //classesVar = ["blue"]
  }
  if(props.person.length < 1) {
    classesVar.push(classes.bold); //classesVar = ["blue", "bold"] = //"blue bold"
  }
  return (
        <Aux>
          <h1>{props.appTitle}</h1>
          <p className={classesVar.join(" ")}>This is working!!</p>
          <button
            className={btnClass} 
            onClick={props.toggle}>Show Person
          </button>
        </Aux>
  );
}

export default cockpit;