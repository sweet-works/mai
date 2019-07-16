import React from 'react'
import {ReactDom} from 'react-dom'
import './Nav.scss'
class Nav extends React.Component{
  render(){
    return (<div className='nav'>
                <div className="nav-left"><a href="##">上海</a><i className="fa fa-chevron-down"></i></div>
                <div className="nav-right">电影</div>
            </div>  
    )
  }
}
export default Nav