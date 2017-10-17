require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const KeyBoard = require('react-input-code-pretty/src/KeyBoard');

const Test = React.createClass({

  render() {
    return (<div style={{margin: 0}}>
      <KeyBoard />
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
