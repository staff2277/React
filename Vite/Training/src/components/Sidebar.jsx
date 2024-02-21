import React from 'react'

const Sidebar = () => {
    function handleClick(){}
  return (
    <div className="sidebarContainer">
        <button className="sidebutton" onClick={handleClick}>click</button>
        <h1>sidebar</h1>
    </div>
  )
}

export default Sidebar