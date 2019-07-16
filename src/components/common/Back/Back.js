import React from 'react'
import  {ReactDom} from 'react-dom'
import './back.scss'
class Back extends React.Component{
    render(){
        return(
            <div className='back' onClick={()=>{
                window.history.go(-1)}}>
                <span><i className='fa fa-angle-left fa-2x'></i></span>
            </div>
        )
    }
}
export default Back;