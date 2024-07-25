import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import CogImage from "@/public/cog.png"
import Image from 'next/image'
import cylinderImage from "@/public/cylinder.png"
import noodleImage from "@/public/noodle.png"

export default function Hero() {
  return (
    <section className='max-w-7xl pt-8 pb-20 md:pt-5 md:pb-10 px-6 mx-auto bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE)] overflow-x-clip'>
        <div className='md:flex items-center xl:ml-36'>
            <div className='md:w-[524px]'>
                <p className='py-3 border border-[#222]/10 rounded-lg tracking-tight inline-flex w-fit px-3 mb-2'>
                    Version 2.0 is here
                </p>
                <h1 className='tracking-tighter font-bold text-5xl md:text-7xl bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-3 py-3'>
                    Pathway to productivity
                </h1>
                <p className='text-xl text-[#010D3E] tracking-tight mt-3 py-1'>
                    Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your success.
                </p>
                <div className='flex gap-2 mt-4'>
                    <button 
                    className="btn btn-primary"
                    >
                        Get for free
                    </button>
                    <div className='flex items-center'>
                        <button className='btn btn-text !pr-1'>
                            Learn More
                        </button>
                        <FaArrowRight className='h-3 w-4'/>
                    </div> 
                </div>
            </div>
            <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative '>
                <Image 
                src={CogImage} 
                alt='cog' 
                className='md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 xl:left-0'
                />
                <Image
                src={cylinderImage}
                alt='cylinder image'
                width={220}
                height={220}
                className='hidden md:block -top-8 -left-32 md:absolute'
                />
                <Image
                src={noodleImage}
                alt='noodle image'
                width={220}
                height={220}
                className='hidden xl:block top-[524px] left-[448px] md:absolute rotate-[30deg]'
                />
            </div>
        </div>
    </section>
  )
}
