import React , {useEffect} from 'react'
import {useStateContext} from "../contexts/ContextProvider"
import {Cart , Chat , Notification , Userprofile} from "../component/index"
import {AiOutlineMenu} from "react-icons/ai"
import {FiShoppingCart} from "react-icons/fi"
import {MdOutlineKeyboardArrowDown} from "react-icons/md"
import {MdNotifications} from "react-icons/md"
import {BsChatLeft} from "react-icons/bs"
import {RiNotification3Line} from "react-icons/ri"
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import avatar from "../data/avatar.jpg"
import { ChartTitleArea } from '@syncfusion/ej2/documenteditor'
import { BasicShape } from '@syncfusion/ej2/diagrams'

const NavButton = ({title , customFunc , icon , color , dotCOlor}) => {
  
  return <TooltipComponent content={title} position="BottomCenter">
    <button type='button' onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background : dotCOlor}} className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"/>
        {icon}
    </button>
  </TooltipComponent>}


const Navbar = () => {
 
  const { activemenu , setactivemenu  , screenSize ,
    setscreenSize, handleClick , setisClicked , isClicked } = useStateContext();

    useEffect(()=>{
      const handlereSize = () => setscreenSize(window.innerWidth);

      window.addEventListener('resize',handlereSize);

      handlereSize();

      return ()=>window.removeEventListener('resize',handlereSize);
    },[]);

    useEffect(()=>{
      if(screenSize <=900){
        setactivemenu(false);
      }else{
        setactivemenu(true);
      }
      console.log(screenSize);
    },[screenSize]);
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton title={"menu"} customFunc={()=>setactivemenu((current)=>!current)}  icon={<AiOutlineMenu/>}/>
       
       <div className='flex'>
        <NavButton title={"menu"} customFunc={()=>handleClick("cart")} dotCOlor="#03C9D7" color={"blue"} icon={<FiShoppingCart/>}/>
        <NavButton title={"menu"} customFunc={()=>handleClick("chat")} dotCOlor="#03C9D7" color={"blue"} icon={<BsChatLeft/>}/>
        <NavButton title={"menu"} customFunc={()=>handleClick("notification")} dotCOlor="#03C9D7" color={"blue"} icon={<RiNotification3Line/>}/>
        <TooltipComponent content={"profile"} position="BottomCenter">
          <div onClick={()=>handleClick("useProfile")} className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray-rounded-lg'>
            <img src={avatar} className={"rounded-full w-8 h-8"}/>
            <p>
              <span className='text-gray-400 text-14'>Hi ,</span>
              {''}
              <span className='text-gray-400 font-bold ml-1 text-14'>haha</span>
            </p>
            <MdOutlineKeyboardArrowDown className='text-gray-400' />
          </div>  
        </TooltipComponent>

        {isClicked.chat && <Chat/>}
        {isClicked.cart && <Cart/>}
        {isClicked.useProfile && <Userprofile/>}
        {isClicked.notification && <Notification/>}
       </div>
    </div>
  )
}


export default Navbar