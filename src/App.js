import React from "react"
import './App.css';
import { BrowserRouter  , Route , Routes} from 'react-router-dom';
//필요한 API
import { TooltipComponent  } from '@syncfusion/ej2-react-popups';

import {FiSettings} from "react-icons/fi"

import {Calender,
  ColorPicker,
  Customer,
  Ecommerce,
  Editors,
  Employee,
  Kanban,
  Order,
  Area,
  Bar,
  ColorMapping,
  Financial,
  LineChart,
  Pie,
  Stack,
  Pyramid} from "./Pages/index"

import {Navbar  , Sidebar, ThemeSettings ,} from "./component"
import {useStateContext} from "./contexts/ContextProvider"

function App() {
  const {activemenu , setthemeSetting , themeSetting , currentColor , currentMode} = useStateContext();
 

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <BrowserRouter>
        <div className=' flex  relative dark:bg-main-dark-bg '>
          <div className='fixed right-4 bottom-4 overflow-x-visible'  style={{zIndex : '100'}}>
            <TooltipComponent content={"Sett"} position="top">
              <button  style={{backgroundColor:currentColor,borderRadius:"50%"}} onClick={()=>{setthemeSetting(current=>{return !current})}} type='button' className='text-3xl p-3 hover:drop-shadow-xl  hover:bg-light-gray'>
                <FiSettings className="text-white"/>
              </button> 
            </TooltipComponent>
          </div>
        </div>
        {activemenu ? <div className='absolute  left-0 top-0 w-72 overflow-auto dark:bg-secondary-dark-bg bg-white'>
          <Sidebar/> 
        </div> : <div className=' overflow-auto md:overflow-auto hidden w-0 dark:bg-secondary-dark-bg '>
          <Sidebar/> 
        </div>  
        }
        <div className={`w-full bg-cyan-200   overflow-scroll main-bg min-h-screen  ${activemenu ? "md:ml-72": "flex-2"}`}>
            <div className='fixed md:static overflow-scroll dark:bg-main-dark-bg navbar w-full '>
            <Navbar/>
            <div className='right-0 top-0 overflow-scroll'>
            {themeSetting ? <ThemeSettings/> : ""} 
              <Routes>
                
                <Route path="/"  element={<Ecommerce/>}/>
                <Route path="/ecommerce" element={<Ecommerce/>}/>

                <Route path="/orders" element={<Order/>}/>
                <Route path="/employees" element={<Employee/>}/>
                <Route path="/customers" element={<Customer/>} />

                <Route path="/kanban" element={<Kanban/>}/>
                <Route path="/editor" element={<Editors/>}/>
                <Route path="/calendar" element={<Calender/>}/>
                <Route path="/color-picker" element={<ColorPicker/>}/>
              


                <Route path="/line" element={<LineChart/>} />
                <Route path="/area" element={<Area/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/pie" element={<Pie/>} />
                <Route path="/financial" element={<Financial/>} />
                <Route path="/color-mapping" element={<ColorMapping/>} />
                <Route path="/pyramid" element={<Pyramid/>} />
                <Route path="/stacked" element={<Stack/>} />
              </Routes>
            </div>
          </div>
        </div>
        
      


      </BrowserRouter>
    </div>
  );
}

export default App;
