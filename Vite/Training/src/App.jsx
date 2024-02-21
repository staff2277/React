import react,{ useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Body from './components/Body'
import './App.css'


function App() {
  

  return (
    <div className='App_container'>
      <Navbar />
      
        
          <Sidebar />
        
        
          <Body />
        
      
    </div>
    
  )
}

export default App
