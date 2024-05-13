import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between pt-10 mx-[7rem]  text-white '>
        <div className='text-[2rem] font-medium whitespace-nowrap'>
          EV-olution
        </div>
        <ul className='flex gap-20 items-center cursor-pointer'> 
          <li>Home</li>
          <li>Explore</li>
          <li>About</li>
          <li className='rounded-3xl px-8 py-3 bg-white text-black'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar