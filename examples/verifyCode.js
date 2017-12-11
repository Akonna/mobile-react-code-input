webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(162);


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(160);
	var VerifyCode = __webpack_require__(163);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  useCodeFun: function useCodeFun(valuestr) {
	    console.log(valuestr);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { margin: 0 } },
	      React.createElement(VerifyCode, { isShow: true, useCodeFun: this.useCodeFun, btnText: '立即使用' })
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	
	function noop() {}
	var VerifyCode = React.createClass({
	    displayName: 'VerifyCode',
	
	    propTypes: {
	        useCodeFun: React.PropTypes.func
	    },
	    getDefaultProps: function getDefaultProps() {
	        return {
	            isShow: false,
	            useCodeFun: noop,
	            btnText: '',
	            empty: false
	        };
	    },
	    getInitialState: function getInitialState() {
	        return {
	            code: "N",
	            active: 0,
	            twoFlag: false,
	            threeFlag: false,
	            oneValue: "",
	            twoValue: "",
	            threeValue: ""
	        };
	    },
	
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (!nextProps.empty) {
	            this.setState({
	                code: "N",
	                active: 0,
	                twoFlag: false,
	                threeFlag: false,
	                oneValue: "",
	                twoValue: "",
	                threeValue: ""
	            });
	        }
	    },
	
	    useCodeFun: function useCodeFun() {
	        this.props.useCodeFun(this.refs.input.value);
	    },
	
	    changeInput: function changeInput(event) {
	        var re = /^[0-9]+[0-9]*]*$/; //判断字符串是否为数字
	        if (!re.test(event.target.value)) {
	            event.target.value = "";
	        }
	
	        if (this.state.active == 0) {
	            if (!isNaN(event.target.value) && event.target.value.length == '1') {
	                this.setState({
	                    twoFlag: true,
	                    oneValue: event.target.value
	                });
	            }
	            if (!isNaN(event.target.value) && event.target.value.length == '2') {
	                this.setState({
	                    threeFlag: true,
	                    twoValue: event.target.value.charAt(event.target.value.length - 1)
	                });
	            }
	            if (!isNaN(event.target.value) && event.target.value.length == '3') {
	                this.refs.input.blur();
	                this.setState({
	                    code: 'Y',
	                    threeValue: event.target.value.charAt(event.target.value.length - 1),
	                    active: 1
	                });
	            }
	        } else {
	            console.log(!isNaN(event.target.value));
	            if (!isNaN(event.target.value) && event.target.value.length == '2') {
	                this.setState({
	                    code: 'N',
	                    threeValue: "",
	                    threeFlag: false
	                });
	            }
	            if (!isNaN(event.target.value) && event.target.value.length == '1') {
	                this.setState({
	                    twoValue: "",
	                    twoFlag: false
	                });
	            }
	            if (!isNaN(event.target.value) && event.target.value.length == '0') {
	                this.setState({
	                    oneValue: "",
	                    active: 0
	                });
	            }
	        }
	    },
	
	    clickInput: function clickInput(event) {
	        this.refs.input.focus();
	    },
	
	    render: function render() {
	        if (!this.props.isShow) {
	            if (this.refs.input !== undefined && this.refs.input.value !== undefined) {
	                this.props.useCodeFun(this.refs.input.value);
	            }
	        }
	
	        return React.createElement(
	            'div',
	            { className: 'pretty' },
	            React.createElement('input', { type: 'text', unselectable: 'on', pattern: '\\d*', className: 'inputTruebox', maxLength: '3', ref: 'input', onChange: this.changeInput }),
	            React.createElement(
	                'div',
	                { className: 'box' },
	                React.createElement(
	                    'div',
	                    { className: 'inputbox select', onClick: this.clickInput },
	                    this.state.oneValue
	                ),
	                React.createElement(
	                    'div',
	                    { className: this.state.twoFlag ? "inputbox select" : "inputbox", onClick: this.clickInput },
	                    this.state.twoValue
	                ),
	                React.createElement(
	                    'div',
	                    { className: this.state.threeFlag ? "inputbox select" : "inputbox", onClick: this.clickInput },
	                    this.state.threeValue
	                )
	            ),
	            this.props.isShow ? this.state.code == 'Y' ? React.createElement(
	                'div',
	                { className: 'ver-btn click_btn', onClick: this.useCodeFun },
	                this.props.btnText
	            ) : React.createElement(
	                'div',
	                { className: 'ver-btn' },
	                this.props.btnText
	            ) : ''
	        );
	    }
	});
	
	module.exports = VerifyCode;

/***/ })

});
//# sourceMappingURL=verifyCode.js.map