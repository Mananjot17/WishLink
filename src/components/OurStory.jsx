import React from 'react'
import {Link} from "react-router-dom"
import { motion } from 'framer-motion'
const OurStory = () => {
  return (

    <section className="mb-0 pb-0">
        <div className='w-full py-12 px-5 md:py-20 md:px-10 bg-[#F0E4D2]'>
        <div className='mx-auto max-w-7xl w-full'>
            <div className='flex flex-col justify-start items-center gap-8'>
               
                <motion.div className='self-center p-1 bg-[#eda86e] border rounded-md'
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5,  }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              
              >
                    <h3 className='text-2xl md:text-4xl text-black font-bold'>Our Story</h3>
                </motion.div>
           

                <div className='flex flex-col-reverse md:flex-col lg:flex-row h-full gap-8 justify-between place-items-center'>
                    <div className='flex flex-col justify-start items-center h-80 w-full sm:h-auto md:w-4/5 lg:w-2/3 gap-3'>
                        <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66d55201cefa59834c2a1e1d_Group%201116600572%20(3).png" alt="" />

                        <div className='flex gap-4 justify-center items-center w-full'>
                            <Link className="text-[#de5b11] text-xl font-semibold underline" to="https://www.linkedin.com/in/divyansh-ameta-9b8430103/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                Divyansh Ameta
                            </Link>

                            <Link className="text-[#de5b11] text-xl font-semibold underline" to="https://www.linkedin.com/in/guptashaurya/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                            Shaurya Gupta
                            </Link>

                            <Link className="text-[#de5b11] text-xl font-semibold underline" to="https://www.linkedin.com/in/chandan-yadav-1011/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                            Chandan Yadav
                            </Link>
                        </div>
                    </div>

                    <div className='flex flex-col items-center justify-center md:items-start md:justify-start'>
                        <div className='w-full max-w-lg '>
                            <p className='text-black text-lg text-center sm:text-xl font-medium '>
                            We observed how people shop was changing! With fashion hauls, makeup hacks, DIY decor videos swamping social media platforms, and 'link please' comments on these videos increasing with every passing day; it was clear to us that users were relying more and more on creators and their content to shop.<br /><br />
                            <br />
                            Unfortunately, it was extremely difficult for consumers to shop from Insta/Youtube after they'd seen creators' content. And even more difficult for creators to share these recommendations with their audience and monetise.
                            <br /><br />
                            Problems were plenty, solutions scarce! And so, we decided to take matters into our own hands and founded Wishlink in 2022.
                            
                            Today Wishlink has been able to create massive impact, enabling 25M+ users to shop better every month, 15k+ creators to monetise their content. And, we're just getting started!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <img className="w-1/5 top-auto right-0 bottom-1 left-auto absolute" src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a9ac32ce7ca67693b59e9c_Gacrux%20(7).png" alt="" />
    </section>
    
  )
}

export default OurStory