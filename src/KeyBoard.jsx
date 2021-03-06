
const React = require('react');
function noop() {
  
}

const KeyBoard = React.createClass({

  propTypes: {
    useCodeFun: React.PropTypes.func,
  },
  getDefaultProps() {
    return {
      isShow: false,
      useCodeFun:noop,
      btnText:'',
      empty:false,
    };
  },

  getInitialState() {
    return{
      active:0,
      twoFlag: false,
      threeFlag: false,
      code:'N',
    }
  },
  componentWillReceiveProps(nextProps) {
    if(!nextProps.empty){
      this.setState({
        active:0,
        twoFlag: false,
        threeFlag: false,
      })
    }
  },
  componentDidMount() {

    var This= this;
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
  listenKeyUp(e){
    e.preventDefault();
    var inputBtn = document.querySelectorAll('input');
    var re =  /^[0-9]+[0-9]*]*$/; //判断字符串是否为数字

    if (!re.test(event.target.value)) {
      event.target.value="";
    }
    if (!isNaN(event.target.value) && event.target.value.length != 0) {
      if(this.state.active == "0" && !isNaN(event.target.value) && event.target.value.length != 0){
        this.setState({
          twoFlag:true,
        })
      }else if(this.state.active == "1" && !isNaN(event.target.value) && event.target.value.length != 0){
        this.setState({
          threeFlag:true,
        })
      }
      if (this.state.active < 2) {
        this.setState({
          active:this.state.active +1,
        });
      }
      inputBtn[this.state.active].focus();

    } else if (event.target.value.length == 0) {
      if(this.state.active == '2'){
        this.setState({
          threeFlag:false,
        })
      }
      if(this.state.active == '1'){
        this.setState({
          twoFlag:false,
        })
      }
      if (this.state.active > 0) {
        this.setState({
          active:this.state.active -1,
        });
      }
      inputBtn[this.state.active].focus();

    }

    if(this.refs.one.value && this.refs.two.value && this.refs.three.value){
      this.setState({
        code: 'Y',
      });
    }else{
      this.setState({
        code: 'N',
      });
    }

  },

  common(){
    var inputBtn = document.querySelectorAll('input');
    inputBtn[this.state.active].focus();
  },

  useCodeFun(){
    let input_val = this.refs.one.value + this.refs.two.value + this.refs.three.value;
    this.props.useCodeFun(input_val);
  },
  render(){

    if(!this.props.isShow){
      if(this.refs.one!=undefined && this.refs.two!=undefined && this.refs.three!=undefined){
        let input_val =this.refs.one.value + this.refs.two.value + this.refs.three.value;
        this.props.useCodeFun(input_val);
      }
    }

    return(
        <div className="box">
          <input   type="text" pattern="\d*"  maxLength="1"  onClick={this.common} className={"inputBtn select"} ref="one"/>
          <input  type="text" pattern="\d*"  maxLength="1" onClick={this.common} className={this.state.twoFlag ? "inputBtn select" : "inputBtn"} ref="two"/>
          <input   type="text" pattern="\d*"  maxLength="1" onClick={this.common} className={this.state.threeFlag ? "inputBtn select" : "inputBtn"} ref="three"/>

          {
            this.props.isShow ? (this.state.code == 'Y' ?
                <div className="ver-btn click_btn" onClick={this.useCodeFun}>{this.props.btnText}</div> :
                <div className="ver-btn">{this.props.btnText}</div>) : ''
          }

        </div>
    )
  }


});

module.exports = KeyBoard;