import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fullname, setFullName] = useState({
    fname: '',
    lname: '',
  })
  const [iscopied,setIsCopied] = useState(false);
  const handle = (e) => {
    
    const {name,value} = e.target;

    setFullName((prev) => {
      return{
       ...prev,
        [name] : value,
      }
    })
  }

  const display = (e)=>{
    e.preventDefault();
    // alert("form submitted");
    setIsCopied(true)
    setTimeout(()=>{
      setIsCopied(false);
    },2000);
  }
  return (
    <>
    <div style={{backgroundColor:"black"}}>
    {iscopied && <p style={{backgroundColor:"red"}}>{fullname.fname}{fullname.lname}</p>}
    </div>
    <form onSubmit={display}>
      <input 
        type = "text"
        name = "fname"
        placeholder = "Enter your name"
        onChange={handle}
        value={fullname.fname}
      />
      <input 
        type = "text"
        name = "lname"
        placeholder = "Enter your name"
        onChange={handle}
        value={fullname.lname}
      />
      <button type="submit">submit </button>
      </form>
    
    </>
  )
}

export default App
