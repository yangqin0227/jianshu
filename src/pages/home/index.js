
import { HomeWrapper } from './style';
import { connect } from "react-redux/es/exports";

import React, { Component } from 'react'
import Topic from './components/Topic';
import Article from './components/Article';
import Recommed from './components/Recommed';
import Author from './components/Author';
import axios from 'axios';

 class Home extends Component {
  render() {
   
    return (
      <HomeWrapper>
        <div className='left'>
          <div className='banner'>
            <img className='image' src='https://upload.jianshu.io/admin_banners/web_images/5067/5c739c1fd87cbe1352a16f575d2df32a43bea438.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'/>
          </div>
          <Topic/>
          <Article/>
        </div>
        <div className='right'>
          <Recommed/>
          <Author/>
        
        </div>      
      </HomeWrapper>   
    )
  }
  //请求数据
  componentDidMount(){
    this.props.changeHomeData();
    

  }
}
const mapDispatch =(dispatch) =>({
  changeHomeData(){
    axios.get('/api/home.json').then((res) =>{
      const result = res.data.data;
      const action = {
        type:'change_home_data',
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList
      }
      //在组件中调用change 方法
      dispatch(action)
    })
    

  }

})
export default connect(null,mapDispatch)(Home) 
