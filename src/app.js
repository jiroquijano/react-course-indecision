class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "Indecision",
            subTitle: "RNGesus, take the wheel",
            options: [],
            chosen: ''
        };
        this.removeAll = this.removeAll.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.chooseTask = this.chooseTask.bind(this);
    };

    chooseTask(){
        const chosenNumber = Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>{
            return {
                chosen: this.state.options[chosenNumber]
            }
        });
    };

    removeAll(){
        this.setState(()=>{
            return {
                options: [],
                chosen: ''
            };
        });
    };

    submitHandler(option){
        if (this.state.options.includes(option.toLowerCase())){
            return `"${option}" already in the list!`;
        } else if(option.length === 0){
            return 'empty string not allowed';
        }

        this.setState(()=>{
            const newOptions = this.state.options.concat(option.toLowerCase());
            return{
                options:newOptions
            }
        });
    };

    render(){
        return(
            <div>
                <Header title={this.state.title} subTitle={this.state.subTitle}/>
                {this.state.chosen ? <p>{this.state.chosen}</p>:undefined}
                <Action chooseTask={this.chooseTask} hasOptions={this.state.options.length > 0}/>
                <Options click={this.removeAll} options={this.state.options}/>
                <AddOption submit={this.submitHandler}/>
            </div>
        );
    };
};

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
};

const Action = (props) =>{
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.chooseTask}>
            What should I do?
            </button>
        </div>
    );
};

const Options = (props)=>{
    return (
        <div>
            {
                props.options.map((option,index)=>{
                    return <Option key={index} optionText={option}/>
                })
            }
            <button onClick={props.click}>Remove all</button>
        </div>
    );
}

const Option = (props)=>{
    return (
        <div>
            <p>{props.optionText}</p>
        </div>
    );
};

class AddOption extends React.Component{
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

        this.setState(()=>{
            return{error}
        });
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

const appRoot = document.querySelector('#app');
ReactDOM.render(<IndecisionApp/>, appRoot);