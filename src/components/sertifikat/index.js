import React from 'react'
import {Container,Img1 } from './styled'
import sertifikat from '../../assets/sertifikat.png'
const Sertifikat = () => {
  return <Container>
     <Container.Title>
     Sertifikat
     </Container.Title>

        <Container.Con>

     <Container.ImgCon>
         <Img1 src={sertifikat}/>
     </Container.ImgCon>

     <Container.TextCon>
    <Container.T1>
    +200 o’quvchilar bizga ishonishgan
    </Container.T1>

    <Container.T2>
    Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi e’tiborga olingan holda sertifikatlar beriladi.
    </Container.T2>
   
    

     </Container.TextCon>

        </Container.Con>
  </Container>;
};

export default Sertifikat;
