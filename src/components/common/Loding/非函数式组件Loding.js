import React from 'react'
import {connect} from 'react-redux'
import './loding.scss'
class  Loding extends React.Component{
    render(){
        let {lodbar}=this.props
        return lodbar?(
            <div className='lod'>
                <span>
                    <i className="fa fa-spinner fa-pulse fa-5x"></i>
                </span>
            </div>):''
    }

}
let a=(state)=>{
            //console.log(state.lodbar)
    return{lodbar:state.lodbar}
}

let c_lod=connect(a)(Loding)
export default c_lod