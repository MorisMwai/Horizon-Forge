import React from 'react'
import { LampDemo } from './ui/Lamp'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <div className='py-20' id='certifications'>
      <div className='-top-20 h-[55vh] max-lg:-mt-5 overflow-hidden'>
        <LampDemo />
      </div>
        

        {/* Experience cards */}
        <div className='w-full top-[25%] translate-y-[-25%] grid lg:grid-cols-4 grid-cols-1 gap-10 max-lg:mt-5'>
          {workExperience.map((card) => (
            <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
    </div>
  )
}

export default Experience