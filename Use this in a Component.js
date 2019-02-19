import React from 'react';
import ReactDOM from 'react-dom';

class Apple extends React.Component {
	// name property goes here:
get num1(){
 return '1';
  }
get num2(){
 return '2';
  }
render (){
    return <div>This is {this.num1}+ {this.num2} </div>;
         }
}
ReactDOM.render(<Apple/>, document.getElementById('app'));
//Prints: This is 1+ 2
