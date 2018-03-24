import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../Hoc/withClass';
import Aux from '../../../Hoc/AuxHoc';

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>This is {this.props.name}, and {this.props.gender}   is {this.props.age} years old</p>
        <p>{this.props.children}</p>   
        <input type="text" onChange={this.props.change} value={this.props.name}/> 
      </Aux>  
    );
  }
}


export default withClass(Person, classes.Person);