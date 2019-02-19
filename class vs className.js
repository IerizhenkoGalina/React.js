import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
class Array extends React.Component{
   render() {
     const arr = ['aa','ba','ca','da','ea'];
     const listArr=arr.map(function(item,i){
       return <li key={i}>{item}</li>;
     });
       return <ul>{listArr}</ul>;
}
}
ReactDOM.render(<Array/>, document.getElementById('app'));
//Prints:
/*
aa
ba
ca
da
ea
*/
