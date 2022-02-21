import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
width:100%;
padding:0 90px;
margin:20px 0 ;
`
export const Link = styled(NavLink)`
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 28px;
color: #0076F5;
text-decoration:none;
margin-left:auto;
`
Container.BigImg = styled.img`
height:200px;
width: 100%;
margin: 50px 0;
`
Container.Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.06em;
margin:20px 0 ;
color: #1B1A18;
`
Container.TextCon = styled.div`
width:100%;
display:flex;
height: 60px;
align-items:center;

`

Container.CardCon = styled.div`
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
margin: 40px 0;

`
Container.Card = styled.div`
width:272px;
height: 396px;
background: #F5FAFF;
border-radius: 10px;
padding: 20px;
display: flex;
 justify-content: center;
 align-items: flex-start;
flex-direction: column;
:hover{
    box-shadow: 0px 0px 30px -10px grey;

}

`
Container.CardImg = styled.img`
width: 230px;
height: 170px;
`
Container.T1 = styled.div`
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 34px;
color: #1B1A18;
margin:10px 0 0 0;
`
Container.T2 = styled.div`
font-style: normal;
font-size: 16px;
text-align: center;
color: #514D48;
text-align: left;
`
Container.Btn = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 36px;
width: 125px;
height: 40px;
border: 1px solid #0076F5;
box-sizing: border-box;
filter: drop-shadow(4px 8px 16px rgba(0, 118, 245, 0.4));
border-radius: 10px;
margin: 10px 0 0 0;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #0076F5;

:hover{
    color:#fff;
    background: #0076F5;
border: 1px solid #0076F5;
box-sizing: border-box;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
}
`
