import styled from "styled-components";
export const Container = styled.div`
width:100%;
padding:0 100px;
`
Container.Con = styled.div`
width:100%;
height: 400px;
display:flex;
align-items:center;
margin: 50px 0;
`

Container.ImgCon = styled.div`
display:flex;
height: 385px;
width: 640px;
box-sizing:border-box;
justify-content:flex-start;
`

export const Img1 = styled.img`
width: 500px;
height: 380px;
`

Container.TextCon = styled.div`
flex:1;
height: 385px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
`

Container.T1 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 34px;
color: #1B1A18;
`
Container.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #514D48;
margin:20px 0 0 0;
`
Container.Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.06em;
color: #1B1A18;
`