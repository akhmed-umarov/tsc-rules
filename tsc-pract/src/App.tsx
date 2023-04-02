import { useState } from 'react'
import './App.css'
import Modal from './modal/modal';

function App() {
  const [count, setCount] = useState(0)
  const [active , setActive] = useState(false);

  const toggleActive = (bol?:boolean)=>{ 
    if (bol === true) { 
       setActive(()=>true)
    } else {
      setActive(()=>!active)
    }
  }

  return (
    <div className=' text-red-400'>
      <p>Hello world!</p>
      <h1 onClick={()=>{toggleActive(true)}}>Включить модалку</h1>
      <Modal active={active} setActive={toggleActive}/>
    </div>
  )
}

export default App
