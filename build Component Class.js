//We have directory.It has two files:Parent.js and Child.js
//We create two Component Classes where the first Class has a Stateful Component and second Class has a Stateless Component:
//Build the First a Stateful Component Class:

import React from "react";
import ReactDOM from "react-dom";
//When we created a Stateless Component class name's Child we will pass a Component's State
import {Child} from './Child';
class Parent extends React.Component{
//we must have constructor()method with parameter props because Parent is Stateful:
constructor(props){
super(props);
this.state={name:"Frarthur"};
}
 render() {
    return <Child name = 'Frarthur'/>;
  }
}

ReactDOM.render(<Parent/>,
 document.getElementById('app'));
 
 //Build the Second a Stateless Component Class:
 import React from 'react';
//we don't have ReactDOM libery because we don't use it in this file
export class Child extends React.Component {
  render() {
    return <h1>Hey, my name is {this.props.name}!</h1>;
  }
}
//Prints: Hey, my name is Frarthur!//rendered information
