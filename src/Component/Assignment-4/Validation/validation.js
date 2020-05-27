import React from 'react';

const Validation = (props) => {
    let validationmessage = 'Text long enough';
    if(props.inputLength <= 5){
        validationmessage = 'Text too short!';
    }
    return (
        <div>
            {
                <p>{validationmessage}</p>
            }
        </div>
    )
}

export default Validation;