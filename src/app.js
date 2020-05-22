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
    render(){
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.chooseTask}>
                What should I do?
                </button>
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
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const option = e.target.input.value.trim();
        e.target.input.value = '';
        const error = this.props.submit(option);
        if(error) alert(error);
    }

    render(){
        return (
            <div>
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