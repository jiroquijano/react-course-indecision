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
    increment(){
        this.setState((prevState)=>{
            return {
                count:++prevState.count
            }
        });
    };

    decrement(){
        this.setState((prevState)=>{
            return {
                count:--prevState.count
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
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
            <button onClick={this.reset}>Reset</button>
        </div>
        );
    };
};

const appRoot = document.querySelector('#app');
ReactDOM.render(<Counter/>, appRoot);



// let count = 0;
// const increment = ()=>{
//     count++;
//     renderCounterApp();
// }

// const decrement = ()=>{
//     count--;
//     renderCounterApp();
// };

// const reset = ()=>{
//     count = 0;
//     renderCounterApp();
// };


// const renderCounterApp = ()=>{
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={increment}>+1</button>
//             <button onClick={decrement}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo,appRoot);
// };

// renderCounterApp();