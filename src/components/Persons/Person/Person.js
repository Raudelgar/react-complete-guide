import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../Hoc/withClass';
import Aux from '../../../Hoc/AuxHoc';
import PropTypes from 'prop-types';

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
    if(this.props.positionInd == 0) {
      this.elementInput.focus();
    }  
  }

  render() {
    console.log("[Person.js] Inside render()");
    return (
      <Aux>
        <p onClick={this.props.click}>This is {this.props.name}, and {this.props.gender}   is {this.props.age} years old</p>
        <p>{this.props.children}</p>   
        <input 
        type="text" 
        onChange={this.props.change} 
        value={this.props.name}
        ref={(inp) => {this.elementInput = inp}}/> 
      </Aux>  
    );
  }
}

Person.PropTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  gender: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);