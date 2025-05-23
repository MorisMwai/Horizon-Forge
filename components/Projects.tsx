import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { FaEye, FaFingerprint, FaLocationArrow } from 'react-icons/fa6'

const Projects = () => {
  return (
    <div className='py-20 mt-20' id='projects'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple'>recent projects</span>
        </h1>

        {/* Project cards */}
        <div className='flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-1 mt-2'>
          {projects.map(({ id, title, des, img, iconLists, link }) => (
            <div key={id} className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[500px] w-[80vh]'>
              
              {/* Render 3D Pin Component here */}
              <PinContainer title="View" href={link}>
                {/* Children properties */}
                <div className='relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-2'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src='/bg.png' alt='bg-img' />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className='z-10 absolute bottom-0'
                  />
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                  {title}
                </h1>

                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                  {des}
                </p>

                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) =>(
                      <div key={icon} className='border-white/[0.2] rounded-full bg-black lg:w-10 lg-h-10 w-8 h-8 flex justify-center items-center' style={{
                        transform: `translateX(-${5 * index * 2}px)`}}>
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>

                  <div className='flex justify-center items-center'>
                    <a
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex justify-center items-center hover:underline hover:text-purple/80 transition duration-300'
                    >
                      <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Code</p>
                      <FaEye className='ms-3' color='#CBACF9' />
                    </a>
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Projects