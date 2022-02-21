import styled from "styled-components";


export const Container = styled.div`
width:100%;
padding:0 100px;
display:flex;
`

Container.ImgCon = styled.div`
display:flex;
height: 585px;
width: 640px;
box-sizing:border-box;
justify-content:flex-end;
`

Container.TextCon = styled.div`
flex:1;
height: 545px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

Container.Img1 = styled.img`

width: 190px;
height: 545px;
background: #C4C4C4;
border-radius: 30px;  
box-shadow: 4px 4px 16px #111;

margin: 0 0 0 20px;
`
Container.Img2 = styled.img`
width: 190px;
height: 545px;
background: #C4C4C4;
border-radius: 30px;  
box-shadow: 4px 4px 16px #111;

margin: 100px 0 0 20px;
`
Container.TextImg = styled.img`
height: 240px;
`
Container.BtnCon = styled.div`
display: flex;
width: 100%;
height: 100px;
align-items:flex-end;
`


Container.Btn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 36px;
width: 180px;
height: 50px;
background: #fff;
border: 1px solid #0076F5;
box-sizing: border-box;
border-radius: 10px;
margin: 0 20px 0 0;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 26px;
color: #0076F5;
:hover{
color: #fff;
background: #0076F5;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
}
`
