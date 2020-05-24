import React from 'react'; 
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component{
    state= {
        title: 'Indecision App',
        subTitle: "RNGesus, take the wheel",
        options: [],
        chosen: ''
    };

    removeOne = (option)=>{
        this.setState((prevState)=>(
            {
                options:prevState.options.filter((curr)=>curr!==option)
            }
        ));
    };
    
    removeAll = () =>{
        this.setState(()=>{
            return {
                options: [],
                chosen: ''
            };
        });
    };
    
    chooseTask = () =>{
        const chosenNumber = Math.floor(Math.random()*this.state.options.length);
        this.setState(()=>{
            alert(this.state.options[chosenNumber]);
            return {
                chosen: this.state.options[chosenNumber]
            }
        });
    };

    submitHandler = (option)=>{
        if (this.state.options.includes(option.toLowerCase())){
            return `"${option}" already in the list!`;
        } else if(option.length === 0){
            return 'empty string not allowed';
        }
        const newOptions = this.state.options.concat(option.toLowerCase());

        this.setState(()=>({options:newOptions}));
    };

    componentDidMount = ()=>{
        console.log('fetching data');
        try{
            const options = JSON.parse(localStorage.getItem('options')) || [];
            this.setState(()=>({options}));
        }catch(e){
            this.setState(()=>({options:[]}));
        }
     };
     
     componentDidUpdate = (prevProps, prevState)=>{
         if(prevState.options.length !== this.state.options.length){
             const json = JSON.stringify(this.state.options);
             localStorage.setItem('options', json);
             console.log('saving data');
         }
     };

    render(){
        return(
            <div>
                <Header
                    title={this.state.title}
                    subTitle={this.state.subTitle}
                />
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
