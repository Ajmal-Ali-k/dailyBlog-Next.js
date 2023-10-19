"use client"
import { useContext, useEffect, useState } from "react"

import { ThemeContext } from "@/context/ThemeContext"

const ThemeProvider = ({children}) => {
    
  const {theme} = useContext(ThemeContext)
  const [mounded,setMounded] = useState(false)

  useEffect(()=>{
    setMounded(true)
  },[])
  if(mounded){
    return (
      <div className={theme}>{children}</div>
    )
  }

    
}

export default ThemeProvider