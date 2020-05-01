import React from "react";

const Person = (Props) => {
    return (
        <p>I'm a {Props.name} and I am {Props.age} years old.</p>
        
    );
}

export default Person;