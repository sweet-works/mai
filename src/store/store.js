import {createStore} from 'redux'         //1、结构出来createStore
import state from './state'                     //2、引入模块
import reducer from './reducer'
let store=createStore(reducer,state,)     //3、创建store第一个参数reducer 第二个参数状态 state
export default store;