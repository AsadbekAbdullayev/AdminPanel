import React from 'react'
import { Button} from './styled'

const Btn = ({children,width,height}) => {
  return <Button width={width} height={height}>
      {children}
  </Button>
};

export default Btn;
