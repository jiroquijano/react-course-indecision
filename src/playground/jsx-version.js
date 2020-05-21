console.log('app.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Made with React',
    options: [],
    chosen: ''
};

const numbers = [55,101,1000];

const onFormSubmit = (e)=>{
    e.preventDefault();
    const option = e.target.option.value;
    if(option){
        app.options.push(option);
        rerender();
        e.target.option.value = '';
    }
};

const onClearList = ()=>{
    app.options.length = 0;
    app.chosen = '';
    rerender();
};

const onMakeDecision = ()=>{
    const choice = Math.floor(Math.random()*app.options.length);
    app.chosen = app.options[choice];
    rerender();
}

const appRoot = document.querySelector('#app');

const rerender = () =>{
    const template = (<div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        {app.chosen ? <p> Chosen: {app.chosen}</p> : undefined}
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={onClearList}>Remove all</button>
        <ol>
            {
                app.options.map((option,index)=>{
                    return <li key={index}>{option}</li>;
                })
            }
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add option</button>
        </form>
    </div>);
    ReactDOM.render(template,appRoot);
}

rerender();