import React from 'react'
import acmeLogo from "@/public/logo-acme.png"
import quantumLego from "@/public/logo-quantum.png"
import echoLogo from "@/public/logo-echo.png"
import celestialLogo from "@/public/logo-celestial.png"
import pulseLogo from "@/public/logo-pulse.png"
import apexLogo from "@/public/logo-apex.png"
import Image from 'next/image'


export default function LogoTicker() {
  return (
    <section>
        <div className='max-w-7xl px-6 py-8 mx-auto bg-white'>
          <div className='flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
            <div className='flex gap-14 flex-none'>
              <Image 
              src={acmeLogo}
              alt='acme logo'
              className='logo-ticker-image'
              />
              <Image 
              src={quantumLego}
              alt='quantum logo'
              className='logo-ticker-image'
              />
              <Image 
              src={echoLogo}
              alt='echo logo'
              className='logo-ticker-image'
              />
              <Image 
              src={celestialLogo}
              alt='celestial logo'
              className='logo-ticker-image'
              />
              <Image 
              src={pulseLogo}
              alt='pulse logo'
              className='logo-ticker-image'
              />
              <Image 
              src={apexLogo}
              alt='apex logo'
              className='logo-ticker-image'
              />
            </div>
          </div>
        </div>
    </section>
  )
}
