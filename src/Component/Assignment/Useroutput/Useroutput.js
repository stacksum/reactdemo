import React from 'react';
import './Useroutput.css';

const Useroutput = (props) =>{
    return (
        <div className="Useroutput">
            <p>Username:{props.userName}</p>
            <p>I hope I'll be overwritten!</p>
        </div>
    );
}

export default Useroutput;