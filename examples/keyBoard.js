webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(2);
	var React = __webpack_require__(3);
	var ReactDOM = __webpack_require__(160);
	var KeyBoard = __webpack_require__(161);
	
	var Test = React.createClass({
	  displayName: 'Test',
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { style: { margin: 0 } },
	      React.createElement(KeyBoard, null)
	    );
	  }
	});
	
	ReactDOM.render(React.createElement(Test, null), document.getElementById('__react-content'));

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var KeyBoard = React.createClass({
	    displayName: 'KeyBoard',
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            'testset'
	        );
	    }
	});
	module.exports = KeyBoard;

/***/ })

});
//# sourceMappingURL=keyBoard.js.map