require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const VerifyCode = require('react-input-code-pretty');

const Test = React.createClass({
 useCodeFun(valuestr){
    console.log(valuestr);
 },
  render() {
    return (<div style={{margin: 0}}>
      <VerifyCode isShow={true} useCodeFun={this.useCodeFun} btnText="立即使用"/>
    </div>);
  },
});

ReactDOM.render(<Test />, document.getElementById('__react-content'));
