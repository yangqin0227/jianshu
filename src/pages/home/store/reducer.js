
import { fromJS  } from 'immutable';
const defaultState =fromJS({
  topicList:[],
  articleList:[],
  recommendList:[]
  
})

export default (state = defaultState,action) =>{
  switch(action.type){
    case 'change_home_data':
      // console.log(action)
      //替换数据
      return state.merge({
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList)
      })
    default:
      return state
  }
  
 
}