import React, { useRef, useState } from 'react'

const Hooks3 = () => {
  const[count,setCount]=useState(0);
  const countRef=useRef(0);
  const incrementState=()=>setCount(count+1);
  const incrementRef=()=>{
    countRef.current+=1;
    console.log("refCount:",countRef.current);
  };


  return (
    <>
      <h1>useref  vs usestate</h1>
      <div>
        <h2>usestate:</h2>
        <p>state count:{count}</p>
        <button onClick={incrementState}>Increament state</button>
      </div>

      <div>
        <h2>useref:</h2>
        <p>ref count(check console):{countRef.current}</p>
        <button onClick={incrementRef}>Increament ref</button>

      </div>


    </>
  )
}

export default Hooks3