import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  let btnClass = "";
  let classesVar = []; 

  if(props.showPerson) {
    btnClass = classes.red;
  }

  if(props.person.length <= 1) {
    classesVar.push(classes.blue); //classesVar = ["blue"]
  }
  if(props.person.length < 1) {
    classesVar.push(classes.bold); //classesVar = ["blue", "bold"] = //"blue bold"
  }
  return (
        <div className={classes.Cockpit}>
          <h1>{props.appTitle}</h1>
          <p className={classesVar.join(" ")}>This is working!!</p>
          <button

            className={btnClass} 
            onClick={props.toggle}>Show Person
          </button>
        </div>
  );
}

export default cockpit;