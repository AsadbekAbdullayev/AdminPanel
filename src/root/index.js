import React,{useContext} from 'react';
import Navbar from '../components/navbar/index';
import Footer from '../components/footer'
import { Routes,Route,Navigate } from 'react-router';
import { NavbarData } from '../utils/navbar';
import Setting from '../components/Setting';
import {Container} from './styled'
import {Color} from '../context/color'

const Root = () => {
  const [Dark] = useContext(Color)
  return <Container Dark={Dark}>
    <Setting/>
  <Routes>
    <Route element={<Footer/>}>
    <Route element={<Navbar/>}>
      {
        NavbarData.map(({id,pathname,Element})=>
          <Route key={id} path={pathname} element={<Element/>}/>
        )
      }
    </Route>
    </Route>

    <Route path='/' element={<Navigate to={'/Asosiy'}/>} />
    <Route path='*' element={<h1>NOT FOUND</h1>} />

  </Routes>

  </Container>

};

export default Root;
