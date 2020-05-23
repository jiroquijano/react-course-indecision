'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.state = {
            title: 'Indecision App',
            subTitle: "RNGesus, take the wheel",
            options: [],
            chosen: ''
        };
        _this.removeAll = _this.removeAll.bind(_this);
        _this.submitHandler = _this.submitHandler.bind(_this);
        _this.chooseTask = _this.chooseTask.bind(_this);
        _this.removeOne = _this.removeOne.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('fetching data');
            try {
                var options = JSON.parse(localStorage.getItem('options')) || [];
                this.setState(function () {
                    return { options: options };
                });
            } catch (e) {
                this.setState(function () {
                    return { options: [] };
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.options.length !== this.state.options.length) {
                var json = JSON.stringify(this.state.options);
                localStorage.setItem('options', json);
                console.log('saving data');
            }
        }
    }, {
        key: 'removeOne',
        value: function removeOne(option) {
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (curr) {
                        return curr !== option;
                    })
                };
            });
        }
    }, {
        key: 'removeAll',
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: [],
                    chosen: ''
                };
            });
        }
    }, {
        key: 'chooseTask',
        value: function chooseTask() {
            var _this2 = this;

            var chosenNumber = Math.floor(Math.random() * this.state.options.length);
            this.setState(function () {
                alert(_this2.state.options[chosenNumber]);
                return {
                    chosen: _this2.state.options[chosenNumber]
                };
            });
        }
    }, {
        key: 'submitHandler',
        value: function submitHandler(option) {
            if (this.state.options.includes(option.toLowerCase())) {
                return '"' + option + '" already in the list!';
            } else if (option.length === 0) {
                return 'empty string not allowed';
            }
            var newOptions = this.state.options.concat(option.toLowerCase());

            this.setState(function () {
                return { options: newOptions };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(Header, {
                    title: this.state.title,
                    subTitle: this.state.subTitle
                }),
                this.state.chosen ? React.createElement(
                    'p',
                    null,
                    this.state.chosen
                ) : undefined,
                React.createElement(Action, {
                    chooseTask: this.chooseTask,
                    hasOptions: this.state.options.length > 0
                }),
                React.createElement(Options, {
                    removeAll: this.removeAll,
                    removeOne: this.removeOne,
                    options: this.state.options

                }),
                React.createElement(AddOption, {
                    submit: this.submitHandler
                })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

IndecisionApp.defaultProps = {
    options: []
};

var Header = function Header(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        ),
        props.subTitle && React.createElement(
            'h2',
            null,
            props.subTitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { disabled: !props.hasOptions, onClick: props.chooseTask },
            'What should I do?'
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        'div',
        null,
        props.options.length === 0 && React.createElement(
            'p',
            null,
            'Please enter options'
        ),
        React.createElement(
            'button',
            { onClick: props.removeAll },
            'Remove all'
        ),
        props.options.map(function (option, index) {
            return React.createElement(Option, {
                key: index,
                optionText: option,
                'delete': props.removeOne
            });
        })
    );
};

var Option = function Option(props) {
    return React.createElement(
        'div',
        null,
        props.optionText,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.delete(props.optionText);
                } },
            'Remove'
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this3 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this3.state = {
            error: undefined
        };
        _this3.handleSubmit = _this3.handleSubmit.bind(_this3);
        return _this3;
    }

    _createClass(AddOption, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var option = e.target.input.value.trim();
            e.target.input.value = '';
            var error = this.props.submit(option);

            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.error && React.createElement(
                    'p',
                    null,
                    this.state.error
                ),
                React.createElement(
                    'form',
                    { onSubmit: this.handleSubmit },
                    React.createElement('input', { type: 'text', placeholder: 'add option here', name: 'input', autoComplete: 'off' }),
                    React.createElement(
                        'button',
                        null,
                        'Add option'
                    )
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

;

var appRoot = document.querySelector('#app');
ReactDOM.render(React.createElement(IndecisionApp, null), appRoot);
