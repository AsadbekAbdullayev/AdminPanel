import React from 'react';
import { Container,Link} from './styled'
import {NavbarData} from '../../utils/navbar'
import { Outlet,useLocation } from 'react-router-dom';
import Btn from '../Generic/button';
const Navbar = () => {
  const location = useLocation()
//   const [Sec, SeTSec] = useState()
  
//   setInterval(function(){
//     let Dat =new Date();
//     let N = Dat.getSeconds()
//   SeTSec(N)
// },1000)

return <> <Container>

      <Container.Logo>
        Webbrain
      </Container.Logo>

        <Container.Link>
      {
          NavbarData.map(({name,pathname,id})=>{
            return(
              
              <Link w={location?.pathname ===pathname} key={id} to={pathname} >{name}</Link>
              
              )
            })
          }
          </Container.Link>

          
          
          <Btn >Kirish</Btn>
  </Container>
  <Outlet/>
  </>
};

export default Navbar;
