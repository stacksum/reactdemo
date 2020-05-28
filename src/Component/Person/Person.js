import React from "react";
//import './Person.css';
//import Radium from 'radium';
import styled from 'styled-components';

// const styleDiv = style.div'
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eee;
//     box-shadow: 0 2px 3px #ccc;
//     padding: 16px;
//     text-align: center;

// @media(min-width:500px){
//         width:450px;
// }
// ';

const StyleDiv = styled.div`
    width: 60%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media(min-width:500px){
        width:450px;
    }
`;

const Person = (Props) => {

    // const style = {
    //     '@media(min-width:500px)':{
    //         width:'450px'
    //     }
    // };

    return (
        <StyleDiv>
                <p onClick={Props.click}>I'm a  {Props.name} and I am {Props.age} years old.</p>
                <input type="text" onChange={Props.changed} value={Props.name} />
        </StyleDiv>
    );
}

export default Person;