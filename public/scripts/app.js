'use strict';

console.log('app.js is running');

var app = {
    title: 'Indecision App',
    subtitle: 'Made with React',
    options: [],
    chosen: ''
};

var numbers = [55, 101, 1000];

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.option.value;
    if (option) {
        app.options.push(option);
        rerender();
        e.target.option.value = '';
    }
};

var onClearList = function onClearList() {
    app.options.length = 0;
    app.chosen = '';
    rerender();
};

var onMakeDecision = function onMakeDecision() {
    var choice = Math.floor(Math.random() * app.options.length);
    app.chosen = app.options[choice];
    rerender();
};

var appRoot = document.querySelector('#app');

var rerender = function rerender() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? "Here are your options" : "No options"
        ),
        app.chosen ? React.createElement(
            'p',
            null,
            ' Chosen: ',
            app.chosen
        ) : undefined,
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onClearList },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, index) {
                return React.createElement(
                    'li',
                    { key: index },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};

rerender();
