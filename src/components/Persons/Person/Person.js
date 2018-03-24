import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component {
  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>This is {this.props.name}, and {this.props.gender}   is {this.props.age} years old</p>
        <p>{this.props.children}</p>   
        <input type="text" onChange={this.props.change} value={this.props.name}/> 
      </div>  
    );
  }
}



// const person = (props) => {

//   return (
//     <div className={classes.Person}>
//       <p onClick={props.click}>This is {props.name}, and {props.gender} is {props.age} years old</p>
//       <p>{props.children}</p>   
//       <input type="text" onChange={props.change} value={props.name}/> 
//     </div>
//   )
// };

export default Person;