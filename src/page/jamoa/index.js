import React from 'react';
import {Container} from './styled'
import { Jdata } from '../../mock/jamoa';
import facebook from '../../assets/facebook.png'
import youtube from '../../assets/youtube.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import text2 from '../../assets/text2.png'
 
const JamoaPage = () => {

  return <Container>
      <Container.CardImg2 src={text2}/>
        
        <Container.CardCon>
         {
             Jdata.map(({id,name,status,img})=>{
                 return    <Container.Card key={id}>
                   <Container.CardN1>
                 <Container.CardImg src={img}/>

                 <Container.T1>
                     {name}
                 </Container.T1>

                 <Container.T2>
                     {status}
                 </Container.T2>
 
                 <Container.IconCon>
                 <Container.Icon src={facebook}/>
                 <Container.Icon src={youtube}/>
                 <Container.Icon src={github}/>
                 <Container.Icon src={instagram}/>
                 </Container.IconCon>

                 </Container.CardN1>
                
                 <Container.CardN2>
                 <Container.T1>
                     {status}
                 </Container.T1>
                 <Container.T2>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.Volutpat ut ut justo, vulputate vel auctor. Hac laoreet imperdiet cursus blandit luctus curabitur nec elit. Quis et ornare sit viverra ac nullam. Imperdiet ut venenatis velit et, platea leo, mollis vivamus lacus. A consequat accumsan ac id euismod est sapien. Parturient eu facilisis sem ultricies metus, nunc.
                 </Container.T2>
                <Container.TextCon2>
                <Container.T3 >
                #html
                </Container.T3>
                <Container.T3 >
                #css
                </Container.T3> <Container.T3 >
                #bootstrap
                </Container.T3> <Container.T3 >
                #sass
                </Container.T3> <Container.T3 >
                #javascript
                </Container.T3><Container.T3 >
                <Container.T3 >
                #reactjs
                </Container.T3>
                </Container.T3><Container.T3 >
                #angular
                </Container.T3>

                </Container.TextCon2>

                 </Container.CardN2>
             </Container.Card>
             })
         }
        </Container.CardCon>
  </Container>

};

export default JamoaPage;
