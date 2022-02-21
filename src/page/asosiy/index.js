import React,{useContext} from 'react';
import Biz from '../../components/biz';
import Kurslar from '../../components/kurslar';
import Statistika from '../../components/statistika';
import Bepul from '../../components/bepul';
import Jamoa from '../../components/jamoa';
import Aloqa from '../../components/aloqa';
import Sertifikat from '../../components/sertifikat';
import {Contaiener} from './styled'
import {Color} from '../../context/color'
const AsosiyPage = () => {
  const [Dark] = useContext(Color)
  return <Contaiener Dark={Dark}>
      <Aloqa/>
<Statistika/>
<Biz/>
<Kurslar/>  
<Bepul/>
<Jamoa/>
<Sertifikat/>
  </Contaiener>
};

export default AsosiyPage;
