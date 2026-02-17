import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from './ui/moving-border'

function HeroSection() {
  return (
    <div className="h-auto md:h-160 w-full rounded-md flex flex-col items-center justify-center relative mx-auto py-10 md:py-0">

      {/* Spotlight is fixed-position internally, z-index must be below navbar */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60 z-0"
        fill="white"
      />

      <div className="p-4 relative z-[10] w-full text-center">
        <h1 className="mt-10 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          accusantium beatae, ipsum officia officiis deserunt doloremque
          praesentium distinctio quisquam doloribus qui aliquam adipisci ducimus.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Explore Courses
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection