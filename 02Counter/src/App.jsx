import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const add = () =>{
    if(count <20)
    setCount(count + 1);
  }
  const sub = () =>{
    if(count > 0)
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={add}>Add Value : {count}</button>
      <button onClick={sub}>Decrease value : {count}</button>
      <footer className='bg-black font-bold rounded-xl mt-8 text-white'>{count}</footer>
    </>
  )
}

export default App
