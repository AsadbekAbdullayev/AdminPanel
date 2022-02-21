import React from 'react'
import {Container,Img1,Img2 } from './styled'

import uns1 from '../../assets/unsplash1.png'
import uns2 from '../../assets/unsplash2.png'
const Biz = () => {
  return <Container>
     <Container.Title>
     Biz haqimizda
     </Container.Title>

        <Container.Con>

     <Container.ImgCon>
         <Img1 src={uns1}/>
         <Img2 src={uns2}/>
     </Container.ImgCon>

     <Container.TextCon>
    <Container.T1>
    Biz haqimizda faqat bizdan eshiting 
    </Container.T1>

    <Container.T2>
    Eget nam quisque lobortis ipsum sollicitudin. Ultricies morbi platea ac vel duis sed pretium. Vel ac magnis et lobortis adipiscing tempor, tincidunt urna. Morbi aenean natoque bibendum ut volutpat.
    </Container.T2>
    <Container.T2>
    Varius cras facilisi eleifend consequat libero sit nisl. Purus arcu viverra facilisi in. Sit consequat dolor lectus velit, neque, enim, fames laoreet.
    </Container.T2>
    

     </Container.TextCon>

        </Container.Con>
  </Container>;
};

export default Biz;
