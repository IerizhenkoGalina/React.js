import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('Hello, guys!');
  }

  render() {
    return <button onClick={this.scream}></button>;
  }
}
ReactDOM.render(<Button/>, document.getElementById('app'))
//Prints: red button, Once your component renders, click on the button in the browser. Bone-chilling!
