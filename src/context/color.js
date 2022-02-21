import React,{useState, createContext} from 'react';

export const Color = createContext()

export const ColorProvider = ({children})=>{
const [Dark,SetDark] = useState(false)
    return(
        <Color.Provider value={[Dark, SetDark]}>
        {children}
        </Color.Provider>
    )

}


