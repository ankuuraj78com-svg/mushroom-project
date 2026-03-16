import React, { useEffect, useState } from 'react'

const Hook2 = () => {

    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((res)=>res.json())
      .then((data) => setData(data));
    },[])
  return (
    <>
    <h1>use of useeffect hook.</h1>
    <h1>POSTS</h1>
    <ul>
        {/* {data.map((post)=>( */}
            {/* <li key={post.id}>{post.title}</li>
        ))} */}
    </ul>
    
  
    </>

  )
}

export default Hook2