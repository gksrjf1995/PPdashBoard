import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../component';


const chage = (value) => {
  document.getElementById("preview").style.backgroundColor = value.currentValue.hex;
}

const ColorPicker = () => {
  
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header title={"ColorPicker"} category={"App"}/>
      <div className='text-center'>
        <div id="preview"/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallert</p>
            <ColorPickerComponent change={chage} id="inline-pallete" modeSwitcher={false} inline showButtons={false} mode="Palette"/> 
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallert</p>
            <ColorPickerComponent change={chage} id="inline-pallete" modeSwitcher={false} inline showButtons={false} mode="Picker"/> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorPicker