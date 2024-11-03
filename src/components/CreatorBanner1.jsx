import React, { useRef } from 'react';

const CreatorBanner1 = () => {
  const overlayRefs = useRef([]);

  const overlayImages = [
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc171971e837714b459eed_Asset%20549.webp",
      alt: "Overlay 1",
      className: "absolute top-[0] right-[5%] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719716ef3650c46358b_Asset%20539.webp",
      alt: "Overlay 2",
      className: "absolute top-[0] left-[5%] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17194643976d3d9f4718_Asset%20499.webp",
      alt: "Overlay 3",
      className: "absolute top-[35%] left-[0] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17197a5cb636d80a1f1e_Asset%20559.webp",
      alt: "Overlay 4",
      className: "absolute top-[35%] right-[0] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17197a5cb636d80a1f1e_Asset%20559.webp",
      alt: "Overlay 5",
      className: "absolute bottom-[5%] left-[10%] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
      src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719949c024a2f53d7cb_Asset%20529.webp",
      alt: "Overlay 6",
      className: "absolute bottom-[5%] right-[5%] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
    },
    {
        src: "https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc18876078478fb6494ba2_Asset%20579.webp",
        alt: "Overlay 6",
        className: "absolute top-[20%] left-[0%] lg:max-w-[6rem] max-w-[4rem] w-full h-auto z-30 pointer-events-none"
      },

  ];

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = overlayRefs.current[0].getBoundingClientRect();

    const x = (clientX - left - width / 2) / 20;
    const y = (clientY - top - height / 2) / 20;

    overlayRefs.current.forEach((overlayRef) => {
      overlayRef.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });
  };

  const handleMouseLeave = () => {
    overlayRefs.current.forEach((overlayRef) => {
      overlayRef.style.transform = `translate3d(0, 0, 0)`;
    });
  };

  return (
    <section className='relative bg-[#F0E4D2]'>
      <div className='w-full px-10'>
        <div className="mx-auto">
          <div className="pt-24 pb-24">
            <div className="flex flex-col justify-center items-center gap-y-12 gap-x-4 
                           md:grid md:grid-cols-2 md:grid-rows-auto md:gap-x-12">
              <div className="overflow-visible text-center md:text-left">
                <div className=''>  {/* this div  */}
                  <div className='mb-4'>
                    <div className="w-full max-w-[35rem]">
                      <h1 className="font-bold leading-[1.1] text-3xl md:text-[3rem] sm:text-[2.5rem] text-black font-serif">
                        Empowering creators to grow, collaborate and earn
                      </h1>
                    </div>
                  </div>
                  <div className="w-full max-w-[32rem]">
                    <p className="text-[1.25rem] font-medium text-gray-800 font-serif leading-[1.2]">
                      Boost your social media engagement, collaborate with top brands and monetize 100% of your content with Wishlink
                    </p>
                  </div>
                </div>
              </div>

              <div 
                className="relative w-full max-w-[35rem] h-[22rem] md:h-[35rem]" 
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}
              >
                {/* Main Image */}
                <img
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc171ac271060d2866cf63_deekshakhurana%20(1)%201.webp"
                  alt="Main"
                  className="absolute w-full h-full object-contain z-10" // Ensure main image has z-20
                />

                {/* Overlay Images with Parallax Effect */}
                {overlayImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    className={image.className}
                    ref={(el) => overlayRefs.current[index] = el}
                  />
                ))}

                {/* Background images */}
                <img 
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719faf12d395160239f_Asset%20489.webp" 
                  alt="" 
                  className='absolute bottom-[0%] left-[0%] w-full h-[80%] z-10' // Set lower z-index for background
                />

                <img 
                  src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17193d1183348916eaa1_Asset%20509.webp" 
                  alt="" 
                  className='absolute bottom-[70%] left-[20%] w-[60%] h-[40%] mx-auto object-contain z-0' // Set lowest z-index for this background image
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17193d1183348916eaa1_Asset%20509.webp" alt="" 
                    className='object-contain w-[30%] h-[30%] mx-auto absolute bottom-[5%] right-[5%] z-0'
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17190fc889827cccee32_smile%20(1).webp" alt="" 
                    className='absolute right-[5%] bottom-[100%] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]'
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17195af0e83d1d936ca5_love.webp" alt="" 
                    className='absolute right-[50%] bottom-[100%] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]'
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17197aaa3991416f81a0_verified.webp" alt="" 
                    className='absolute top-[60%] left-[0%] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]'
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc1719716ef3650c4634f7_smiling.webp" alt="" 
                    className='absolute bottom-[10%] left-[0%] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]'
                />

                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/66bc17195af0e83d1d936ca5_love.webp" alt="" 
                    className='absolute bottom-[25%] right-[10%] w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem]'
                />
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorBanner1;
