import styled from "styled-components";
import NavPic1 from '../../images/nav1.png';
import NavPic2 from '../../images/nav2.png';


export const HomeWrapper =styled.div`
  height: 56px;
  min-width: 768px;
  max-width: 960px;
  margin: 0 auto; 
  box-sizing: border-box;
  margin: 0 auto;  
  display: flex;
  .left{
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    height: 300px;
    .image{
        display: block;
        width: 625px;
        height: 270px;

      }
    .tag{
      padding: 20px 0 10px 0;
      display: flex;
      .tagitem{
        height: 32px;
        line-height: 32px;
        background-color: #fff;
        font-size: 14px;
        color: #000;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        padding: 0 10px;
        margin: 0 10px;
        
      }
    }
  }
  .right{
    padding-top: 30px;
    margin-left: 4.1%;
    width: 30%;

  }
  .author{
    width: 278px;
    border: 1px solid #dcdcdc;
    height: 300px;
    line-height: 300px;
    text-align: center;

  }
`

export const ArtWrapper =styled.div`
  
  width: 625px;
  
  .artitem{
    display: flex;
    margin: 0 0 15px;
    .listitem{
      padding:  20px 0;
      border-bottom: 1px solid #dcdcdc;
      .title{
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
        color: #333;
      }
      .text{
        line-height: 24px;
        font-size:13px;
      }
      .meta{
        display: flex;
        .icon1{
          margin-right: 10px;
          color: #b4b4b4;
          font-size: 12px;
        }
      }
    
    }

    .image{
      display: block;
      width: 125px;
      height: 100px;
      border-radius: 10px;
      border: 1px solid #eee;
  }
  }
`
export const RecommedWrapper = styled.div`
  background-color: #fefefe;
  .image{
    display: block;
    width: 280px;
    height: 50px;
    background-image: url(${NavPic1});
    background-size: contain;
    margin-bottom: 10px;
  }

`
