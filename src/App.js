import React, { Component,Fragment,useState } from 'react';
import Students from "./Component/Student/Student";
import Person from "./Component/Person/Person";
import Userinput from './Component/Assignment/Userinput/Userinput';
import Useroutput from './Component/Assignment/Useroutput/Useroutput';
import "./App.css";

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
class App extends Component{
  state = {
    Person:[
      { name:'Max',age:27},
      { name:'Manu',age:28},
      { name:'Stephanie',age:23}
    ],
    otherState:'some other value',
    showPersons:false
  }

  // state = {
  //   username:'SuperMax'
  // };


  Usernamechangedhandler = (event) =>{
    this.setState({username:event.target.value});
  }


  TogglePersonHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  };


  swichNameHandler = () =>{
  //console.log('was clicked...');
  //DON'T DO This   this.state.Person[0].name = "CHIRAG";

    this.setState({
      Person:[
        { name:'CHIRAG',age:27},
        { name:'Manu',age:28},
        { name:'Stephanie',age:23}
      ]
    });
  }


  render(){


    const style ={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };


    let persons = null;
    
    if (this.state.showPersons) {
      persons = (
        <div>
          <button style={style} onClick={this.swichNameHandler}>Switch Name</button>
          <Students name="Chirag"/>
          <Students name="Nikunj"/>
          <Students name="Jigna"/>
          <Students name="Sonali"/>
          <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
          <Person name={this.state.Person[1].name} age={this.state.Person[1].age}
          click={this.swichNameHandler.bind(this,'Max!')} changed={this.namechangedHandler}>My Hobies: Cricket</Person>
          <Person name={this.state.Person[2].name} age={this.state.Person[2].age}/>
        </div>
      )
    }

    return(
      <div className="App">
        <h1>This is my react app</h1>
        <p>This is realy working.</p>
        <button style={style} onClick={this.TogglePersonHandler}>Toggle Popup Switch Name</button>
        {persons}
        {/* { 
          this.state.showPersons === true ?
          <div>
            <button style={style} onClick={this.swichNameHandler}>Switch Name</button>
            <Students name="Chirag"/>
            <Students name="Nikunj"/>
            <Students name="Jigna"/>
            <Students name="Sonali"/>
            <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
            <Person name={this.state.Person[1].name} age={this.state.Person[1].age}
            click={this.swichNameHandler.bind(this,'Max!')} changed={this.namechangedHandler}>My Hobies: Cricket</Person>
            <Person name={this.state.Person[2].name} age={this.state.Person[2].age}/>
          </div> : null
        } */}

        <h1>Assignment - SECTION-3</h1>
        <div className="App">
          <ol className="txtleft">
            <li> Create tow new components: Userinput and Useroutput</li>
            <li> Userinput should hold an input element,Useroutput two paragraph</li>
            <li> Output multiple Useroutput components in the App component</li>
            <li> Pass a username (of your choice) to Useroutput via props and</li>
            <li> Add state to the App component (=> the Username) and pass the</li>
            <li> Add a Method to Manipulate the state (=> an event-handler method)</li>
            <li> Pass the event-handler method reference to the Userinput component</li>
            <li> Ensure that the new input entered by the user overwrites the </li>
            <li> Add Two-way binding to your input (in Userinput) to also</li>
            <li>Add styling of your choice to your components/elements in </li>
          </ol>
        </div>
        <Userinput changed={this.Usernamechangedhandler} currentName={this.state.username} />
        <Useroutput userName={this.state.username} />
        <Useroutput userName="Max" />
      </div>
    );
  }

  namechangedHandler = (event) => {
    this.setState({
      Person:[
        { name:'CHIRAG',age:27},
        { name:event.target.value,age:28},
        { name:'Stephanie',age:23}
      ]
    });
  }

  
}

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

export default App;


//    Hook-UseState() Section-4
/*const App = props => {
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
  const swichNameHandler = (NewName) =>{
  //console.log('was clicked...');
  //DON'T DO This   this.state.Person[0].name = "CHIRAG";

  setpersonState({
    Person:[
        { name:NewName,age:27},
        { name:'Manu',age:28},
        { name:'Stephanie',age:23}
      ]
    });
  }


  const namechangedHandler = (event) => {
    this.setState({
      Person:[
        { name:'CHIRAG',age:27},
        { name:event.target.value,age:28},
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
      <button onClick={() => swichNameHandler('CHIRAG!!')}>Switch Name</button>
      <Person name={personState.Person[0].name} age={personState.Person[0].age} />  
      <Person name={personState.Person[1].name} age={personState.Person[1].age} 
      click={swichNameHandler.bind(this,'Max!')} changed={namechangedHandler}>My Hobies: Cricket</Person>
      <Person name={personState.Person[2].name} age={personState.Person[2].age}/>
    </div>
  );
}

export default App;*/

{/* <button onClick={swichNameHandler.bind(this,'CHIRAG')}>Switch Name</button> */}