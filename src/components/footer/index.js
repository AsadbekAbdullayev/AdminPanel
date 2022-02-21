import React,{useContext} from 'react';
import {Container} from './styled';
import facebook from '../../assets/facebookK.png'
import github from '../../assets/githubK.png'
import {Color} from '../../context/color'
import google from '../../assets/googleK.png'
import { Outlet } from 'react-router';
const Footer = () => {
const [Dark] = useContext(Color)

  return <>
  <Outlet/>
   <Container Dark={Dark}>
        <Container.Con>
            <Container.T1>
            Neumorphism UI PRO is a premium Bootstrap UI Kit built based on the newest design trend called Neumorphism.
            </Container.T1>
            <Container.IconCon>
            <Container.Icon src={facebook}/>
            <Container.Icon src={google}/>
            <Container.Icon src={github}/>
        </Container.IconCon>
        </Container.Con>

        <Container.Con>
        <Container.T3>
        Webbrain
        </Container.T3>
        <Container.T4>
        Team
        </Container.T4>
        <Container.T4>
        Partners
        </Container.T4>
        <Container.T4>
        Lessons
        </Container.T4>
        <Container.T4>
        About us
        </Container.T4>
        </Container.Con>

        <Container.Con>
        <Container.T3>
        Others
        </Container.T3>
        <Container.T4>
        Docs
        </Container.T4>
        <Container.T4>
        Changelog
        </Container.T4>
        <Container.T4>
        Licence
        </Container.T4>
        <Container.T4>
        Support
        </Container.T4>
        </Container.Con>



        <Container.Con>
        <Container.T1>
        Others
        </Container.T1>
        <Container.T2>
        Join our mailing list. We write rarely, but only the best content
        </Container.T2>
        <Container.Inp />
        <Container.Btn>
        Yuborish
        </Container.Btn>
        </Container.Con>



  </Container>
  <Container.TCon>
  <Container.Title1>
      Webbrain
  </Container.Title1>
  <Container.Title2>
  Copyright Webbrain 2021. All rights reserved
  </Container.Title2>
  </Container.TCon>
   </>
};

export default Footer;
