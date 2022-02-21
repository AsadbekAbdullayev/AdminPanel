import styled from "styled-components";
export const Container1 = styled.div`
position:fixed;
width: 70px;
height: 50px;
left: 0px;
top: 300px;
background: #0076F5;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
border-radius: 0px 100px 100px 0px;
display:flex;
align-items:center;
justify-content:center;

`
Container1.Img = styled.img`
width: 25px;
height: 25px;
:hover{
    
    transform: rotate(2000deg);
    transition:5s linear;

}
`
export const Container2 = styled.div`
position: fixed;
width: 210px;
height: 148px;
left: ${({Setting})=>Setting ? '0px' :'-210px'};
top: 250px;
background: #F5FAFF;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 0px 10px 10px 0px;
`
Container2.Con = styled.div`
width: 200px;
height: 46px;
border-bottom: ${({B})=>B && '1px solid #8FC5FF'};
display: flex;
align-items:center;
justify-content:space-between;
padding:0 5px;
`
Container2.ConBtn = styled.button`
width: 30px;
height:30px;
transform: rotate(45deg);
font-style: 800;
font-weight: 500;
font-size: 30px;
color: #000;
border: none;
border-radius:50%;
background: #fff;
display:flex;
align-items:center;
justify-content:center;
:hover{
background: #fcc;

}
`


Container2.T1 = styled.div`
font-style: 600;
font-weight: 500;
font-size: 18px;
line-height: 22px;
color: ${({R})=>R ? '#0076F5' :'#514D48'};
`