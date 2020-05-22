class Visibility extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show: false,
            paragraph: 'Hide meh! Hide meh!'
        }
        this.toggleButtonHandler = this.toggleButtonHandler.bind(this);
    }
    toggleButtonHandler(){
        this.setState((previousState)=>{
            return {
                show: !previousState.show
            };
        });
    };

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleButtonHandler}>Show details</button>
                {this.state.show && <p>{this.state.paragraph}</p>}
            </div>
        );
    }
};

const appRoot = document.querySelector('#app');
ReactDOM.render(<Visibility/>, appRoot);




// const state = {
//     title: 'Visibility Toggle',
//     paragraph: 'Hide meh! Hide meh!',
//     showParagraph: false
// };

// const appRoot = document.querySelector('#app');

// const toggleButtonHandler = () =>{
//     state.showParagraph = !state.showParagraph;
//     render();
// };

// const render = () =>{
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleButtonHandler}>Show details</button>
//             {state.showParagraph && <p>{state.paragraph}</p>}
//         </div>
//     );
//     ReactDOM.render(template,appRoot);
// };

// render();