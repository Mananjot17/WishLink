import React from 'react'
import { motion } from 'framer-motion'

const AboutUsBanner1 = () => {
  const imageVariants = {
    hidden: { opacity: 0, y: 50 }, // Starts invisible and 50px below
    visible: { opacity: 1, y: 0 }, // Slides up and becomes visible
  }

  return (
    <div className='w-full h-full min-h-[65vh] sm:min-h-[100vh] px-5 py-8 md:px-10 md:py-12 bg-[#f1e5d2] relative'>
        <div className='mx-auto w-full max-w-5xl'>
          <div className='text-center text-white'>
            <div className='mx-auto w-72 sm:w-full max-w-3xl absolute z-20 left-[50%] translate-x-[-50%] top-20 sm:top-28 '>
              <h1 className='text-4xl md:text-7xl font-bold '>
                Revolutionizing the
                way the world shops!
              </h1>
            </div>
            
            <div className='w-full pt-4'></div>

            <div className='flex '>
              <motion.div className='z-20 absolute w-[145px] h-[166px] top-56 left-4 sm:w-[317px] sm:h-[364px] sm:top-[17.5rem] sm:left-[22rem]'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5,  }}
              variants={{
                hidden: { opacity: 0, x:100, y: 20 },
                visible: { opacity: 1, x:0, y: 0 },
              }}
              
              >
                <motion.img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66d55ab54ec87ce9c3c319ab_Group%2036095%20(4).png" alt=""  className=' '/>
              </motion.div>

              <motion.div
              // className='absolute'
              className="z-30 absolute w-[218px] h-[237px] top-56 left-[72px] sm:w-[390px] sm:h-[424px] sm:top-[17.5rem] sm:left-[35rem]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1, duration: 0.5,  }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}

            >
              <motion.img
                src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66cfbab288e2f96eab2359d0_Group%201116600817%20(2).png"
                alt=""
                className=''
              />
            </motion.div>

              <motion.div className='z-20 absolute w-[145px] h-[166px] top-56 right-6  sm:w-[317px] sm:h-[364px] sm:top-[17.5rem] sm:right-[22.5rem]'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5,  }}
              variants={{
                hidden: { opacity: 0, x:-100, y: 20 },
                visible: { opacity: 1, x:0, y: 0 },
              }}
              
              > 
                <motion.img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66c14c6352127360d36ac706_Group%2036094%20(2).webp" alt="" className='w-full h-full object-contain'/>
              </motion.div>
            </div>
          </div>
          <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a82a30b9a3c3c3f8318e93_Group%201116600576%20(1).avif" alt="" className='z-0 w-full h-full max-h-[300px] md:max-h-[595px] absolute top-0 left-0 right-0  object-cover sm:object-fill '/>
        </div>
    </div>
  )
}

export default AboutUsBanner1