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
  Line,
  Pie,
  Stack,
  Pyramid} from "./Pages/index"

import {Navbar  , Sidebar ,} from "./component"
import {useStateContext} from "./contexts/ContextProvider"

function App() {
  const {activemenu} = useStateContext();
 

  return (
    <div>
      <BrowserRouter>
        <div className=' flex  relative dark:bg-main-dark-bg '>
          <div className='fixed  right-4 bottom-4 overflow-auto'  style={{zIndex : '100'}}>
            <TooltipComponent content={"Sett"} position="top">
              <button style={{backgroundColor:"blue",borderRadius:"50%"}} type='button' className='text-3xl p-3 hover:drop-shadow-xl  hover:bg-light-gray'>
                <FiSettings className="text-white"/>
              </button> 
            </TooltipComponent>
          </div>
        </div>
        {activemenu ? <div className='absolute top-0 w-72  sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar/> 
        </div> : <div className='md:overflow-x-auto hidden w-0 dark:bg-secondary-dark-bg '>
          <Sidebar/> 
        </div>  
        }
        <div className={`w-full bg-cyan-200 dark:main-dark-bg main-bg min-h-screen  ${activemenu ? "md:ml-72": "flex-2"}`}>
            <div className='fixed md:static overflow-visible dark:bg-main-dark-bg navbar w-full '>
            <Navbar/>
            <div className='right-0 top-0'>
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
              


                <Route path="/line" element={<Line/>} />
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
