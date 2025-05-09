import React from 'react'
import { LampDemo } from './ui/Lamp'
import { Button } from './ui/MovingBorder'
import { workExperience } from '@/data'
import { TracingBeam } from './ui/tracing-beam'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { Timeline } from './ui/timeline'

const Experience = () => {
  return (
    <div 
        className='py-10 relatve w-full' 
        id='experience'
    >
      <div className='relative z-10 mt-[-2rem]'>
        <LampDemo />
      </div>
        

        {/* Experience cards */}
        {/* <div className='w-full top-[25%] translate-y-[-25%] grid lg:grid-cols-4 grid-cols-1 gap-10 max-lg:mt-5'>
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
        </div> */}

        {/* Tracing beam + experience cards */}
        {/* <TracingBeam className='mt-[-10rem]'>
          <div className='flex flex-col gap-10 px-4'>
            {workExperience.map((card) => (
              <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                <div className='flex lg:flex-col flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
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
        </TracingBeam> */}

        <div className="relative z-20 mt-[-15rem]">
          <Timeline
            data={workExperience.map((item) => ({
              title: item.year,
              content: (
                // <div className="text-white text-sm md:text-base leading-relaxed">
                //   {item.thumbnail && (
                //       <div className="mb-4">
                //       <img
                //         src={item.thumbnail}
                //         alt={item.title}
                //         className="w-20 h-20 rounded-md object-cover mb-2 border border-purple-500/30"
                //       />
                //     </div>
                //   )}
                //   <h4 className='text-xl font-semibold text-purple-300 mb-1'>
                //     {item.title}
                //   </h4>
                //   <p>{item.desc}</p>
                // </div>

                <Button
                key={item.id}
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius='1.75rem'
                className='flex-1 text-white border-neutral-200 dark:border-slate-800'>
                  <div className='flex lg:flex-col flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={item.thumbnail} alt={item.thumbnail} className='lg:w-32 md:w-20 w-16' />
                    <div className='lg:ms-5'>
                      <h1 className='text-start text-xl md:text-2xl font-bold'>
                        {item.title}
                      </h1>
                      <p className='text-start text-white-100 mt-3 font-semibold'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Button>
              ),
            }))}
          />
        </div>
    </div>
  )
}

export default Experience