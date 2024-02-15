"use client";
import next from 'next';
import React from 'react'
import CustomButton from './CustomButton'
import Image from "next/image";
function Hero() {
    const handleScroll= () =>{
      const nextSection = document.getElementById("discover");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                find , book , or rent a car -quickly and easily!
            </h1>
            <p className='hero__subtitle'>
                streamline your car rental experience with our effortless booking process. 
            </p>
            <CustomButton 
            title='explore cars' 
            containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}/>
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image src="/hero.png" alt="hero" fill className="object-contain"/>
          </div>
          <div className='hero__image-overlay'/>
          </div>
        </div>
    
  )
}

export default Hero