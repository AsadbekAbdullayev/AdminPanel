import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
width:100%;
padding:0 100px;
margin:100px 0 ;
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
width: 332px;
height: 436px;
background: #F5FAFF;
border-radius: 10px;
padding: 30px;
display: flex;
 justify-content: center;
 align-items: center;
flex-direction: column;
:hover{
    box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);

}

`
Container.CardImg = styled.img`
width: 120px;
height: 120px;
`
Container.T1 = styled.div`
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 34px;
color: #1B1A18;
`
Container.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
text-align: center;
color: #514D48;
height: 200px;
width: 100%;
`
Container.T3 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
color: #0076F5;
margin: 0 0 5px 0;
`

Container.IconCon = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 12px 36px;
width: 120px;
height: 30px;

`
Container.Icon = styled.img`
width: 20px;
height: 20px;
margin: 5px;
`

