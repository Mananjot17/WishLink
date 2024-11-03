import React from 'react'

const MeetOurTeam = () => {
  return (
    <section className='relative bg-[#F0E4D2]'>
        <div className='px-5 py-8 w-full md:px-10 md:py-12'>
            <div className='w-full max-w-7xl mx-auto'>
                <div className='overflow-visible flex flex-col justify-start items-center '>
                    <div className='self-center p-1 bg-[#eda86e] border rounded-md'>
                        <h3 className='text-2xl md:text-4xl text-black font-bold'>Meet Our Team</h3>
                    </div>
                </div>

                <div className='pt-5 md:pt-6'></div>

                <div className='w-full relative h-80 md:h-auto'>
                    <img className="h-full w-full object-contain align-middle z-10" src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66c1578f9bb54de4aaf9289d_Group%201116601211%20(2).webp" alt="" />

                    <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66c157132514da90006df33c_Vector%20(3).webp" alt="" className="z-10 w-16 sm:w-full absolute md:top-[5%] left-[15%] max-w-[5rem] sm:max-w-[4rem] top-0 md:left-[12%] xsm:max-w-[2rem]" />
                    <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66c157132514da90006df33c_Vector%20(3).webp" alt=""  className=" w-16 sm:w-full  max-w-[6rem] absolute top-0 left-[40%] sm:left-[45%] sm:max-w-[2rem] md:max-w-[4rem]"/>
                    <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66c157132514da90006df33c_Vector%20(3).webp" alt="" className=" w-16 sm:w-full  max-w-[5rem] absolute top-0 right-[15%] sm:max-w-[2rem] md:max-w-[3rem]" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default MeetOurTeam