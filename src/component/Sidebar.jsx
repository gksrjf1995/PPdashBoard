import React from "react"
import {Link , NavLink} from "react-router-dom"
import {SiShopware} from "react-icons/si"
import { MdOutlineCancel } from "react-icons/md"
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import {links} from "../data/dummy"
import {useStateContext} from "../contexts/ContextProvider"
const Sidebar = () => {
  const { activemenu , setactivemenu ,  screenSize } = useStateContext();
  
  const handleCloseSideBar = () => {
    if(activemenu && screenSize<=900){
      setactivemenu(false);
    }
  }
  const activeLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-blue-400  text-md m-2"
  const normalLink = "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2"
  
  return (
    <div className={`ml-3 md:overflow-visible md:hover:overflow-auto pb-10  ${activemenu ? 'h-screen' : 'hidden'} `}>
      {activemenu && <>
        <div className='flex-row justify-between items-stretch'>
          <Link to="/" className={"items-center gap-3 ml-3 mt-4  flex justify-between  text-xl font-extrabold tracking-tight dark:text-white text-slate-900"} onClick={()=>{setactivemenu(false)}} >
            <span className="flex items-center"><SiShopware/>Shoppy</span>
            <TooltipComponent content={"Menu"}>
              <button type="button" onClick={handleCloseSideBar} className={"text-xl rounded-full pr-3  flex items-center  text-slate-900 hover:bg-light-gray mt-4  md:hidden "}>
                <span><MdOutlineCancel/></span>
              </button> 
            </TooltipComponent>
          </Link>
          
          <div className='mt-10'>
           {links.map((item)=>{
             return <>
              <div className=' dark:text-gray-400 m-3 mt-4 uppercase'>
               <p>
                {item.title}
               </p>
               {item.links.map((item)=>{
                 return <NavLink key={item.name} to={`/${item.name}`} onClick={handleCloseSideBar} className={({ isActive })=>{ return isActive ? activeLink : normalLink }}>
                   {item.icon}
                   <span className='capitalize'>
                     {item.name}
                    </span>
                 </NavLink>
               })}
              </div>
             </>
           })}
          </div>
          
        </div>
      </>}
    </div>
  )
}

export default Sidebar