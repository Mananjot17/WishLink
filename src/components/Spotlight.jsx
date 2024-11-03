import React from 'react'
import { Link } from 'react-router-dom'


const Spotlight = () => {
  return (
    <section className='relative bg-[#F0E4D2]'>
        <div className='px-5 md:px-10 w-full'>
            <div className='w-full pt-2 sm:pt-14 md:pt-20 lg:pt-24'></div>

            <div className='w-full max-w-7xl mx-auto'>
                <div className='relative'>
                    <div className='overflow-hidden'>
                        <div className='grid grid-cols-auto-fill gap-4 text-center w-full'>
                            <h2 className='text-[2rem] md:text-5xl font-bold text-black'>
                            In the spotlight!
                            </h2>
                        </div>

                    </div>

                    <div className='pt-6 md:pt-10 lg:pt-12'></div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 sm:gap-x-4 sm:gap-y-4 md:gap-x-[1.875rem] md:gap-y-[1.875rem]'>
                        <div className='rounded-2xl md:rounded-[2rem] relative'>
                            <Link to="https://inc42.com/buzz/wishlink-raises-7-mn-to-help-social-media-creators-grow-brand-engagement/" className='w-full h-full overflow-hidden '>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a81834aacbdda12e004384_Mask%20group%20(2).avif" alt="" className='object-cover'/>
                                <div className='p-2 rounded-br-[1rem] rounded-bl-[1rem] md:rounded-br-[2rem] md:rounded-bl-[2rem] absolute sm:px-4 lg:pt-4 lg:pr-8 lg:pb-8 lg:pl-6 top-auto right-0 bottom-0 left-0 bg-orange-500'>
                                    <div className='text-lg sm:text-base md:text-lg font-bold text-white'>
                                    Wishlink raises $7 Mn to help Creators grow Brand engagement
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className='rounded-2xl md:rounded-[2rem] relative'>
                            <Link to="https://entrackr.com/2024/02/exclusive-wishlink-raises-7-mn-from-fundamentum-and-elevation/" className='w-full h-full overflow-hidden '>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a818338f9ce0c162003c40_Mask%20group%20(3).avif" alt="" className='object-cover'/>
                                <div className='p-2 rounded-br-[1rem] rounded-bl-[1rem] md:rounded-br-[2rem] md:rounded-bl-[2rem] absolute sm:px-4 lg:pt-4 lg:pr-8 lg:pb-8 lg:pl-6 top-auto right-0 bottom-0 left-0 bg-orange-500'>
                                    <div className='text-lg sm:text-base md:text-lg font-bold text-white'>
                                    Wishlink raises $7 Mn from fundamentum and elevation
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className='rounded-2xl md:rounded-[2rem] relative'>
                            <Link to="https://economictimes.indiatimes.com/tech/funding/creator-focussed-startup-wishlink-raises-7-million-from-fundamentum-elevation-capital/articleshow/107463706.cms?from=mdr" className='w-full h-full overflow-hidden '>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a818346569cfdd77ef6dae_Mask%20group%20(4).avif" alt="" className='object-cover'/>
                                <div className='p-2 rounded-br-[1rem] rounded-bl-[1rem] md:rounded-br-[2rem] md:rounded-bl-[2rem] absolute sm:px-4 lg:pt-4 lg:pr-8 lg:pb-8 lg:pl-6 top-auto right-0 bottom-0 left-0 bg-orange-500'>
                                    <div className='text-lg sm:text-base md:text-lg font-bold text-white'>
                                    Creator-focussed startup Wishlink raises $7 million from fundamentum, 
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Spotlight