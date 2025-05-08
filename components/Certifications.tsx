import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { certifications } from '@/data'
import { companies } from '@/data'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Certifications = () => {
  return (
    <div className='py-20' id='certifications'>
        <h1 className='top-[50%] translate-y-[-50%] heading'>
            Proven Expertise: {' '}
            <span className='text-purple'>Certifications</span>
        </h1>

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
                            className='md:w-20 w-10'
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