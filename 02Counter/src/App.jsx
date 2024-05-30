import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

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
      <button onClick={add} className='bg-green-400 p-4'>Add Value : {count}</button>
      <button onClick={sub} className='bg-red-400 p-4'>Decrease value : {count}</button>
      <footer className='bg-black font-bold rounded-xl mt-8 text-white'>{count}</footer>
      <div className='flex flex-wrap gap-10'>
      <Card heading="holy moly" explore="Read More"/>
      <Card />
      </div>
    </>
  )
}

export default App
