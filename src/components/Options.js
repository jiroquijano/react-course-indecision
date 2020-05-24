import React from 'react';
import Option from './Option';

const Options = (props)=>(
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button 
                className='button button--link'
                onClick={props.removeAll}
            >
                Remove all
            </button>
        </div>
        {props.options.length === 0 && <p className='widget__message'>Please enter options</p>}
        {
            props.options.map((option,index)=>(
                <Option 
                    key={index} 
                    count={index+1}
                    optionText={option}
                    delete={props.removeOne}
                />
            ))
        }
    </div>
);

export default Options;