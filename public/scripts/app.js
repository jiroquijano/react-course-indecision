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
            options: []
        };
        _this.removeAll = _this.removeAll.bind(_this);
        _this.submitHandler = _this.submitHandler.bind(_this);
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "removeAll",
        value: function removeAll() {
            this.setState(function () {
                return {
                    options: []
                };
            });
        }
    }, {
        key: "submitHandler",
        value: function submitHandler(e) {
            var _this2 = this;

            e.preventDefault();
            var newValue = e.target.input.value.trim();
            e.target.input.value = '';
            if (newValue !== '') {

                this.setState(function () {
                    var newOptions = _this2.state.options;
                    newOptions.push(newValue);
                    return {
                        options: newOptions
                    };
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: this.state.title, subTitle: this.state.subTitle }),
                React.createElement(Action, null),
                React.createElement(Options, { click: this.removeAll, options: this.state.options }),
                React.createElement(AddOption, { submit: this.submitHandler })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

var Header = function (_React$Component2) {
    _inherits(Header, _React$Component2);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h1",
                    null,
                    this.props.title
                ),
                React.createElement(
                    "h2",
                    null,
                    this.props.subTitle
                )
            );
        }
    }]);

    return Header;
}(React.Component);

;

var Action = function (_React$Component3) {
    _inherits(Action, _React$Component3);

    function Action() {
        _classCallCheck(this, Action);

        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
    }

    _createClass(Action, [{
        key: "handlePick",
        value: function handlePick() {
            alert('Handle Pick');
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "button",
                    { onClick: this.handlePick },
                    "What should I do?"
                )
            );
        }
    }]);

    return Action;
}(React.Component);

;

var Options = function (_React$Component4) {
    _inherits(Options, _React$Component4);

    function Options() {
        _classCallCheck(this, Options);

        return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
    }

    _createClass(Options, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.props.options.map(function (option, index) {
                    return React.createElement(Option, { key: index, optionText: option });
                }),
                React.createElement(
                    "button",
                    { onClick: this.props.click },
                    "Remove all"
                )
            );
        }
    }]);

    return Options;
}(React.Component);

;

var Option = function (_React$Component5) {
    _inherits(Option, _React$Component5);

    function Option() {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
    }

    _createClass(Option, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.props.optionText
                )
            );
        }
    }]);

    return Option;
}(React.Component);

;

var AddOption = function (_React$Component6) {
    _inherits(AddOption, _React$Component6);

    function AddOption() {
        _classCallCheck(this, AddOption);

        return _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).apply(this, arguments));
    }

    _createClass(AddOption, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "form",
                    { onSubmit: this.props.submit },
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
