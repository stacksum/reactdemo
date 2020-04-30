import React, { Component,Fragment } from 'react';
import Students from "./Student";

/*class App extends Component{
  render(){
    return (
        <Fragment>
          <h1>Hello React-JS</h1>
          <h2>Hello World</h2>
         </Fragment>
      );
  }
}*/


const App = () =>{
  return (
    <div>
      <Students name="Chirag"/>
      <Students name="Nikunj"/>
      <Students name="Jigna"/>
      <Students name="Sonali"/>
    </div>
    )
}

export default App;
