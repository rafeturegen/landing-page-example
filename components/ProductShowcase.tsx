import React from 'react'
import productImage from "@/public/product-image.png"
import Image from 'next/image'
import tubeImage from "@/public/tube.png"
import pyramidImage from "@/public/pyramid.png"


export default function ProductShowcase() {
  return (
    <section>
        <div className='max-w-7xl px-6 mx-auto py-28'>
            <div className='flex flex-col items-center gap-12'>
              <p className='border border-black/10 w-fit py-1 px-3 rounded-lg font-bold'>Boost your productivity</p>
              <h1 className='text-4xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text text-center font-bold tracking-tighter'>A more effective way to track progress</h1>
              <p className='text-center text-xl text-[#010D3E] tracking-tight leading-7'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
              <div className='md:h-[648px] md:flex-1 relative'>
                  <Image
                  src={productImage}
                  alt='product image'
                  className=''
                  />
                  <Image
                  src={tubeImage}
                  alt='product image'
                  className='hidden md:absolute md:block -bottom-40 -left-12'
                  width={220}
                  height={220}
                  />
                  <Image
                  src={pyramidImage}
                  alt='product image'
                  className='hidden md:absolute md:block'
                    width={220}
                    height={220}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
