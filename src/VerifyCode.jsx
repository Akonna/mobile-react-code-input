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
            empty:false,
        };
    },
    getInitialState() {
        return {
            code: "N",
            active:0,
            twoFlag: false,
            threeFlag: false,
            oneValue:"",
            twoValue:"",
            threeValue:"",
        };
    },

    componentWillReceiveProps(nextProps) {
        if(!nextProps.empty){
            this.setState({
                code: "N",
                active:0,
                twoFlag: false,
                threeFlag: false,
                oneValue:"",
                twoValue:"",
                threeValue:"",
            })
        }
    },

    useCodeFun(){
        this.props.useCodeFun(this.refs.input.value);
    },

    changeInput(event){
        var re =  /^[0-9]+[0-9]*]*$/; //判断字符串是否为数字
        if (!re.test(event.target.value)) {
            event.target.value="";
        }

        if(this.state.active == 0){
            if(!isNaN(event.target.value) && event.target.value.length == '1'){
                this.setState({
                    twoFlag:true,
                    oneValue:event.target.value,
                })
            }
            if(!isNaN(event.target.value) && event.target.value.length == '2'){
                this.setState({
                    threeFlag:true,
                    twoValue:event.target.value.charAt(event.target.value.length-1),
                })
            }
            if(!isNaN(event.target.value) && event.target.value.length == '3'){
                this.refs.input.blur();
                this.setState({
                    code:'Y',
                    threeValue:event.target.value.charAt(event.target.value.length-1),
                    active:1,
                })
            }
        }else{
            console.log(!isNaN(event.target.value));
            if(!isNaN(event.target.value) && event.target.value.length == '2'){
                this.setState({
                    code:'N',
                    threeValue:"",
                    threeFlag:false,
                })
            }
            if(!isNaN(event.target.value) && event.target.value.length == '1'){
                this.setState({
                    twoValue:"",
                    twoFlag:false,
                })
            }
            if(!isNaN(event.target.value) && event.target.value.length == '0'){
                this.setState({
                    oneValue:"",
                    active:0,
                })
            }
        }


    },

    clickInput(event){
        this.refs.input.focus();
    },

    render() {
        if(!this.props.isShow){
            if(this.refs.input !==undefined  && this.refs.input.value !==undefined){
                this.props.useCodeFun(this.refs.input.value);
            }
        }

        return (
            <div className="pretty">
                <input  type="text" unselectable="on"  pattern="\d*" className="inputTruebox"  maxLength="3" ref="input"  onChange={this.changeInput}/>
                <div className="box">
                    <div className="inputbox select" onClick={this.clickInput}>
                        {this.state.oneValue}
                    </div>
                    <div className={this.state.twoFlag ? "inputbox select": "inputbox"} onClick={this.clickInput}>
                        {this.state.twoValue}
                    </div>
                    <div className={this.state.threeFlag ? "inputbox select": "inputbox"} onClick={this.clickInput}>
                        {this.state.threeValue}
                    </div>
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
