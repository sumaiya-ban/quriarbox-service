import React, { useState } from 'react'

const Practice = () => {
  let[number,setNumber]=useState(1);
  let handleClick = () =>{
    setNumber((number=number+1));
  }
  return (
    <div>
      <div className='container text-center'>
        <h1 className='font-bold '>increment {number}</h1>
        <button onClick={handleClick} className='bg-red-500 p-5'>click</button>
      </div>
    </div>
  )
}

export default Practice
