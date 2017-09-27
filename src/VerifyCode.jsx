const React = require('react');

function noop() {
  
}
const VerifyCode = React.createClass({
  propTypes: {
    useCodeFun: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      isShow: false,
      useCodeFun:noop,
      btnText:'',
    };
  },
  getInitialState() {
    return {
     flag_two: false,
      flag_three: false,
      code: "N",
    };
  },
 
   one(event) {
    if (event.target.value) {
      this.refs.two.focus();
      this.setState({
        flag_two: true,
      })
    }
  },

  two(event){
    if (event.target.value) {
      this.refs.three.focus();
      this.setState({
        flag_three: true,
      })
    }
  },

  three(event){
    if (event.target.value) {
      this.refs.three.blur();
      this.setState({
        code: 'Y',
      });
    }

  },

  commonfun(){
    if (!this.refs.one.value) {
      this.refs.one.focus();
    }
  },

  useCodeFun(){
    let input_val = this.refs.one.value + this.refs.two.value + this.refs.three.value;
    this.props.useCodeFun(input_val);
  },
  render() {
   
    return (
      <div>
        <div className="box">
          <input type="tel" className="inputbox select" maxLength="1" ref="one" onChange={this.one}/>
          <input type="tel" className={this.state.flag_two ? "inputbox select" : "inputbox"} maxLength="1" ref="two"
                 onChange={this.two} onFocus={this.commonfun}/>
          <input type="tel" className={this.state.flag_three ? "inputbox select" : "inputbox"} maxLength="1" ref="three"
                 onChange={this.three} onFocus={this.commonfun}/>
        </div>

        {
          this.props.isShow ? (this.state.code == 'Y' ?
            <div className="ver-btn click_btn" onClick={this.useCodeFun}>{this.props.btnText}</div> :
            <div className="ver-btn">{this.props.btnText}</div>) : ''
        }
      </div>
    )
  },
});


module.exports = VerifyCode;
