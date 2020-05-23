import React from 'react';

export const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button onClick={(e)=>{
                props.delete(props.optionText)
            }}>Remove</button>
        </div>
    );
};
