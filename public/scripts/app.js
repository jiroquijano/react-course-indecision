"use strict";

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
            title: "Indecision",
            subTitle: "RNGesus, take the wheel",
            options: [],
            chosen: ''
        };
        _this.removeAll = _this.removeAll.bind(_this);
        _this.submitHandler = _this.submitHandler.bind(_this);
        _this.chooseTask = _this.chooseTask.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "chooseTask",
        value: function chooseTask() {
            var _this2 = this;

            var chosenNumber = Math.floor(Math.random() * this.state.options.length);
            this.setState(function () {
                return {
                    chosen: _this2.state.options[chosenNumber]
                };
            });
        }
    }, {
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: [],
                    chosen: ''
                };
            });
        }
    }, {
        key: "submitHandler",
        value: function submitHandler(option) {
            var _this3 = this;

            if (this.state.options.includes(option.toLowerCase())) {
                return "\"" + option + "\" already in the list!";
            } else if (option.length === 0) {
                return 'empty string not allowed';
            }

            this.setState(function () {
                var newOptions = _this3.state.options.concat(option.toLowerCase());
                return {
                    options: newOptions
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
                this.state.chosen ? React.createElement(
                    "p",
                    null,
                    this.state.chosen
                ) : undefined,
                React.createElement(Action, { chooseTask: this.chooseTask, hasOptions: this.state.options.length > 0 }),
                React.createElement(Options, { click: this.removeAll, options: this.state.options }),
                React.createElement(AddOption, { submit: this.submitHandler })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subTitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { disabled: !props.hasOptions, onClick: props.chooseTask },
            "What should I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        props.options.map(function (option, index) {
            return React.createElement(Option, { key: index, optionText: option });
        }),
        React.createElement(
            "button",
            { onClick: props.click },
            "Remove all"
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            props.optionText
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this4 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this4.state = {
            error: undefined
        };
        _this4.handleSubmit = _this4.handleSubmit.bind(_this4);
        return _this4;
    }

    _createClass(AddOption, [{
        key: "handleSubmit",
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
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    null,
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleSubmit },
                    React.createElement("input", { type: "text", placeholder: "add option here", name: "input", autoComplete: "off" }),
                    React.createElement(
                        "button",
                        null,
                        "Add option"
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
