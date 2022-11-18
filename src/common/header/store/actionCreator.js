import * as constans from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

export const searchFocus =() =>({
  type:constans.SEARCH_FOCUS
})

export const searchBlur = ()=>({
  type:constans.SEARCH_BLUR
})
export const mouseEnter =() =>({
  type:constans.MOUSER_ENTER
})
export const mouseLeave =() =>({
  type:constans.MOUSER_LEAVE
})

const changeList =(data) =>({
  type: constans.CHANGE_LIST,
  //数据类型需要同类型 ---转变为immutable类型 
  data:fromJS(data),
  totalPage:Math.ceil(data.length/10)

})
export const getList =() =>{
  return(dispatch) =>{
    axios.get('/api/headerList.json').then((res)=>{
      const data =res.data
      dispatch(changeList(data.data))
    }).catch(() =>{
      console.log('error')
    })
  }
}
