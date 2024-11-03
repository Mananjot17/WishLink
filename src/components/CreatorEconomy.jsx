import React from 'react'

const CreatorEconomy = () => {
  return (
    <section className='flex flex-col justify-center bg-[#221604] 
    md:min-h-screen md:flex md:justify-center md:items-center 
    sm:min-h-auto'>
        <div className='px-5 md:px-10 w-full'>
            <div className='mx-auto w-full max-w-7xl'>
                <div className='py-8 sm:py-24'>
                    <div className='flex flex-col gap-4 sm:gap-10 '>

                        <div className="grid grid-cols-2 lg:grid-cols-3  gap-x-4 gap-y-4" >
                            {/* Text div: spans 2 columns on small/medium screens, 1 column on large */}
                            <div className="col-span-2 lg:col-span-1 flex text-center justify-center items-center ">
                                <div>
                                <h2 className="text-white text-[2rem] md:text-5xl">
                                    Everything you need to tap into the Creator economy
                                </h2>
                                </div>
                            </div>

                            {/* Image div 1 */}
                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                    Collaborate with <strong>15,000+ Creators</strong>
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821eaa1169529ba2d041_Group%201116601068.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500" />
                            </div>

                            {/* Image div 2 */}
                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                    Drive awareness and <strong>acquire users</strong>
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821fc39733c7b52c4be6_Group%201116601187.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500 " />
                            </div>
                        </div>


                        <div className='grid grid-cols-2 gap-x-3.5 gap-y-3.5 md:gap-x-4 md:gap-y-4 sm:grid-cols-4'>
                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                Boost sales and <strong>maximize ROI</strong>
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821e1bb6cf70b4156e1c_Group%201116601188.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500" />
                            </div>

                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                Select Creators with  <strong>AI based matchmaking</strong>
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821f17eb3d785f233ca5_Group%201116601189.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500" />
                            </div>

                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                   <strong>Track results and ROI</strong>  in real time
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821edac846c2408b9878_Group%201116601186.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500" />
                            </div>

                            <div className="min-h-auto lg:min-h-72 relative overflow-hidden rounded-2xl md:rounded-[2rem]">
                                <div className="p-2 md:pb-6 lg:pb-10 md:px-5 absolute z-[1] bottom-0">
                                <div className="text-xl md:text-2xl font-medium transform-none text-black">
                                 <strong>Build long-term relationships</strong> with creators
                                </div>
                                </div>
                                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66a7821e8874d64612747135_Group%201116601067.avif" alt="" className="object-cover w-full h-full  hover:scale-125 transition-transform duration-500" />
                            </div>
                            

                        </div>
                            

                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default CreatorEconomy