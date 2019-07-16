import React from 'react'
import {ReactDom} from 'react-dom'
import { Link} from 'react-router-dom'
import './reg.scss'
import {Asyn_send,Asyn_Img} from '../../store/asyn'
import Back from "../common/Back/Back";
class Reg extends React.Component{
    render(){
        return(
            <div className="login">
                <Back/>
                  <div className="logo">
                  <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
                  </div>
                  <div className="login-from">
                        <form action="http://localhost:4000/login_pwd">
                        <div className='users'>
                            <input type="text" name="name" ref="name" placeholder="手机号"/>
                        </div>
                        {/* <img src="http://47.98.137.70:4002/captcha" alt=""/> */}
                        <div className="password" >
                            <input type="text" name="pwd" ref="pwd" placeholder="密码"/>
                        </div>
                        <div className="captcha" >
                            <input type="text" name="captcha" ref="captcha" placeholder="验证码"/>
                            <img src="http://localhost:4000/captcha" alt="" onClick={this.getabc}/>
                        </div>
                        <div className='submit'>
                           <input type="button" value='注册' onClick={this.aa.bind(this)}/>
                        </div>
                    </form>
                    <Link to='/login'>已有账号去登录</Link>
                  </div>  
            </div>
        )
    }
    aa(){
       // let abc={users:this.refs.name.value,password:this.refs.pwd.value}
        console.log('123aa')
        var msg={name:this.refs.name.value,pwd:this.refs.pwd.value,captcha:this.refs.captcha.value}
        Asyn_send(msg)
    }
    getabc(){
        Asyn_Img() 
        console.log('123abc')
    }
}
export default Reg;