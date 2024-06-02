import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [fullname, setFullName] = useState({
    fname: '',
    lname: '',
    pass:'',
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
    },6000);
  }

  return (
    <>
    <div style={{backgroundColor:"black",borderRadius:"30px",boxShadow:"20px"}}>
        {iscopied && <p style={{backgroundColor:"black", color:"white"}}>
        form submitted
        <br/>
        {fullname.fname}{fullname.lname}<br/>{fullname.pass}</p>}
    </div>
    <img src={reactLogo} alt="react logo" />
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
      <br/>
      <input 
        type = "password"
        name = "pass"
        placeholder = "Enter your pass"
        onChange={handle}
        value={fullname.pass}
      />
      <button type="submit">submit </button>
      </form>
    
    </>
  )
}

export default App
