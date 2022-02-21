import React from 'react';
import {Container,Link} from './styled'
import { Jdata } from '../../mock/jamoa';
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
 
const Jamoa = () => {

  return <Container>
      <Container.TextCon>
      <Container.Title>
      Bizning Jamoa
      </Container.Title>

        <Link to='/Kurslarimiz'>Barcha mentorlar {'>'} </Link>
      </Container.TextCon>
        
        <Container.CardCon>
         {
             Jdata.map(({id,name,status,text,img})=>{
                 return    <Container.Card key={id}>
                 <Container.CardImg src={img}/>

                 <Container.T1>
                     {name}
                 </Container.T1>

                 <Container.T3>
                     {status}
                 </Container.T3>
 
                 <Container.T2>
                     {text}
                 </Container.T2>
 
                 <Container.IconCon>
                 <Container.Icon src={facebook}/>
                 <Container.Icon src={youtube}/>
                 <Container.Icon src={github}/>
                 <Container.Icon src={instagram}/>
                 </Container.IconCon>
             </Container.Card>
             })
         }
        </Container.CardCon>
  </Container>

};

export default Jamoa;
