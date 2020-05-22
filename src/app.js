class IndecisionApp extends React.Component{
    removeAll(){

    };

    render(){
        const title = "Indecision";
        const subTitle = "RNGesus, Take the wheel";
        const options = ['Thing one', 'Thing two', 'Thing three'];
        return(
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action/>
                <Options click={this.removeAll} options={options}/>
                <AddOption/>
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
    constructor(props){
        super(props);
        this.removeAllHandler = this.removeAllHandler.bind(this);
    };

    removeAllHandler(){
        console.log(this.props.options);
        alert('Remove all button');
    };
    
    render(){
        return(
            <div>
               {
                    this.props.options.map((option,index)=>{
                        return <Option key={index} optionText={option}/>;
                    })
                }
                <button onClick={this.removeAllHandler}>Remove all</button>
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
    submitHandler(e){
        e.preventDefault();
        if(e.target.input.value.trim() !== '') alert(e.target.input.value.trim());
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" placeholder="add option here" name="input"/>
                    <button>Add option</button>
                </form>
            </div>
        );
    }
};

const appRoot = document.querySelector('#app');
ReactDOM.render(<IndecisionApp/>, appRoot);