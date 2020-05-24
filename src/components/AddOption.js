import React from 'react';

export default class AddOption extends React.Component{
    state = {
        error: undefined
    };

    handleSubmit = (e) =>{
        e.preventDefault();
        const option = e.target.input.value.trim();
        e.target.input.value = '';
        const error = this.props.submit(option);

        this.setState(()=>({error}));
    };

    render(){
        return (
            <div>
                {this.state.error && <p className='add-option-error'>{this.state.error}</p>}
                <form className='add-option' onSubmit={this.handleSubmit}>
                    <input className='add-option__input' type="text" placeholder="add option here" name="input" autoComplete="off"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        );
    }
};