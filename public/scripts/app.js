'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Visibility = function (_React$Component) {
    _inherits(Visibility, _React$Component);

    function Visibility(props) {
        _classCallCheck(this, Visibility);

        var _this = _possibleConstructorReturn(this, (Visibility.__proto__ || Object.getPrototypeOf(Visibility)).call(this, props));

        _this.state = {
            show: false,
            paragraph: 'Hide meh! Hide meh!'
        };
        _this.toggleButtonHandler = _this.toggleButtonHandler.bind(_this);
        return _this;
    }

    _createClass(Visibility, [{
        key: 'toggleButtonHandler',
        value: function toggleButtonHandler() {
            this.setState(function (previousState) {
                return {
                    show: !previousState.show
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Visibility Toggle'
                ),
                React.createElement(
                    'button',
                    { onClick: this.toggleButtonHandler },
                    'Show details'
                ),
                this.state.show && React.createElement(
                    'p',
                    null,
                    this.state.paragraph
                )
            );
        }
    }]);

    return Visibility;
}(React.Component);

;

var appRoot = document.querySelector('#app');
ReactDOM.render(React.createElement(Visibility, null), appRoot);

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
