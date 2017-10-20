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
	      React.createElement(VerifyCode, { isShow: true, useCodeFun: this.useCodeFun, btnText: '立即使用', empty: false })
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
	      active: 0,
	      twoFlag: false,
	      threeFlag: false,
	      code: 'N'
	    };
	  },
	  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	    if (!nextProps.empty) {
	      this.setState({
	        active: '0'
	      });
	    }
	  },
	  componentDidMount: function componentDidMount() {
	
	    var This = this;
	    var inputBtn = document.querySelectorAll('input');
	
	    for (var i = 0; i < inputBtn.length; i++) {
	
	      inputBtn[i].addEventListener('focus', function (e) {
	        e.preventDefault();
	        this.addEventListener('keyup', This.listenKeyUp, false);
	      }, false);
	      inputBtn[i].addEventListener('blur', function (e) {
	        e.preventDefault();
	        this.removeEventListener('keyup', This.listenKeyUp, false);
	      }, false);
	    }
	  },
	  listenKeyUp: function listenKeyUp() {
	    var inputBtn = document.querySelectorAll('input');
	    var re = /^[1-9]+[0-9]*]*$/; //判断字符串是否为数字
	
	    if (!re.test(event.target.value)) {
	      event.target.value = "";
	    }
	    if (!isNaN(event.target.value) && event.target.value.length != 0) {
	      if (this.state.active == "0" && !isNaN(event.target.value) && event.target.value.length != 0) {
	        this.setState({
	          twoFlag: true
	        });
	      } else if (this.state.active == "1" && !isNaN(event.target.value) && event.target.value.length != 0) {
	        this.setState({
	          threeFlag: true
	        });
	      }
	      if (this.state.active < 2) {
	        this.setState({
	          active: this.state.active + 1
	        });
	      }
	      inputBtn[this.state.active].focus();
	    } else if (event.target.value.length == 0) {
	      if (this.state.active == '2') {
	        this.setState({
	          threeFlag: false
	        });
	      }
	      if (this.state.active == '1') {
	        this.setState({
	          twoFlag: false
	        });
	      }
	      if (this.state.active > 0) {
	        this.setState({
	          active: this.state.active - 1
	        });
	      }
	      inputBtn[this.state.active].focus();
	    }
	
	    if (this.refs.one.value && this.refs.two.value && this.refs.three.value) {
	      this.setState({
	        code: 'Y'
	      });
	    } else {
	      this.setState({
	        code: 'N'
	      });
	    }
	  },
	
	  common: function common() {
	    var inputBtn = document.querySelectorAll('input');
	    inputBtn[this.state.active].focus();
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
	      { className: 'box' },
	      React.createElement('input', { type: 'text', pattern: '\\d*', maxLength: '1', onClick: this.common, className: "inputBtn select", ref: 'one' }),
	      React.createElement('input', { type: 'text', pattern: '\\d*', maxLength: '1', onClick: this.common, className: this.state.twoFlag ? "inputBtn select" : "inputBtn", ref: 'two' }),
	      React.createElement('input', { type: 'text', pattern: '\\d*', maxLength: '1', onClick: this.common, className: this.state.threeFlag ? "inputBtn select" : "inputBtn", ref: 'three' }),
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