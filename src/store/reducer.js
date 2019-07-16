import  * as types from './types'
let reducer=(state,action)=>{
    let {type,payload}=action;
    switch(type){
        case types.VIEW_LOADING:
            return Object.assign({},state,{lodbar:payload})
        case types.VIEW_NAV:
            console.log(payload)
            return Object.assign({},state,{bNav:payload})
        case types.VIEW_FOOT:
            return Object.assign({},state,{bFoo:payload})
        case types.VIEW_LIST:
            return Object.assign({},state,{list:payload})
        case types.VIEW_BACK:
            return Object.assign({},state,{bBack:payload})
        case types.CHECK_USER:
            let us={...state.user}
              us.auth=payload
            return Object.assign({},state,{user:us})
        case types.CHECK_LOGIN:
            let uu={...state.user}
              uu.auth=payload
            return Object.assign({},state,{user:uu})
        default:
            return state;

    }
}
export default reducer;