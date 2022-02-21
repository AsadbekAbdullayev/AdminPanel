import React from 'react';
import {Container} from './styled'
import N1 from '../../assets/N1.png'
import N2 from '../../assets/N2.png'
import N3 from '../../assets/N3.png'
import Text from '../../assets/text1.png'

const Aloqa = () => {
  return <Container>
      <Container.TextCon>
    <Container.TextImg src={Text}/>
    <Container.BtnCon>
        <Container.Btn>
            Kurslarimiz
        </Container.Btn>
        <Container.Btn>
            Aloqa
        </Container.Btn>
    </Container.BtnCon>
      </Container.TextCon>

      <Container.ImgCon>
     <Container.Img1 src={N1}/>
     <Container.Img2 src={N2}/>
     <Container.Img1 src={N3}/>
      </Container.ImgCon>
  </Container>;
};

export default Aloqa;
