import React from 'react'
import {ReactDom} from 'react-dom'
import {Route,Switch,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './components/home/Home'
import Footer from './components/common/Footer/Footer';
import User from './components/User/User'
import Say from './components/Say/Say'
import ShopCar from './components/ShopCar/ShopCar'
import Error from './components/common/Error'
import Reg from './components/Reg/Reg'
import Login from './components/Login/Login'
import Loding from "./components/common/Loding/Loding";
import Back from "./components/common/Back/Back";

import * as types from './store/types'
class App extends React.Component{

  render(){
      let {bFoo,bLod,bBack}=this.props
    return (
      <div className="app">
          {bLod&&<Loding/>}
          {bBack&&<Back/>}

        <Switch>
          <Route path='/home' component={Home}/>
          <Redirect  exact  path='/' to="home"/>
          <Route path='/say'  component={Say}/>
          <Route path='/shopCar' component={ShopCar}/>
          <Route path='/reg' component={Reg}/>
          <Route path='/login' component={Login}/>
          <Route path='/user'  component={User}/>
          <Route component={Error}/>
        </Switch>
        {bFoo&&<Footer/>}
      </div>
    )
  }
  componentWillReceiveProps(nextProps){
        let path = nextProps.location.pathname;
        if (/home/.test(path)){
            this.props.viewBack(false);
            this.props.viewFoot(true);
        }
        if (/say|reg|login/.test(path)){
            this.props.viewFoot(false);
            this.props.viewBack(true);
        }
        if (/user|shopCar/.test(path)){
            this.props.viewFoot(true);
            this.props.viewBack(true);
        }
    }
}



let a=(state)=>{
    return {
        bFoo: state.bFoo,
        bLod:state.lodbar,
        bBack: state.bBack
    }
}
let b=(dispatch)=>({
    viewFoot:(bl)=>dispatch({type:types.VIEW_FOOT,payload:bl}),
    viewBack:(bl)=>dispatch({type:types.VIEW_BACK,payload:bl}),
})
let Capp=connect(a,b)(App)
export default Capp