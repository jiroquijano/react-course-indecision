import React from 'react';

export default class AddOption extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const option = e.target.input.value.trim();
        e.target.input.value = '';
        const error = this.props.submit(option);

        this.setState(()=>({error}));
    }

    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="add option here" name="input" autoComplete="off"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
};