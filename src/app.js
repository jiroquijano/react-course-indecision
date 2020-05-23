class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: 'Indecision App',
            subTitle: "RNGesus, take the wheel",
            options: [],
            chosen: ''
        };
        this.removeAll = this.removeAll.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.chooseTask = this.chooseTask.bind(this);
        this.removeOne = this.removeOne.bind(this);
    };

    componentDidMount(){
       console.log('fetching data');
       try{
           const options = JSON.parse(localStorage.getItem('options')) || [];
           this.setState(()=>({options}));
       }catch(e){
           this.setState(()=>({options:[]}));
       }
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }

    removeOne(option){
        this.setState((prevState)=>(
            {
                options:prevState.options.filter((curr)=>curr!==option)
            }
        ));
    };
    
    removeAll(){
        this.setState(()=>{
            return {
                options: [],
                chosen: ''
            };
        });
    };
    
    chooseTask(){
        const chosenNumber = Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>{
            alert(this.state.options[chosenNumber]);
            return {
                chosen: this.state.options[chosenNumber]
            }
        });
    };

    submitHandler(option){
        if (this.state.options.includes(option.toLowerCase())){
            return `"${option}" already in the list!`;
        } else if(option.length === 0){
            return 'empty string not allowed';
        }
        const newOptions = this.state.options.concat(option.toLowerCase());

        this.setState(()=>({options:newOptions}));
    };

    render(){
        return(
            <div>
                <Header 
                    subTitle={this.state.subTitle}
                />
                {this.state.chosen ? <p>{this.state.chosen}</p>:undefined}
                <Action 
                    chooseTask={this.chooseTask}
                    hasOptions={this.state.options.length > 0}
                />
                <Options 
                    removeAll={this.removeAll}
                    removeOne={this.removeOne}
                    options={this.state.options}

                 />
                <AddOption 
                    submit={this.submitHandler}
                />
            </div>
        );
    };
};

IndecisionApp.defaultProps={
    options: []
}

const Header = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
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
}

const Option = (props)=>{
    return (
        <div>
            {props.optionText}
            <button onClick={(e)=>{
                props.delete(props.optionText)
            }}>Remove</button>
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

const appRoot = document.querySelector('#app');
ReactDOM.render(<IndecisionApp/>, appRoot);