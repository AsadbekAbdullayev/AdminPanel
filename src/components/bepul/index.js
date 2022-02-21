import React from 'react';
import {Container,Link} from './styled'
import { Bdata } from '../../mock/bepul';
 
const Bepul = () => {

  return <Container>
      <Container.TextCon>
      <Container.Title>
      Bepul darsliklar
      </Container.Title>

        <Link to='/youtube'>Barcha kurslar {'>'} </Link>
      </Container.TextCon>
        
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

};

export default Bepul;
