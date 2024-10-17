import React from 'react'
import { useState } from 'react';

const App = () => {
  const [countState, setCountState] = useState(0);

  return (
    <>
    <div className='pl-5'>
      <button className='p-7 text-3xl border-2 bg-slate-400 mr-2' onClick={() => setCountState((preValue) => preValue + 1)}>+</button>
      <span className='text-3xl'>{countState}</span>
      <button className='p-7 text-3xl border-2 bg-slate-400 ml-2' onClick={() => setCountState((preValue) => preValue - 1)}>-</button>
    </div>
    </>
  )
}

export default App; 