import { useState } from 'react'
import './App.css'
import Navbar from '../components/Navbar'
import SignIn from '../components/SignIn'
import NavBottom from '../components/NavBottom'

function App() {

  return (
    <div className='flex justify-center items-center'>
      <div className='w-[27%]'>
      <Navbar/>
      <SignIn/>
      <NavBottom/>
      </div>
      
    </div>
  )
}

export default App
