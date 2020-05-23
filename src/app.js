import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component{
    render(){
        <h1>Hello</h1>
    }
};

ReactDOM.render(<Test/>,document.querySelector('#app'));