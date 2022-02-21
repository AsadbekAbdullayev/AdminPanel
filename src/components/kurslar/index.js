import React from 'react';
import {Container,Link} from './styled'
import { Kdata } from '../../mock/kurs';
 
const Kurslar = () => {

  return <Container>
      <Container.TextCon>
      <Container.Title>
      Kurslar
      </Container.Title>

        <Link to='/Kurslarimiz'>Barcha kurslar {'>'} </Link>
      </Container.TextCon>
        
        <Container.CardCon>
         {
             Kdata.map(({id,T1,T2,img})=>{
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

};

export default Kurslar;
