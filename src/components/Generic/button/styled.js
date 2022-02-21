import styled from "styled-components";

export const Button = styled.button`
width:${({width})=>width ? `${width}px`:`116px`};
height:${({height})=>height ? `${height}px`:`50px`} ;
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
:active{
    transition:linear 0.1s;
    transform:scale(0.95)
}
`