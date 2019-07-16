import *as types from './types'
import axios from 'axios'
export let Asyn_List=(url,dispatch,type)=>{
    //显示loading
    dispatch({type: types.VIEW_LOADING, payload:true});
    //请求数据
    fetch(url).then(res=>res.json())
        .then(data=>{
            setTimeout(()=>{
                dispatch({type: types.VIEW_LOADING, payload:false});
            },1000)
            dispatch({type:type,payload:data.data.films});
        })
}
export let Asyn_send=(msg)=>{
    axios({
        method: 'post',
        url: 'http://localhost:4000/login_pwd',
        data: msg
      }).then((res)=>{
        console.log(res)
    })
   
}
export let Asyn_Img=()=>{
    fetch(`http://localhost:4000/captcha`).then(res=>res.json()).then(data=>console.log(data))
}