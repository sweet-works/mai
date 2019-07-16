import React from 'react'
import {ReactDom} from 'react-dom'
import {NavLink,Route,Redirect,Switch} from 'react-router-dom'
import './footer.scss'
class Footer extends React.Component{
  render(){
    return (
      <div className="footer"> 
        <NavLink to='/home' activeClassName="activ"><i className="fa fa-film fa-spin"></i>电影</NavLink>
        <NavLink to='/say' activeClassName="activ"><i className="fa fa-photo fa-spin"></i>影院</NavLink>
        <NavLink to='/shopCar' activeClassName="activ"><i className="fa fa-shopping-cart"></i>买单</NavLink>
        <NavLink to='/user' activeClassName="activ"><i className="fa fa-user-o"></i>我的</NavLink>
      </div>
    )
  }
}
export default Footer