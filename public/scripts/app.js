'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.state = {
            count: 0
        };
        _this.increment = _this.increment.bind(_this);
        _this.decrement = _this.decrement.bind(_this);
        _this.reset = _this.reset.bind(_this);
        return _this;
    }

    _createClass(Counter, [{
        key: 'increment',
        value: function increment() {
            this.setState(function (prevState) {
                return {
                    count: ++prevState.count
                };
            });
        }
    }, {
        key: 'decrement',
        value: function decrement() {
            this.setState(function (prevState) {
                return {
                    count: --prevState.count
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState({ count: 0 });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'p',
                    null,
                    this.state.name
                ),
                React.createElement(
                    'h1',
                    null,
                    'Count: ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.increment },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.decrement },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'Reset'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

;

var appRoot = document.querySelector('#app');
ReactDOM.render(React.createElement(Counter, null), appRoot);

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
