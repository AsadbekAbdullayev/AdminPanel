import styled from "styled-components";
import { NavLink } from 'react-router-dom';
  
export const Link = styled(NavLink)`
font-family: sans-serif;font-weight: 500;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: ${({w})=>w ? "#0076F5" :'#1B1A18' };
text-decoration: none;
margin: 0 70px 0 0;
:hover{
    color: #0076F5;
}
`

export const Container = styled.div`
width:100%;
height:80px;
padding:0 100px;
display:flex;
align-items:center;
justify-content:space-between;
margin:0 0 50px 0;
`

 
Container.Link = styled.div`
height: 80px;
display:flex;
align-items:center;
`


Container.Logo = styled.div`
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 40px;
letter-spacing: -0.06em;
color: #0076F5;
`
Container.Btn = styled.div`
width: 116px;
height: 50px;
background: #F5FAFF;
border: 1px solid #0076F5;
box-sizing: border-box;
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #0076F5;
display:flex;
align-items:center;
justify-content:center;
:hover{
    color:#fff;
background: #0076F5;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
}

`

