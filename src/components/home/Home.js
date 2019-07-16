import React from 'react'
import {ReactDom} from 'react-dom'
import Banner from '../common/Banner/Banner';
import List from '../List/List';
import {connect} from 'react-redux'
import Nav from "../common/Nav/Nav";
class Home extends React.Component{
  render(){
    return (
      <div className="home">
          <Nav/>
          <Banner/>  
          <List/>   
      </div>
    )
  }
}
let a=(state)=>{
    return{}
}
// let b=(dispatch)=>{return dispatch({type:'A',payload:true})}

let homes=connect(a)(Home)
export default homes