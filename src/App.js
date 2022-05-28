
import './App.css';
//필요한 API
import { TooltipComponent  } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
import {FiSettings} from "react-icons/fi"
import { BrowserRouter  , Route , Routes} from 'react-router-dom';
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

import {Navbar , Footer , Sidebar ,ThemeSettings} from "./component"

function App() {
  const activemenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{zIndex : '100'}}>
            <TooltipComponent content={"Sett"} position="top">
              <button style={{backgroundColor:"blue",borderRadius:"50%"}} type='button' className='text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray'>
                <FiSettings/>
              </button> 
            </TooltipComponent>
          </div>
        </div>
        {activemenu ? <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
          <Sidebar/> 
        </div> : <div className='hidden w-0 dark:bg-secondary-dark-bg '>
          <Sidebar/> 
        </div>  
        }
        <div className={`dark:main-dark-bg main-bg min-h-screen w-full ${activemenu ? "md:ml-72": "flex-2"}`}>
          <div className='fixed md:static  dark:bg-main-dark-bg navbar w-full '>
            <Navbar/>
          </div>
          <div className='absolute right-0 top-0'>
            <Routes>
              <Route path="/"  element={<Ecommerce/>}/>
              <Route path="/ecommerce" element={<Ecommerce/>}/>

              <Route path="/orders" element={<Order/>}/>
              <Route path="/employees" element={<Employee/>}/>
              <Route path="/customers" element={<Customer/>} />

              <Route path="/kanban" element={<Kanban/>}/>
              <Route path="/editor" element={<Editors/>}/>
              <Route path="/calender" element={<Calender/>}/>
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
        
      


      </BrowserRouter>
    </div>
  );
}

export default App;
