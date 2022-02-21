import styled from "styled-components";

export const Container = styled.div`
width:100%;
padding:0 100px;
margin:60px 0 ;
`
Container.Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.06em;
margin:80px 0 ;
color: #1B1A18;
`
Container.CardCon = styled.div`
width:100%;
display: flex;
justify-content:space-between;
`
Container.Card = styled.div`
width: 264px;
height: 200px;
background: #F5FAFF;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
display: flex;
flex-direction:column;
align-items:center;
justify-content:center;

`

export const CardImg = styled.img`
width: 40px;
height: 50px;
`
Container.T1 = styled.div`
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 40px;
letter-spacing: -0.06em;
color: #1B1A18;
margin:20px 0 10px 0;   
`
Container.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 34px;
color: #514D48;
`