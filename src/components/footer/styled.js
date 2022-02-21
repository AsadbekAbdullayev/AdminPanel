import styled from "styled-components";

export const Container = styled.div`
width:100%;
height:270px;
padding:50px 100px;
border-top: 1px solid #CFCCC9;
border-bottom: 1px solid #CFCCC9;
margin:100px 0 20px 0 ;
display:flex;
justify-content:space-between;
background:${({Dark})=>Dark && '#254361'};
`

Container.Con =styled.div`
width: 280px;
display: flex;
flex-direction:column;
`
Container.IconCon =styled.div`
display: flex;
margin: 30px 0;
`
Container.Icon =styled.img`
width:17px;
height:20px;
margin:0 10px 0 0;
`




Container.T1 =styled.div`
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 18px;
margin: 0 0 10px 0;
`
Container.T3 =styled.div`
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 18px;
margin:0 0 10px 60px
`

Container.T2 =styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
margin: 0 0 10px 0;
`
Container.T4 =styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 16px;
margin:0 0 10px 60px

`
Container.Inp = styled.input`
width: 100%;
height: 40px;
background: #F5FAFF;
border: 1px solid #8FC5FF;
box-sizing: border-box;
border-radius: 5px;
margin: 0 0 10px 0;

`
Container.Btn = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 12px 36px;
width: 100%;
height: 40px;
background: #fff;
border: 1px solid #0076F5;
box-sizing: border-box;
border-radius: 10px;

font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: #0076F5;
:hover{
    color:#fff;
    background:#0076F5;
box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
}
`
Container.TCon= styled.div`
height: 120px;
`

Container.Title1 = styled.div`
font-style: normal;
font-weight: 600;
font-size: 33px;
line-height: 40px;
letter-spacing: -0.06em;
color: #0076F5;
text-align:center
`
Container.Title2 = styled.div`
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #31344B;
text-align:center
`
