import styled from "styled-components";

import logoPic from '../../images/nav-logo.png'

export const HeaderDiv =styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`
export const HeaderWrapper =styled.div`
    height: 56px;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto; 
    box-sizing: border-box;
    margin: 0 auto;  
    display: flex;
    a{

    } 
`
export const Logo =styled.a`
    display: block;
    width: 100px;
    height: 56px;
    
    background:url(${logoPic});
    background-size: contain;
`
export const Nav=styled.div`
    position: relative;
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    vertical-align: middle;
    .title{
        display: flex;
                
    }
    .text{
        text-decoration:none
    }
    a{
        display: block;
        list-style: none;      
        padding: 20px;   
        color: #333;
        display: flex;
        &.active{
        color: #ea6f5a;
        }
        .iconfont{
            margin-right: 8px;
            font-size: 20px;
        }
    }
    .slide-enter{
        transition: all 0.2s ease-out;
    }
    .slide-enter-active{
        width: 220px;
    }
    .slide-exit{
        transition: all .2s ease-out;
    }
    .slide-exit-active{
        width: 160px;
    }
    .search{
        position: relative;
        margin-left: 20px;  
        input{
        width: 160px;
        padding: 0 40px 0 20px ;
        height: 38px;
        font-size: 14px;
        border: 1px solid #eee;
        outline: none;
        color: #454545;
        border-radius:20px;
        background-color: #eee;
        &::placeholder{
            color: #999;
        }
        &.focused{
            width: 220px;
        }
    }
        .searchicon{ 
        position: absolute;
        top: 5px;
        right: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 20px;
        text-align: center;
        color: #969696;
        &.focused{
            background-color: #777;
            color: #fff;
        }
        
    }
        .searchinfo{
            position: absolute;
            left: 0;
            width: 250px;
            top: 56px;
            padding:  0 20px;
            background-color: #ffffff;
            box-shadow:  0 0 8px rgba(0,0,0,.2);
            .infotitle{
                margin-top: 20px;
                margin-bottom: 15px;
                line-height: 20px;
                font-size: 14px;
                color: #333;
                .change{
                    float: right;
                    font-size: 12px;
                }
            }
            .titleitem{
                display: flex;
                flex-wrap:  wrap;
                .item{
                    padding: 0 5px;
                    font-size: 14px;
                    line-height: 20px;
                    margin-right: 10px;
                    margin-bottom: 15px;
                    border:  1px solid #ddd;
                    border-radius: 2px;
                    color: #969696;

                }


            }
        } 
    }
    
    .nav-right{
        padding-left: 60px;
        display: flex;
        align-items: center;
        position: absolute;
        right: 20px;
    }
    
    .right{
        margin: 0 10px;
    }
    
    .icon{
        color: #969696;
    }
    .login{
        color: #969696;
    }
    .register{
        width: 80px;
        height: 38px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        border: 1px solid #ea6f5a;
        font-size: 15px;
        color: #ea6f5a;

    }
    .write{
        height: 40px;
        width: 100px;
        line-height: 40px;
        text-align: center;
        border-radius:20px;
        font-size: 15px;
        background-color: #ea6f5a;
        color: #fff;

    }
`
