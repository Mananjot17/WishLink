import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import useScrollTriggeredCountUp from '../lib/useScrollTriggeredCountUp';
import OurPartnerCards from './OurPartnerCards';

const ProofAndPartners = () => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);

    const count1 = useScrollTriggeredCountUp(ref1, 15000); 
    const count2 = useScrollTriggeredCountUp(ref2, 6);  
    const count3 = useScrollTriggeredCountUp(ref3, 50);
    const count4 = useScrollTriggeredCountUp(ref4, 200);
    const count5 = useScrollTriggeredCountUp(ref5, 1000);

    return (
        <main className="w-full h-full bg-[#F0E4D2] px-4 md:px-8 lg:px-16">
            {/* Header */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                }}
            >
                <h1 className="text-center font-bold text-3xl md:text-5xl lg:text-6xl pt-8 md:pt-12">The proof is in the numbers</h1>
            </motion.div>

            {/* Stats Section */}
            <div className="flex flex-wrap gap-10 justify-evenly mt-8 mx-auto max-w-6xl">
                {[{ ref: ref1, count: count1, label: "Active Creators", suffix: "+" },
                  { ref: ref2, count: count2, label: "Content pieces", suffix: "Lac+" },
                  { ref: ref3, count: count3, label: "Total Clicks", suffix: "Cr+" },
                  { ref: ref4, count: count4, label: "Impressions", suffix: "Cr+" },
                  { ref: ref5, count: `₹${count5}`, label: "GMV generated", suffix: "Cr+" }]
                  .map(({ ref, count, label, suffix }, index) => (
                    <div key={index} className="flex flex-col items-center w-32 sm:w-48 md:w-56 lg:w-64">
                        <h2 className="text-[#f43f06] font-bold text-3xl sm:text-4xl md:text-5xl" ref={ref}>{count}{suffix}</h2>
                        <p className="text-base sm:text-lg md:text-xl text-center">{label}</p>
                    </div>
                ))}
            </div>

            <div className="flex flex-col  lg:flex-row items-center  lg:justify-between mt-16 lg:mt-24 min-h-[60vh] w-full px-4 md:px-16 lg:px-24">
                <div className="flex flex-col max-w-full lg:max-w-lg mb-10 lg:mb-0">
                    <h1 className="text-[#DE5B11] font-bold text-4xl text-center sm:text-3xl md:text-4xl lg:text-5xl mb-4 lg:mb-8 lg:text-left">Our Partners</h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-center lg:text-left mx-4">E-commerce marketplaces, established Brands, and upcoming D2C Brands - Wishlink works wonders for all of them alike.</p>
                </div>

                <div className='mb-16'>
                <OurPartnerCards/>

                <div className=" hidden md:grid grid-cols-4 gap-4 md:px-7 md:overflow-clip mr-40 gap-x-4 gap-y-4 lg:overflow-hidden">
 
            <div className="col-span-1 min-w-0 flex-grow animate-scroll-up hover:animate-pause" style={{ maxHeight: '46.5rem' }}>
                <div className='py-0 overflow-visible'>
                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d2d7ebb68f96e3d1e1_66c06f2a1ef0c15101c8dbe3_94.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da8e95dc2a17f17bd1681b_72.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074ce1ef0c15101cd307b_66c071b14947f78537d468b2_68.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074ce4a094cea4bd398dc_66c0716216651c0ece729115_84.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074cf16651c0ece75687c_66c0709e837d3992b92f8573_87.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d0040993453db6da0c_66c070f3591493e4618c82d7_85.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d14947f78537d714c2_66c06fc7d0e07e3551d0e2cb_75.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d12514da9000bf6437_66c0701a1ef0c15101c97d4e_77.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d2d7ebb68f96e3d1e1_66c06f2a1ef0c15101c8dbe3_94.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da8e95dc2a17f17bd1681b_72.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074ce1ef0c15101cd307b_66c071b14947f78537d468b2_68.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074ce4a094cea4bd398dc_66c0716216651c0ece729115_84.png" alt="" />
                    </div>
                    
                </div>
            </div>

            <div className="col-span-1 min-w-0 flex-grow animate-scroll-down hover:animate-pause" style={{ maxHeight: '46.5rem' }}>
            <div className='py-0 overflow-visible'>
                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66dc1ddef8cc06b6c602b90a_101.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da94e008e04cb480fd5ad7_77.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3f50a0c80433d1b1f09f_92.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3f2bf7855a68aef1da72_105.png" alt="" />
                    </div>


                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3ef3756d60859980ee4d_106.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3ed9ae606e7c55c73113_107.png " alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3ec3884f2ca798ca388b_83.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3e9086a914e83ba6a7ee_82.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da9ced61739d7327618e55_95.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66dc1ddef8cc06b6c602b90a_101.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da94e008e04cb480fd5ad7_77.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3f50a0c80433d1b1f09f_92.png" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66df3f2bf7855a68aef1da72_105.png" alt="" />
                    </div>
                    
                </div>
            </div>


            <div className="col-span-1 animate-scroll-up hover:animate-pause" style={{ maxHeight: '46.5rem' }}>
            <div className='py-0 overflow-visible'>
                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076b23bd404abda6c76b7_64.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076f342a2d426dfdf5025_100.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c0751cf48f463eaa369748_66.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075371121c59202aeee22_80.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07593837d3992b93389f1_104.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075cd5c1ae24e048e9260_96.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07611cdd922093c5c24f4_98.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07653ca49535d8be44375_83.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076902ac72d39a9f70283_81.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076b23bd404abda6c76b7_64.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076f342a2d426dfdf5025_100.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c0751cf48f463eaa369748_66.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075371121c59202aeee22_80.webp" alt="" />
                    </div>
                    
                </div> 
                </div>

            <div className="col-span-1 animate-scroll-down hover:animate-pause" style={{ maxHeight: '46.5rem' }}>
            <div className='py-0 overflow-visible'>
                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075371121c59202aeee22_80.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c0751cf48f463eaa369748_66.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076f342a2d426dfdf5025_100.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076b23bd404abda6c76b7_64.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076902ac72d39a9f70283_81.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07653ca49535d8be44375_83.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07611cdd922093c5c24f4_98.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075cd5c1ae24e048e9260_96.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c07593837d3992b93389f1_104.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c075371121c59202aeee22_80.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c0751cf48f463eaa369748_66.webp" alt="" />
                    </div>

                    <div className='mb-5 h-full'>
                        <img src="https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c076b23bd404abda6c76b7_64.webp" alt="" />
                    </div>
                    
                </div>
            </div>




        </div>
                </div>
            </div>


            


        </main>
    );
};

export default ProofAndPartners;
