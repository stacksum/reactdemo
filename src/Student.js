import React, { Component } from "react";

/// old react
/*function Student(){
	return <h1>Hello chirag</h1>;	
}*/

/// ES6 JS - two type of components

// functional component

/*const Student = (props) => {
	return <h1>Hello {props.name}</h1>
}*/


// class component

/*class Student extends Component{
	render(){
		return <h1>Hello {this.props.name}</h1>
	}
}*/


const Student = (props) =>{
	return(
		<React.Fragment>
			<h4>Hello {props.name}</h4>
		</React.Fragment>
	);
}



export default Student;

