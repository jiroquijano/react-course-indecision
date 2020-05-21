const state = {
    title: 'Visibility Toggle',
    paragraph: 'Hide meh! Hide meh!',
    showParagraph: false
};

const appRoot = document.querySelector('#app');

const toggleButtonHandler = () =>{
    state.showParagraph = !state.showParagraph;
    render();
};

const render = () =>{
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleButtonHandler}>Show details</button>
            {state.showParagraph && <p>{state.paragraph}</p>}
        </div>
    );
    ReactDOM.render(template,appRoot);
};

render();