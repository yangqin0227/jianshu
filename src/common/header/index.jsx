import React,  { Component}from "react";
import { connect } from "react-redux/es/exports";
import { CSSTransition } from "react-transition-group";
import  {actionCreators} from './store'
import{
    HeaderDiv,
    HeaderWrapper,
    Logo,
    Nav,
    
}from './style'
class Header extends Component{
    getListArea(){
        const {focused,list ,page,mouseIn, handleMouseEnter,handleMouseLeave} =this.props;
        const newList = list.toJS();
        const pageList = [];

        for(let i=(page-1)*10;i<page*10;i++){
            pageList.push(
                <div className='item' key={newList[i]}>{newList[i]}</div>
            )
        }
        if(focused || mouseIn){
            return(
                <div className="searchinfo" 
                     onMouseEnter={handleMouseEnter}
                     onMouseLeave={handleMouseLeave}
                >
                <div className="infotitle">热门话题
                    <span className="change">换一换</span>
                </div>
                <div className="titleitem">
                    {pageList}
                </div>
            </div>
            )
        }else {
            return null
        }
    }
    render(){
        const {focused,handlInputeBlur,handleInputFocus}=this.props
        return(
            <HeaderDiv>
                <HeaderWrapper>
                    <Logo href="/"/>
                    <Nav>
                        <div className="title">
                            <a className="active">
                                <span className="iconfont">&#xe8af;</span>
                                <div>首页 </div>
                            </a>
                            <a>
                                <span className="iconfont">&#xebb4;</span>
                                <div>下载 </div>
                            </a>
                            <a>
                                <span className="iconfont">&#xe8b1;</span>
                                <div>会员</div>
                            </a>
                            <a>
                                <span className="iconfont">&#xe6b9;</span>
                                <div>IT技术</div>
                            </a>

                        </div>                          
                        <div className="search">
                            <CSSTransition
                                timeout={200}
                                in={focused}
                                classNames="slide"
                            >
                                <>
                                <input  placeholder="搜索" 
                                        className={focused?'focused':''}
                                        onFocus={handleInputFocus}
                                        onBlur={handlInputeBlur}                                                                              
                                    >  
                                    </input>
                                    <span  className={focused?'iconfont searchicon focused':'iconfont searchicon'}>&#xe651;</span>
                                    
                                </>
                            </CSSTransition>
                            {this.getListArea(focused)}
                        </div>                                                                      
                        <div className="nav-right">
                            <div className="icon right"><span className="iconfont">&#xe636;</span></div>
                            <div className="login right">登录</div>
                            <div className="register right">注册</div>
                            <div className="write right">写文章</div>
                        </div>     
                    </Nav>
                </HeaderWrapper>
            </HeaderDiv>
        )    
    }
}
//仓库中的数据state.focused  映射到组件中的props中//--原先放在class组件的constructor中
const mapStateToProps =(state) =>{
    //immutable类型数据： 不可变数据 调用数据 用get(),改变 set()
    return{
        // focused:state.header.focused
        // focused:state.get('header').get('focused')
        // 统一了数据格式 都是immutable数据 getIn() ---数组
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        mouseIn:state.getIn(['header','mouseIn'])
        
    }
}
const mapDispathToProps = (dispatch) =>{
    return{
        // 方法都写在dispatch中 数据修改需要通过action ，然后dispach派发
        handleInputFocus(){          
        //    const action ={
        //     type:'search_focus'
        //    };
        //    dispatch(action)
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handlInputeBlur(){
           dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        }

    }
}
export default connect(mapStateToProps,mapDispathToProps)(Header) 
