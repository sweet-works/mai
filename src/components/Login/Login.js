import React from 'react'
import {ReactDom} from 'react-dom'
import { Link} from 'react-router-dom'
import './login.scss'
import Back from "../common/Back/Back";
import {connect} from "react-redux";
import {CHECK_LOGIN} from "../../store/types";
class Login extends React.Component{
    render(){
        return(
            <div className="login">
                <Back/>
                  <div className="logo">
                  <img src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
                  </div>
                  <div className="login-from">
                        <form action="">
                        <div className='users'>
                            <input type="text" name="users" placeholder="账号"/>
                        </div>
                        <div className="password" >
                            <input type="text" name="password" placeholder="密码"/>
                        </div>  
                        <div className='submit'>
                            <Link to='/user'>
                           <input type="submit" value='登录' onClick={this.props.login}/></Link>
                        </div>
                    </form>
                    <Link to='/reg'>还没有注册快去注册吧</Link>
                  </div>  
            </div>
        )
    }
}
let a=(state)=>({
    list:state.user
})
let b=(dispatch)=>({
    login:()=>{
        dispatch({type:CHECK_LOGIN,payload:true})
        console.log(12)
    }
})
let connect_login=connect(a,b)(Login)
export default connect_login;