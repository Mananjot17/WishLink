import React from 'react'
import { motion } from 'framer-motion'
const BrandHeader = () => {
  return (
    <main className=' h-full w-full max-h-[85vh]  sm:min-h-screen bg-gradient-to-br from-[#e69419] via-[#eb7a14] to-[#f43f06] relative overflow-hidden 
'>
      <motion.div className='w-full h-screen flex justify-center md:justify-start items-start  text-white overflow-x-hidden'
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.5 }}
       transition={{ delay: 0.3, duration: 0.5,  }}
       variants={{
         hidden: { opacity: 0,  y: 50 },
         visible: { opacity: 1,  y: 0 },
       }}
       
      >
      
      <div className='w-[36rem] h-96 flex flex-col justify-center items-center  md:mt-24 mx-10  md:ml-24 md:mr-0 text-center md:text-left'>
      
        <h1 className=' text-[40px] leading-10   md:text-5xl  xl:text-7xl font-bold'>Unlock next level growth with Creators</h1>
        <h2 className='text-lg md:text-xl mt-4 md:mt-8'>Wishlink is your new awareness and sales engine driven by Creators who genuinely love your Brand</h2>
      </div>
      <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66d2b637ea785d53b3a7668f_Group%201116600697%20(2)%201-p-1600.png" alt="" className=' w-full scale-x-150   sm:w-[90%] h-[55%] sm:h-[60%]  xl:h-full absolute bottom-0 sm:left-auto sm:right-[-6%]  right-0 -translate-x-16 sm:translate-x-0 sm:scale-x-100   ' />

      </motion.div>
    </main>
  )
}

export default BrandHeader