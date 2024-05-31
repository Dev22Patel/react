import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import But from './buttons'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <div className='w-full h-screen duration-200 '
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full' >
          <div onClick={() => setcolor("red")}>
            <But color="red" textcolor="white"/>
          </div>
          <div onClick={() => setcolor("blue")}>        
              <But color="blue" textcolor="white"/>
          </div>
          <div onClick={() => setcolor("green")}>        
              <But color="green" textcolor="white"/>
          </div>
          <div onClick={() => setcolor("yellow")}>
              <But color="yellow" textcolor="black"/>
          </div>
          <div onClick={() => setcolor("black")}>
            <But color="default" textcolor="black"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
