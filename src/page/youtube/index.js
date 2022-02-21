import React from 'react';
import Youtube from '../../components/youtube'
import Tolov from '../../components/tolov'
import {Container} from './styled'
import { Bdata } from '../../mock/bepul'
import text3 from '../../assets/text5.png'

const YoutubePage = () => {
  return <>
  <Youtube/>
  <Container>
  <Container.BigImg src={text3}/> 
  <Container.CardCon>
         {
             Bdata.map(({id,T1,T2,img})=>{
                 return    <Container.Card key={id}>
                 <Container.CardImg src={img}/>
                 <Container.T1>
                {T1}
                 </Container.T1>
 
                 <Container.T2>
                     {T2}
                 </Container.T2>
 
                 <Container.Btn>
                 Batafsil
                 </Container.Btn>
             </Container.Card>
             })
         }
        </Container.CardCon>
        </Container>
  <Tolov/>
  </>;
};

export default YoutubePage