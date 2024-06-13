import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
import { companies } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Certifications = () => {
  return (
    <div className='py-20' id='certifications'>
        <h1 className='heading'>
            Proven Expertise: {' '}
            <span className='text-purple'>Certifications</span>
        </h1>

        {/* Certification cards */}
        <div className='flex flex-col items-center max-lg:mt-10'>
            <InfiniteMovingCards 
                items={testimonials}
                direction='right'
                speed='slow'
            />

            <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id, img, name, nameImg}) => (
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                        <img 
                            src={img} 
                            alt={name}
                            className='md:w-10 w-5'
                         />
                        <img 
                            src={nameImg} 
                            alt={name}
                            className='md:w-24 w-20'
                         />
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Certifications