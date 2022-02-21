import React from 'react';
import {Container,CardImg } from './styled'
import { SData } from '../../mock/statistika';
const Statistika = () => {
  return <Container>
      <Container.Title>
          Statistika
      </Container.Title>

      <Container.CardCon >
    {
        SData.map(({img,id,son,desc})=>{
            return(
                <Container.Card key={id}>
                    <CardImg src={img}/>
                    <Container.T1>
                        {son} ta
                    </Container.T1>
                    <Container.T2>
                        {desc}
                    </Container.T2>
                </Container.Card>
            )
        })
    }
    </Container.CardCon>
    
  </Container>;
};

export default Statistika;
