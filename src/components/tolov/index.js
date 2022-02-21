import React from 'react';
import {Container} from './styled'
import uzcard from '../../assets/uzcard.png'
import humo from '../../assets/humo.png'
import mastercard from '../../assets/mastercard.png'
import viza from '../../assets/viza.png'
const Tolov = () => {
  return <Container>

     <Container.Title> To`lov</Container.Title>

     <Container.T1>Mamlakatinggiz</Container.T1>
     

     <Container.Select  onClick={(e)=>console.log(e.target.value)} >
         <Container.Option value='Uzbekistan' >
             Uzbekistan
        </Container.Option>
        <Container.Option value='Amerika' >
             Amerika
        </Container.Option>
        <Container.Option value='Rossiya' >
             Rossiya
        </Container.Option>
     </Container.Select>

     <Container.T1>To’lov tizimlari</Container.T1>

      <Container.Con>
           <Container.InpCon>
           <Container.Inp type='radio'/>
     <Container.T2>Mahalliy to’lov tizimlari</Container.T2>
          <Container.InpImg src={uzcard}/>
          <Container.InpImg src={humo}/>
           </Container.InpCon>

           <Container.InpCon>
           <Container.Inp type='radio'/>
     <Container.T2>Xalqaro to’lov tizimlari</Container.T2>
          <Container.InpImg src={mastercard}/>
          <Container.InpImg src={viza}/>
           </Container.InpCon>
      </Container.Con>
     <Container.T1>Karta ma’lumotlar</Container.T1>
     <Container.Con>

          <Container.InpCon>
     <Container.T2>Kartadagi isminggiz</Container.T2>

          </Container.InpCon>
                
          <Container.InpCon> 
     <Container.T2>Pochta indeks</Container.T2>

          </Container.InpCon>
         
     </Container.Con>
     <Container.Con>
     <Container.InpCon>
     <Container.T2>Karta raqami</Container.T2>

          </Container.InpCon>
                
          <Container.InpCon> 
     <Container.T2>MM/YY        Xavfsizlik kodi</Container.T2>

          </Container.InpCon>
     </Container.Con>

     <Container.Con>
          <div style={{display:'flex',alignItems:'center'}}>
         <Container.Inp2 type='checkbox'/> 
     <Container.T2>Karta ma’lumotlarini eslab qolish</Container.T2>
     </div>
          <Container.Btn>Tasdiqlash</Container.Btn>
     </Container.Con>


      </Container>;
};

export default Tolov;
