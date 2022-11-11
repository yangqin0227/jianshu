import React,  { Component}from "react";
import{
    HeaderDiv,
    HeaderWrapper,
    Logo,
    Nav,
    
}from './style'

class Header extends Component{
    render(){
        return(
            <HeaderDiv>
                <HeaderWrapper>
                    <Logo href="/"/>
                    <Nav>
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
                        <div className="search">
                            <input  placeholder="搜索">  
                            </input>
                            <span className="iconfont searchicon">&#xe651;</span>
                        </div>
                        <div className="icon"><span className="iconfont">&#xe636;</span></div>
                        <div className="login">登录</div>
                        <div className="register">注册</div>
                        <div className="write">写文章</div>
                    </Nav>

                </HeaderWrapper>
            </HeaderDiv>
        )
           
        
    }
}
export default Header
