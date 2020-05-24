import React from 'react';
import Option from './Option';

const Options = (props)=>(
    <div>
        {props.options.length === 0 && <p>Please enter options</p>}
        <button onClick={props.removeAll}>
            Remove all
        </button>
        {
            props.options.map((option,index)=>(
                <Option 
                    key={index} 
                    optionText={option}
                    delete={props.removeOne}
                />
            ))
        }
    </div>
);

export default Options;