class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        };
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount(){
        try{
            const count = parseInt(localStorage.getItem('count'));
            this.setState(()=>({count:isNaN(count)?0:count}));
        }catch(e){
            this.setState(()=>({count:0}));
        }
    };

    componentDidUpdate(prevProp,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    };

    increment(){
        this.setState((prevState)=>{
            return {
                count:prevState.count + 1
            }
        });
    };

    decrement(){
        this.setState((prevState)=>{
            return {
                count:prevState.count - 1
            }
        });
    };

    reset(){
        this.setState({count:0});
    };
    
    render(){
        return (<div>
            <p>{this.state.name}</p>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.decrement}>-1</button>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        );
    };
};

const appRoot = document.querySelector('#app');
ReactDOM.render(<Counter/>, appRoot);