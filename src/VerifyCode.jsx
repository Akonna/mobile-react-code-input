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
    if (event.target.value && !this.refs.two.value) {
      this.refs.two.focus();
      this.setState({
        flag_two: true,
      })
    }
    if(!event.target.value){
      this.setState({
        code: 'N',
        flag_two: false,
      });
    }
     if(!event.target.value && !this.refs.two.value){
       this.setState({
         flag_two: false,
       });
     }else{
       this.setState({
         flag_two: true,
       });
     }
    if(event.target.value && this.refs.two.value && this.refs.three.value){
      this.setState({
        code: 'Y',
      });
    }
  },

  two(event){
    if (event.target.value && !this.refs.three.value) {
      this.refs.three.focus();
      this.setState({
        flag_three: true,
      })
    }
    if(!event.target.value){
      this.setState({
        code: 'N',
        flag_three: false,
      });
    }
    if(this.refs.three.value){
      this.setState({
        flag_three: true,
      });
    }
    if(event.target.value && this.refs.two.value && this.refs.three.value){
      this.setState({
        code: 'Y',
      });
    }
  },

  three(event){
    if (event.target.value) {
      this.refs.three.blur();
      this.setState({
        code: 'Y',
      });
    }
    if(!event.target.value){
      this.setState({
        code: 'N',
      });
    }

    if(!this.refs.two.value){
      this.setState({
        flag_three: false,
      });
    }
    if(!this.refs.one.value){
      this.setState({
        flag_two: false,
      });
    }
    if(event.target.value && this.refs.two.value && this.refs.three.value){
      this.setState({
        code: 'Y',
      });
    }
  },

  commonfun(){
    if (!this.refs.one.value) {
      this.refs.one.focus();
    }else{
      if(!this.refs.two.value){
        this.refs.two.focus();
      }
    }
  },

  useCodeFun(){
    let input_val = this.refs.one.value + this.refs.two.value + this.refs.three.value;
    this.props.useCodeFun(input_val);
  },
  render() {
    if(!this.props.isShow){
      if(this.refs.one!=undefined && this.refs.two!=undefined && this.refs.three!=undefined){
          let input_val =this.refs.one.value + this.refs.two.value + this.refs.three.value;
          this.props.useCodeFun(input_val);
      }
    }
    return (
      <div className="pretty">
        <div className="box">
          <input type="number" pattern="\d*"  className="inputbox select" maxLength="1" ref="one" onChange={this.one} onFocus={this.commonfun}/>
          <input type="number" pattern="\d*"  className={this.state.flag_two ? "inputbox select" : "inputbox"} maxLength="1" ref="two"
                 onChange={this.two} onFocus={this.commonfun}/>
          <input type="number" pattern="\d*"  className={this.state.flag_three ? "inputbox select" : "inputbox"} maxLength="1" ref="three"
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