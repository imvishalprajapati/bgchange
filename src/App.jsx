import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
     
    <>
      <div className='w-full h-screen duration-200 bg-green-500 flex justify-center' style={{backgroundColor:color}}>
      {color && <p className='font-bold	font-weight-600 text-center'>its {color}</p>}
        <div className=' fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-black text-white px-3 py-2 rounded-3xl'>
            <button className='px-4 rounded-3xl' style={{backgroundColor:'maroon'}} onClick={()=> setColor('maroon')}></button>
            <button className='px-4 py-2 outline-none rounded-2xl'  style={{backgroundColor:'grey'}}onClick={()=> setColor('grey')}></button>
            <button className='px-4 rounded-3xl' style={{backgroundColor:'#332D95'}} onClick={()=> setColor('#332D95')}></button>
            <button className='px-4 py-2 outline-none rounded-2xl'  style={{backgroundColor:'#19637E'}}onClick={()=> setColor('#19637E')}></button>
              
          </div>

        </div>

      </div>
    </>
  )
}

export default App
/*Written by Vishal Prajapati */