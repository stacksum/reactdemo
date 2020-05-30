import React, { Component,Fragment,useState } from 'react';
import "./App.css";
//import Radium from 'radium';
import styled from 'styled-components';
import Person from "./Component/Person/Person";
import Students from "./Component/Student/Student";
import Char from './Component/Assignment-4/char/char';
import Userinput from './Component/Assignment/Userinput/Userinput';
import Useroutput from './Component/Assignment/Useroutput/Useroutput';
import Validation from './Component/Assignment-4/Validation/validation';


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


// When we use Method 
const StyleButton = styled.button`
  background-Color: ${props => props.alt ? 'red':'green'};
  color:white;
  font:inherit;
  border:1px solid blue;
  padding:8px;
  cursor:pointer;

  &:hover{
  background-Color:${props =>props.alt ? 'salmon':'lightgreen'};
  color:black;
  }
`;

// when we use class we can Manipulate State    //Section-2
class App extends Component{
  
  state = {
    persons:[
      { id:'abc',name:'Max',age:27},
      { id:'abd',name:'Manu',age:28},
      { id:'bcs',name:'Stephanie',age:23}
    ],
    otherState:'some other value',
    showPersons:false,
    userinput:''
  }

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
      persons:[
        { name:'CHIRAG',age:27},
        { name:'Manu',age:28},
        { name:'Stephanie',age:23}
      ]
    });
  }


  deletePersonHandler = (personindex) =>{
    const persons = this.state.persons;
    persons.splice(personindex,1);
    this.setState({persons:persons});
  }

  deletecharhandler = (index) => {
    const text = this.state.userinput.split('');
    text.splice(index,1);
    const updatetext = text.join('');
    this.setState({userinput:updatetext});
  }

  namechangedHandler = (event,id) => {
    const personindex = this.state.persons.findIndex(p=>{
      return p.id = id;
    });

    const person = {
      ...this.state.persons[personindex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personindex] = persons;

    this.setState({persons:persons});
    // this.setState({
    //   Person:[
    //     { name:'CHIRAG',age:27},
    //     { name:event.target.value,age:28},
    //     { name:'Stephanie',age:23}
    //   ]
    // });
  }

  inputchangehandler = (event) => {
    this.setState({userinput:event.target.value});
  }

  render(){
    const charList = this.state.userinput.split('').map((ch,index)=>{
      return <Char 
        character={ch} 
        key={index}
        clicked={() => this.deletecharhandler(index)} />;
    });

    const style ={
      backgroundColor:'green',
      color:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'black'
      }
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

          {this.state.persons.map((person,index)=>{
            return <Person 
                click={() => this.deletePersonHandler(index)} 
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed={(event) => this.namechangedHandler(event,person.id)} />
          })}
          {/* <Person name={this.state.Person[0].name} age={this.state.Person[0].age} />
          <Person name={this.state.Person[1].name} age={this.state.Person[1].age}
          click={this.swichNameHandler.bind(this,'Max!')} changed={this.namechangedHandler}>My Hobies: Cricket</Person>
          <Person name={this.state.Person[2].name} age={this.state.Person[2].age}/> */}
        </div>
      );
      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor:'salmon',
        color:'black'
      }
    };

    //let classes = ['red','bold'].join(' ');
    const classes = [];
    if(this.state.persons.length <=2)
    {
      classes.push('red');  //classes = ['red']
    }
    if(this.state.persons.length <=1)
    {
      classes.push('bold'); //classes = ['bold']
    }

    return(
      <div className="App">
        <h1>This is my react app</h1>
        <p className={classes.join(' ')}>This is realy working.</p>
        <StyleButton alt={this.state.showPersons} onClick={this.TogglePersonHandler}>
          Toggle Person
        </StyleButton>
        <button className="button" onClick={this.TogglePersonHandler}>Toggle</button>
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

        <h1>Assignment - SECTION-4</h1>
        <div className="App">
          <ol className="txtleft">
            <li>Create an input field (in app component) with a change listener which Outputs the length of the entered text below it(eg.in a paragraph).</li>
            <li>Create a new component (validationComponent) which receives the text length as a prop.</li>
            <li>Inside the validationComponent,either Output "Text too short" or "Text long enough" depending on the text length (e.g. take  as a minimum length)</li>
            <li>Create another component (=> charcomponent) and style it as an inline box (=> desplay:inline block,padding:16px;text-align:center,margine:16px;border:1px solid black)</li>
            <li>Render a list of charcomponent where each charcomponent receives a different letter of the entered text (in the entered text) as a prop.</li>
            <li>when you clicl a charcomponent,it should be removed from the entered</li>
          </ol>
          <p>Hint: Keep in mind that Javascript string are basically array</p>
          <hr/>
          <input type="text" onChange={this.inputchangehandler} value={this.state.userinput} />
          <p>{this.state.userinput}</p>
          <Validation inputLength={this.state.userinput.length} />
          {charList}
        </div>

        <h1>SECTION-5</h1>
        <div className="App">
          <div className="txtleft">

          </div>
        </div>
      </div>
    );
  }
}


//#region  comment
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
//#endregion
export default App;

//#region  comment
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
//#endregion
{/* <button onClick={swichNameHandler.bind(this,'CHIRAG')}>Switch Name</button> */}