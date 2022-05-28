
import './App.css';
//필요한 API
import { TooltipComponent  } from '@syncfusion/ej2-react-popups';
import { useEffect } from 'react';
import {FiSettings} from "react-icons/fi"
import { BrowserRouter } from 'react-router-dom';

function App() {
  const activemenu = true;
  return (
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
      {activemenu ? <div className='w-64 sidebar dark:secondary-dark-bg bg-white'>
        Sidebar 
      </div> : <div className='dark:secondary-dark-bg bg-white w-0'>
        SideBar w - 0   
      </div>}
      <div className={`dark:main-dark-bg main-bg min-h-screen w-full ${activemenu ? "md:ml-72": "flex-2"}`}>

      </div>

     


    </BrowserRouter>
  );
}

export default App;
