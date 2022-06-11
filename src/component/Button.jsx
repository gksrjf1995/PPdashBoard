import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({color,
  bgColor,
  text,
  size,
  icon,
  borderRadius,}) => {
  const { setisClicked , initState , setactivemenu , activemenu } = useStateContext();
  

  return (
    <button type="button" onClick={()=>setisClicked(initState)}
      style={{backgroundColor : bgColor , color , borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
    >
      {icon} {text}
    </button>
  )
}

export default Button