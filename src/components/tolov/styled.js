import styled from "styled-components";

export const Container = styled.div`
width:100%;
padding:0 300px;
margin:70px 0 200px 0;
`
Container.Title = styled.div`
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.06em;
color: #0076F5;
`

Container.Select = styled.select`
width: 382px;
height: 40px;
border: 1px solid #CFCCC9;
box-sizing: border-box;
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #1B1A18;
padding: 0 10px 0 20px;
outline:none;
transition:0.3s linear;
background: #F5FAFF;

`

Container.Option = styled.option`
height: 40px;
border-radius: 10px;
border: 1px solid #CFCCC9;
background: #F5FAFF;
transition:0.3s linear;
`
Container.T1 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 19px;
line-height: 28px;
color: #000000;
margin:30px 0 15px 0;
`

Container.T2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #1B1A18;
`
Container.Con = styled.div`
display:flex;
justify-content:space-between;

`

Container.Inp = styled.input`
width: 18px;
height: 18px;
margin:0 10px 0 0;
`
Container.Inp2 = styled.input`
width: 24px;
height: 24px;
margin:0 10px 0 0;
outline:none;
border: 1px solid #CFCCC9;
box-sizing: border-box;
border-radius: 5px;
`
Container.InpImg = styled.img`
width: 40px;
height: 28px;
margin-left:auto;
`

Container.InpCon = styled.div`
width: 362px;
height: 40px;
border: 1px solid #CFCCC9;
box-sizing: border-box;
border-radius: 10px;
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #1B1A18;
padding: 0 10px 0 20px;
display: flex;
align-items:center;
padding:0 20px;
margin: 0 0 20px 0;
`
Container.Btn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 36px;
width: 362px;
height: 40px;
background: #fff;
color:#0076F5;
border: 1px solid #0076F5;
box-sizing: border-box;
border-radius: 10px;
:hover{
    background: #0076F5;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
    color:#fff;
}
`
