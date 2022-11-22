import * as constans from './constants';
import { fromJS  } from 'immutable';
const defaultState =fromJS({
  focused:false,
  mouseIn:false,
  list:[],
  page:1,
  totalPage:1
})

export default (state = defaultState,action) =>{
  // if(action.type === constans.SEARCH_FOCUS){
  //   // immutable 数据 改变 set---结合之前对象的值和新的值返回一个全新的值
  //   // return {
  //   //   focused:true
  //   // }
  //   return state.set('focused',true)
  // }
  // if(action.type === constans.SEARCH_BLUR){
  //   return state.set('focused',false)
  // }
  // if(action.type === constans.CHANGE_LIST){
  //   return state.set('list',action.data)
  // }
  // return state
  switch(action.type){
    case constans.SEARCH_FOCUS:
      return state.set('focused',true)
    case constans.SEARCH_BLUR:
      return state.set('focused',false)
    case constans.CHANGE_LIST:
      return state.merge({
        list:action.data,
        totalPage:action.totalPage
      })
    case constans.MOUSER_ENTER:
      return state.set('mouseIn',true)
    case constans.MOUSER_LEAVE:
      return state.set('mouseIn',false)
    case constans.CHANGE_PAGE:
      return state.set('page',action.page)
  
    default:
      return state
  }
}