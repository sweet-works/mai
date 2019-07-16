import React from 'react'
import {ReactDom} from 'react-dom'
import {Link} from 'react-router-dom'
import './user.scss'
import {connect} from 'react-redux'
import {CHECK_USER} from '../../store/types'
class User extends React.Component{
  render(){
      let {list}=this.props
    return (
      <div className="user">
        <div className="user-header">
            <div className="user-img"><img src="/img/user.png" alt=""/> </div>
            <div className="user-go'">
                {list.auth?<span>{list.usedata.users}</span>:
                    <Link to='/login' style={{color:'#fff'}}>立即登陆</Link>}

            </div>
        </div>
        <div className="user-bar">
          <span><img src="/img/user-1.png" alt=""/>电影订单</span>
          <span><img src="/img/user-2.png" alt=""/>拼团订单</span>
        </div>
        <div className="user-list">
            <ul>
              <li><img src="/img/user-3.png" alt=""/><span>卖座卡</span> <i className="fa fa-angle-right"></i></li>
              <li><img src="/img/user-4.png" alt=""/><span>余额
                  {list.auth?<em>{list.usedata.moeny}￥</em>:
                      <em>0￥</em>}

              </span><i className="fa fa-angle-right"></i></li>
              <li><img src="/img/user-5.png" alt=""/><span>设置</span> <i className="fa fa-angle-right"></i></li>

            </ul>
            <input type="button" value='注销' onClick={this.props.asd}/>
        </div>

      </div>
    )
  }
}
let a=(state)=>({
    list:state.user
})
let b=(dispatch)=>({
    asd:()=>{
        dispatch({type:CHECK_USER,payload:false})
        console.log(12)
    }
})
let users=connect(a,b)(User)
export default users