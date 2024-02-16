import React from 'react'

import {Brand, CTA, Navbar } from './components' 
import {Footer, Blog, Possibility, WhatGPT3, Header, Features } from "./containers"
import "./App.css"


const App = () => {
  return (
    <div className='App'>
      <div className='gradient-bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App