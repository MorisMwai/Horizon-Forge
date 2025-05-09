import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { certifications } from '@/data'
import { companies } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Certifications = () => {
  return (
    <div className='py-20 -mt-10' id='certifications'>
        <h1 className='text-center text-4xl md:text-5xl font-bold tracking-tight heading top-[50%] translate-y-[-50%]'>
            Proven Expertise: {' '}
            <span className='text-purple'>Certifications</span>
        </h1>
        <p className="text-center text-neutral-400 max-w-xl mx-auto mt-4 text-sm">
            These certifications validate hands-on expertise in automation, cloud, and software engineering.
        </p>


        {/* Certification cards */}
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards 
                items={certifications}
                direction='right'
                speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                            src={img} 
                            alt={name}
                            className='md:w-20 w-10 grayscale hover:grayscale-0 transition-all duration-300'
                         />
                        {/* <img 
                            src={nameImg} 
                            alt={name}
                            className='md:w-24 w-20'
                         /> */}
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Certifications