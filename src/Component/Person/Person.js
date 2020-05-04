import React from "react";
import './Person.css';

const Person = (Props) => {
    return (
        <div className="Person">
            <p onClick={Props.click}>I'm a  {Props.name} and I am {Props.age} years old.</p>
            <input type="text" onChange={Props.changed} value={Props.name} />
        </div>
    );
}

export default Person;