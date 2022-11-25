
import { connect } from "react-redux/es/exports";

import React, { Component } from 'react'

 class Topic extends Component {
  render() {
    const {list} =this.props
    return (
      <div className='tag'>
            {
              list.map((item)=>{
                return(
                  <div className='tagitem' key={item.get('id')}>
                    <img className='itemimage' src=''/>
                    {item.get('title')}
                  </div>
                )
              })
            }
            

      </div>
  
    
      
    )
  }
}

const mapState =(state) =>({
  list:state.get('home').get('topicList')
  
})

export default connect(mapState,null)(Topic)
