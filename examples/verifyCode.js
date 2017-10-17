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
	      btnText: ''
	    };
	  },
	  getInitialState: function getInitialState() {
	    return {
	      flag_two: false,
	      flag_three: false,
	      code: "N"
	    };
	  },
	
	  one: function one(event) {
	    var re = /^[1-9]+[0-9]*]*$/; //判断字符串是否为数字
	
	    if (!re.test(event.target.value)) {
	      event.target.value = "";
	    }
	
	    if (event.target.value && !this.refs.two.value) {
	      this.refs.two.focus();
	      this.setState({
	        flag_two: true
	      });
	    }
	    if (!event.target.value) {
	      this.setState({
	        code: 'N',
	        flag_two: false
	      });
	    }
	    if (!event.target.value && !this.refs.two.value) {
	      this.setState({
	        flag_two: false
	      });
	    } else {
	      this.setState({
	        flag_two: true
	      });
	    }
	    if (event.target.value && this.refs.two.value && this.refs.three.value) {
	      this.setState({
	        code: 'Y'
	      });
	    }
	  },
	
	  two: function two(event) {
	    var re = /^[1-9]+[0-9]*]*$/; //判断字符串是否为数字
	
	    if (!re.test(event.target.value)) {
	      event.target.value = "";
	    }
	    if (!this.refs.one.value) {
	      this.refs.one.focus();
	    }
	    if (event.target.value && !this.refs.three.value) {
	      this.refs.three.focus();
	      this.setState({
	        flag_three: true
	      });
	    }
	    if (!event.target.value) {
	      this.setState({
	        code: 'N',
	        flag_three: false
	      });
	    }
	    if (this.refs.three.value) {
	      this.setState({
	        flag_three: true
	      });
	    }
	    if (event.target.value && this.refs.two.value && this.refs.three.value) {
	      this.setState({
	        code: 'Y'
	      });
	    }
	  },
	
	  three: function three(event) {
	    var re = /^[1-9]+[0-9]*]*$/; //判断字符串是否为数字
	
	    if (!re.test(event.target.value)) {
	      event.target.value = "";
	    }
	    if (!this.refs.one.value) {
	      this.refs.one.focus();
	    }
	    if (this.refs.one.value && !this.refs.two.value) {
	      this.refs.two.focus();
	    }
	    if (event.target.value) {
	      this.refs.three.blur();
	      this.setState({
	        code: 'Y'
	      });
	    }
	    if (!event.target.value) {
	      this.setState({
	        code: 'N'
	      });
	    }
	
	    if (!this.refs.two.value) {
	      this.setState({
	        flag_three: false
	      });
	    }
	    if (!this.refs.one.value) {
	      this.setState({
	        flag_two: false
	      });
	    }
	    if (event.target.value && this.refs.two.value && this.refs.three.value) {
	      this.setState({
	        code: 'Y'
	      });
	    }
	  },
	
	  common: function common() {
	    if (!this.refs.one.value) {
	      this.refs.one.focus();
	    }
	    if (this.refs.one.value && !this.refs.two.value) {
	      this.refs.two.focus();
	    }
	  },
	
	  useCodeFun: function useCodeFun() {
	    var input_val = this.refs.one.value + this.refs.two.value + this.refs.three.value;
	    this.props.useCodeFun(input_val);
	  },
	  render: function render() {
	    if (!this.props.isShow) {
	      if (this.refs.one != undefined && this.refs.two != undefined && this.refs.three != undefined) {
	        var input_val = this.refs.one.value + this.refs.two.value + this.refs.three.value;
	        this.props.useCodeFun(input_val);
	      }
	    }
	    return React.createElement(
	      'div',
	      { className: 'pretty' },
	      React.createElement(
	        'div',
	        { className: 'box' },
	        React.createElement('input', { type: 'text', pattern: '\\d*', className: 'inputbox select', maxLength: "1", ref: 'one', onChange: this.one }),
	        React.createElement('input', { type: 'text', pattern: '\\d*', className: this.state.flag_two ? "inputbox select" : "inputbox", maxLength: "1", ref: 'two',
	          onChange: this.two, onFocus: this.common }),
	        React.createElement('input', { type: 'text', pattern: '\\d*', className: this.state.flag_three ? "inputbox select" : "inputbox", maxLength: "1", ref: 'three',
	          onChange: this.three, onFocus: this.common })
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