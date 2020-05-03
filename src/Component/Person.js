import React from "react";

const Person = (Props) => {
    return (
        <div>
            <p onClick={Props.click}>I'm a  {Props.name} and I am {Props.age} years old.</p>
            <input type="text" onChange={Props.changed} value={Props.name} />
        </div>
    );
}

export default Person;