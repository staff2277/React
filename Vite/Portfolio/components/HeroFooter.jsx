import React from 'react'
import Lottie from 'lottie-react'
import arrow from "../animations/arrow1.json"

const HeroFooter = () => {
  return (
    <div className='flex items-center'>
        <div className='bg-[#f0ede4] rounded-3xl'><Lottie animationData={arrow} className='w-[5rem]'  loop={true} /></div>
        <p className=' w-[50%] p-5 rounded-full text-center'>"I am a Front-end developer passionate about crafting user-friendly, responsive web experiences."</p>
    </div>
  )
}

export default HeroFooter