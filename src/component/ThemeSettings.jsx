import React from 'react'
import {MdOutlineCancel} from "react-icons/md"
import {BsCheck} from "react-icons/bs"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {themeColors} from "../data/dummy"
import { useStateContext } from '../contexts/ContextProvider'


const ThemeSettings = () => {

  const a = 2
  const {currentColor,
    currentMode,
    setcurrentColor,
    setcurrentMode,
    setthemeSetting, setMode , setColor} = useStateContext();
  
    const text = (color) => {
      console.log(color);
      return setcurrentColor(color)
    }
  
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:[#484B52]
      w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p className='font-semibold text-lg'>
            Settings
          </p>
          <button className='text-2xl p-3 hover:drop-shadow-xl hover:bg-slate-500 hover:transition-all' type="button" onClick={()=>{return setthemeSetting(current=>{return !current})}} style={{color :'rgb(153,171,180)',borderRadius : "50%"}}>
            <MdOutlineCancel/>
          </button>
        </div>
        <div className='flex-row border-t-1 border-color p-4 ml-4'>
          <p className='font-semibold text-lg'>
            테마 옵션
          </p>
          <div className='flex flex-col mt-3'>
            <p>
              <input type="radio" id="light" name="theme" value="Light" onChange={setMode}
              checked={currentMode === "light"}
              />
              <label htmlFor='light' className='ml-2 text-ml cursor-pointer'>Light</label>
            </p>
            <p>
              <input type="radio" id="Dark" name="theme" value="Dark" onChange={setMode}
              checked={currentMode === "Dark"}
              />
              <label htmlFor='Dark' className='ml-2 text-ml cursor-pointer'>Dark</label>
            </p>
            


          </div>
        </div>
        <div className='flex-row border-t-1 border-color p-4 ml-4' >
          <p className='font-semibold text-lg'>
            Theme Colors
          </p>
          <div className='flex gap-3'>
            {themeColors.map((item,index)=>{
              return <TooltipComponent key={index} content={item.name} position={"TopCenter"}>
                <div className='relative mt-2 cursor-pointer flex gap-5 items-center'>
                  <button type='button' className='rounded-full cursor-pointer h-10 w-10' style={{backgroundColor : item.color}} 
                  onClick={(e)=>{
                    setColor(item.color)}}>
                    <BsCheck className={`ml-2 text-2xl text-white ${item.color == currentColor ? "block" : "hidden"}`}/>
                  </button>
                </div>
              </TooltipComponent>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeSettings