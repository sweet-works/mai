import React from 'react'
import {ReactDom} from 'react-dom'
import ReactSwipe from 'react-swipe'
import list from '../../../assets/banner'
import './banner.scss'

class Banner extends React.Component{
  constructor(){
    super()
    this.aa()
  }
  state={
    list:[]
  }
  render(){
    if(this.state.list.length!=0)
    {
       return (
      <div className='bg'>
        <ReactSwipe
          className="banner"
          swipeOptions={{
             continuous: true,
             auto: 3000,
          }}
        >
        {
          this.state.list.map((item)=>{
           return (<div key={item.id}><img key={item.id} src={item.img}/></div>)
          })
        }  
        </ReactSwipe>
      </div>
    ) 
    }
    else{
      return null
    } 
  }
  aa(){
    fetch('/json/banner.json')
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        list:data
      })
      // console.log(data)
    })
 }

}

export default Banner