webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(161);


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(160);
	var KeyBoard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"react-input-code-pretty/src/KeyBoard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  useCodeFun: function useCodeFun(valuestr) {
	    console.log(valuestr);
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { margin: 0 } },
	      React.createElement(KeyBoard, { isShow: true, useCodeFun: this.useCodeFun, btnText: '立即使用' })
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ })

});
//# sourceMappingURL=keyBoard.js.map