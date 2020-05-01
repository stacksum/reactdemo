import React, { Component,Fragment,useState } from 'react';
import Students from "./Student";
import Person from "./Component/Person";


// simple show the single Element  // Section-1
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

// when we use class we can Manipulate State    //Section-2
// class App extends Component{
//   state = {
//     Person:[
//       { name:'Max',age:27},
//       { name:'Manu',age:28},
//       { name:'Stephanie',age:23}
//     ]
//   }

//   swichNameHandler = () =>{
//   //console.log('was clicked...');
//   //DON'T DO This   this.state.Person[0].name = "CHIRAG";

//     this.setState({
//       Person:[
//         { name:'CHIRAG',age:27},
//         { name:'Manu',age:28},
//         { name:'Stephanie',age:23}
//       ]
//     });
//   }


//   render(){
//     return(
//       <div className="App">
//         <h1>This is my react app</h1>
//         <p>This is realy working.</p>
//         <button onClick={this.swichNameHandler}>Switch Name</button>
//         <Students name="Chirag"/>
//         <Students name="Nikunj"/>
//         <Students name="Jigna"/>
//         <Students name="Sonali"/>
//         <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
//         <Person name={this.state.Person[1].name} age={this.state.Person[1].age}>My Hobies: Cricket</Person>
//         <Person name={this.state.Person[2].name} age={this.state.Person[2].age}/>
//       </div>
//     );
//   }

// }

//component composing.
// const App = () =>{
//   return (
//     <div className="App">
//       <Students name="Chirag"/>
//       <Students name="Nikunj"/>
//       <Students name="Jigna"/>
//       <Students name="Sonali"/>
//       <button>Switch Name</button>
//       <Person name="Max" age="27" />
//       <Person name="Manu" age="29">My Hobies: Cricket</Person>
//       <Person name="Stephanie" age="25"/>
//     </div>
//     )
// }

// export default App;


//    Hook-UseState() Section-4

const App = props => {
  const [personState,setpersonState] = useState({
    Person:[
      { name:'Max',age:27},
      { name:'Manu',age:28},
      { name:'Stephanie',age:23}
    ],
    otherstate:'some other value'
  });

  const [otherstate,setotherstate] = useState('some other value');
  console.log(personState,otherstate)
  const swichNameHandler = () =>{
  //console.log('was clicked...');
  //DON'T DO This   this.state.Person[0].name = "CHIRAG";

  setpersonState({
    Person:[
        { name:'CHIRAG',age:27},
        { name:'Manu',age:28},
        { name:'Stephanie',age:23}
      ]
    });
  }

  return (
    <div className="App">
      <Students name="Chirag"/>
      <Students name="Nikunj"/>
      <Students name="Jigna"/>
      <Students name="Sonali"/>
      <button onClick={swichNameHandler}>Switch Name</button>
      <Person name={personState.Person[0].name} age={personState.Person[0].age} />
      <Person name={personState.Person[1].name} age={personState.Person[1].age}>My Hobies: Cricket</Person>
      <Person name={personState.Person[2].name} age={personState.Person[2].age}/>
    </div>
  );
}

export default App;

