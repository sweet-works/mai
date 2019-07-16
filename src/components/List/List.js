import React from 'react'
import {ReactDom} from 'react-dom'
import * as types from '../../store/types'
import {connect} from 'react-redux'
import './list.scss'
import {Asyn_List} from '../../store/asyn'
import NavLink from "react-router-dom/es/NavLink";
class List extends React.Component{
  constructor(props){
    super()
    //this.aa()
      props.getListData()
    this.state={
        fiml:[]
    }
  }
  render(){
      let {list}=this.props;
      console.log(list)
    return (
      <div className="list">
         <div className="list-nav">
         <span>
             <NavLink to="/home" onClick={this.props.getListData}>正在热映</NavLink >
         </span>
         <span>
             <NavLink to="/home"onClick={this.props.getListData2}>即将上映</NavLink>
         </span>
         </div>
         <div className="list-film">

                <ul>
                  {list.map((item)=>{
                 return (<li key={item.filmId}>
                    <a href="">
                    <div className='list-img bg'>
                      <img src={item.poster} alt=""/>
                    </div>
                    <div className="list-title">
                    <div className='title'>{item.name} <span>{item.filmType.name}</span></div>
                    <p >观众评分 <i className="fen">{item.grade}</i></p>
                   {/*<p>主演:{item.actors.map((tat,index)=>{*/}
                       {/*return <i key={index}>{tat.name}</i>*/}
                      {/*})*/}
                      {/*}*/}
                      {/*</p>*/}
                   <p>{item.nation}| {item.runtime}分钟</p>
                    </div>
                    <div className="list-shop">
                     <span>购票</span>
                    </div>
                     </a>
                </li>)
                })}
                </ul>
         </div>
      </div>
    )
  }


  //--------------------
aa(){
 /*axios('/json/list.json').then((res)=>{
   this.setState({
    fimls:res.data.data.films
   })
 })*/

 /*fetch('/json/list.json')
     .then(res=>res.json())
     .then(datas=>{
         console.log(datas)
         this.setState({
             fiml:datas.data.films
         })

     })*/
}
     
}
let a=(state)=>({
    list:state.list

})
let b=(dispatch)=>({
    getListData:()=>{
        let url='/json/list.json'
        Asyn_List(url,dispatch,types.VIEW_LIST)
    } ,
    getListData2:()=>{
        let url='/json/list2.json'
        Asyn_List(url,dispatch,types.VIEW_LIST)
    }
})
let List_connect=connect(a,b)(List)
export default List_connect