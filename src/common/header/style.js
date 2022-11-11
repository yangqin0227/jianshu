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
    width: 960px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: space-between;

    a{
        display: block;
        list-style: none;      
        padding: 8px;   
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
    .search{
        position: relative;
        
    }
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
