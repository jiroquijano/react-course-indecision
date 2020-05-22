class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Indecision",
            subTitle: "RNGesus, take the wheel",
            options: []
        };
        this.removeAll = this.removeAll.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    };

    removeAll(){
        this.setState(()=>{
            return {
                options: []
            };
        });
    }

    submitHandler(e){
        e.preventDefault();
        const newValue = e.target.input.value.trim();
        e.target.input.value = '';
        if(newValue !== ''){

            this.setState(()=>{
                const newOptions = this.state.options;
                newOptions.push(newValue);
                return{
                    options:newOptions
                }
            });

        }
    };

    render(){
        return(
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle}/>
                <Action/>
                <Options click={this.removeAll} options={this.state.options}/>
                <AddOption submit={this.submitHandler}/>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    };
};

class Action extends React.Component{
    handlePick(){
        alert('Handle Pick');
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    };
};

class Options extends React.Component{  
    render(){
        return(
            <div>
               {
                    this.props.options.map((option,index)=>{
                        return <Option key={index} optionText={option}/>;
                    })
                }
                <button onClick={this.props.click}>Remove all</button>
            </div>
        );
    };
};

class Option extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        );
    };
};

class AddOption extends React.Component{
    render(){
        return (
            <div>
                <form onSubmit={this.props.submit}>
                    <input type="text" placeholder="add option here" name="input" autoComplete="off"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
};

const appRoot = document.querySelector('#app');
ReactDOM.render(<IndecisionApp/>, appRoot);