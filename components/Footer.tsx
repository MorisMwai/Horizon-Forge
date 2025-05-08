import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[40px] md:mb-7' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src="/footer-grid.svg" 
                alt="grid"
                className='w-full h-full opacity-50'
             />
        </div>

        <div className='flex flex-col items-center top-[30%] translate-y-[-30%]'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to Elevate <span className='text-purple'>Your Processes</span> with Intelligent Automation?
            </h1>
            <p className='text-white-200 md:mt-10 my-5 text-center'>Contact me to discover how intelligent automation and cutting-edge software solutions can transform your business.</p>

            <a href="mailto:mwaimoris@gmail.com">
                <MagicButton
                    title='Get in Touch'
                    icon={<FaLocationArrow />}
                    position='right' />
            </a>
        </div>

        <div className='flex mt-13 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2025 Moris</p>

            <div className='flex items-center md:gap-3 gap-6 mt-2'>
                {socialMedia.map((profile) => (
                    <a
                        key={profile.id}
                        href={profile.link}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <div key={profile.id} className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition-all duration-300 hover:scale-110 hover:border-purple'>
                            <img src={profile.img} alt={profile.id} width={20} height={20} />
                        </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer