import React,{useState,useContext} from 'react';
import {Container1,Container2} from './styled'
import { Switch } from 'antd';
import Set from '../../assets/setting.png'
import {Color} from '../../context/color'
const Setting = () => {
const [Dark, SetDark] = useContext(Color)


const [Setting,SetSetting] = useState(false)

const OnSet = ()=>{
    SetSetting(!Setting)
    
    
}
  return <> 
        <Container1 onClick={OnSet} >
      <Container1.Img src={Set} className='ss'/>
      </Container1>

      <Container2 Setting={Setting}  >
        <Container2.Con B>
            <Container2.T1 R>Funksiyalar</Container2.T1>
            <Container2.ConBtn onClick={OnSet}>+</Container2.ConBtn>
        </Container2.Con>


        <Container2.Con >
            <Container2.T1>Tungi rejim</Container2.T1>
            <Switch onClick={()=>SetDark(!Dark)}/>
        </Container2.Con>
        <Container2.Con >
            <Container2.T1>Qiziqarli sayohat</Container2.T1>
            <Switch  />
        </Container2.Con>

        

      </Container2>
      
      </>
};

export default Setting;
