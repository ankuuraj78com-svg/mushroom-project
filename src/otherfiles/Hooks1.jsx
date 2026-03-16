import React, { useState } from 'react'
import Hook2 from './Hook2';
import Hooks3 from './Hooks3';

const Hooks1 = () => {
    const[count,setCount]=useState(0);
    const[input,setInput]=useState("");

  return (
    
    <>
      <h1>YOU HAVE CLICKED{count}times.</h1>
      <button onClick={()=>setCount(count+1)}>Increase</button><br></br>
      <input 
      type='text'
      placeholder='type something'
      value={input}
      onChange={(e)=>setInput(e.target.value)}/>
      <p>you have typed:{input}</p><br></br><br></br>
      <Hook2/>
      <Hooks3/>
    </>
  )
}

export default Hooks1