import React, { Component } from 'react'
import { ArtWrapper } from '../style';
import { connect } from 'react-redux';
import Item from 'antd/lib/list/Item';

 class Article extends Component {
  render() {
    const{list} =this.props
    return (
      <ArtWrapper>
        {
            list.map((item)=>{
              return(
                <div className='artitem' key={item.get('id')}>          
                  <div className='listitem'>
                    <a className='title'>{item.get('title')}</a>
                    <p className='text'>{item.get('desc')}</p>
                    <div className='meta'>
                      <div className='icon1'>
                        <span className='icon'></span>
                        34.5
                      </div>
                      <div className='icon1'>{item.get('name')}</div>
                      <div className='icon1'>
                        <span> </span>
                        {item.get('like')}
                      </div>
                      <div className='icon1'>
                        <span> </span>
                        {item.get('message')}
                      </div>
                    </div>
                  </div>
                  <img className='image' src={item.get('imgUrl')}></img> 
                </div>       
              )
            })
          }
         
      </ArtWrapper>
       
    )
  }
}
const mapState = (state) =>({
  list:state.getIn(['home','articleList'])
})

export default connect(mapState,null)(Article)
