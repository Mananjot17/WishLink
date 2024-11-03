// import React, { useState } from 'react';
// import { motion , AnimatePresence } from 'framer-motion';

// const leftArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
// </svg>
// const rightArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
// </svg>

// const images = [
//     "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a81d3d21fe8ebd7fafc372_Group%201116600763.avif",

//     "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d6ac1ad97e8000c77585cf_Group%201116600834-p-800.png",
  
//     "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d6ac0858f75ce77e6da73d_Group%201116601172-p-800.png",
  
//     "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d7ffd5ea1fcb294bdd83e9_Group%201116600827%20(2)-p-800.png",
  
//     "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a81d3dad059090388747f2_Group%201116601110-p-500.avif",
  
//   ];
  
//   const paragraphs = [
//       {
//           heading1: "Outcome based",
//           heading2: "pricing model",
//       },
//       {
//           heading1: "Data first approach",
//           heading2: "with insights at Creator & industry level",
//       },
//       {
//           heading1: "Recurring GMV",
//           heading2: "from Creators",
//       },
//       {
//           heading1: "Cutting-edge",
//           heading2: "Brand dashboard",
//       },
//       {
//           heading1: "Seamless backend",
//           heading2: "integration across platfroms",
//       },
//   ]
// const BrandCard1 = () => {


//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handlePrev = () => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction === 1 ? 300 : -300, // Image enters from the right or left
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1, // Centered image
//     },
//     exit: (direction) => ({
//       x: direction === 1 ? -300 : 300, // Image exits to the left or right
//       opacity: 0,
//     }),
//   };
//   return (
//     <section className=' w-full bg-[#F0E4D2] '>
//         <motion.div className='flex w-full justify-center  pt-16  '
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{ delay: 0.6, duration: 0.5,  }}
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: { opacity: 1, y: 0 },
//               }}
              
//               >
//                     <h3 className='text-3xl md:text-6xl max-w-[56rem] text-black font-bold p-1 border rounded-md text-center'>You deserve more than just an influencer marketing agency</h3>
//                 </motion.div>

//                 <div className="relative max-w-full  sm:max-w-[80%] h-[500px] mx-auto  rounded-3xl overflow-hidden ">
//   <div className='flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between sm:mx-12 h-full'>

//     {/* Text Section */}
//     <AnimatePresence initial={false} custom={direction}>
//       <motion.div key={currentIndex} className='p-4 sm:p-8 w-full sm:w-[32rem] text-black flex justify-center items-start flex-col ' 
//         custom={direction} initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}  
//         animate={{ x: 0, opacity: 1 }} exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }} 
//         transition={{ duration: 0.3 }}
//       >
//         <h1 className='text-2xl text-white  md:text-3xl font-bold py-1 px-1 bg-orange-500 rounded-md'>
//           {paragraphs[currentIndex].heading1}
//         </h1>
//         <h2 className=' w-80  sm:w-full text-3xl   font-bold '>{paragraphs[currentIndex].heading2}</h2>
//       </motion.div>
//     </AnimatePresence>

//     {/* Image Section */}
//     <div className='w-[447px] h-[347px] bg-orange-500 rounded-3xl mr-32 flex justify-center items-center'>
//     <AnimatePresence initial={false} custom={direction}>
//       <motion.img key={currentIndex} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} 
//         className="w-full h-auto max-w-[250px] sm:max-w-full sm:w-[570px] sm:h-[290px] rounded-md" 
//         custom={direction} initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }} 
//         animate={{ x: 0, opacity: 1 }} exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }} 
//         transition={{ duration: 0.3 }}
//       />
//     </AnimatePresence>
//     </div>

//   </div>


// <div className="absolute bottom-2 left-7 sm:left-20  flex space-x-2">
//   {images.map((_, index) => (
//     <motion.div
//       key={index}
//       className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
//       animate={{
//         scale: index === currentIndex ? 1.3 : 1,
//         backgroundColor: index === currentIndex ? 'orange' : '#7f7f7f',
//       }}
//       transition={{ duration: 0.3 }}
//     />
//   ))}
// </div>

// <div className="absolute bottom-0 right-44 flex space-x-2">
//   <button
//     onClick={handlePrev}
//     className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//   >
//     <span className="text-black text-xl sm:text-base">{leftArrow}</span>
//   </button>
//   <button
//     onClick={handleNext}
//     className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//   >
//     <span className="text-black text-xl sm:text-base">{rightArrow}</span>
//   </button>
// </div>
// </div>

//     </section>
 
//   )
// }

// export default BrandCard1

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const leftArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
</svg>;

const rightArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
</svg>;

const images = [
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a81d3d21fe8ebd7fafc372_Group%201116600763.avif",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d6ac1ad97e8000c77585cf_Group%201116600834-p-800.png",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d6ac0858f75ce77e6da73d_Group%201116601172-p-800.png",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66d7ffd5ea1fcb294bdd83e9_Group%201116600827%20(2)-p-800.png",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a81d3dad059090388747f2_Group%201116601110-p-500.avif",
];

const paragraphs = [
  { heading1: "Outcome based", heading2: "pricing model" },
  { heading1: "Data first approach", heading2: "with insights at Creator & industry level" },
  { heading1: "Recurring GMV", heading2: "from Creators" },
  { heading1: "Cutting-edge", heading2: "Brand dashboard" },
  { heading1: "Seamless backend", heading2: "integration across platforms" },
];

const BrandCard1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section className="w-full bg-[#F0E4D2] py-8 sm:py-16">
      <motion.div
        className="flex w-full justify-center px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h3 className="text-4xl mx-5 leading-9 sm:text-4xl md:text-5xl max-w-[56rem] text-black font-medium text-center">
          You deserve more than just an influencer marketing agency
        </h3>
      </motion.div>

<div className="relative max-w-full sm:max-w-[80%] h-auto min-h-[32rem]  sm:h-[500px] mx-auto mt-8 sm:mt-16 rounded-3xl overflow-hidden px-4">
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between h-full">

          {/* Text Section */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="  p-4 pt-12 sm:p-8 w-full sm:w-[32rem] text-black flex justify-center items-center md:items-start flex-col"
              custom={direction}
              initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold py-1 px-1 bg-orange-500 rounded-md text-white">
                {paragraphs[currentIndex].heading1}
              </h1>
              <h2 className="text-xl sm:text-3xl font-bold">{paragraphs[currentIndex].heading2}</h2>
            </motion.div>
          </AnimatePresence>

          {/* Image Section */}
          <div className="w-[340px] h-[280px] sm:w-[447px] sm:h-[347px] bg-orange-500 rounded-3xl flex justify-center items-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="w-full h-auto rounded-md"
                custom={direction}
                initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>
        </div>

        <div className=" absolute bottom-12 left-16 sm:left-20 flex space-x-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
              animate={{
                scale: index === currentIndex ? 1.3 : 1,
                backgroundColor: index === currentIndex ? 'orange' : '#7f7f7f',
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <div className=" absolute bottom-9  md:bottom-2 right-16 sm:right-16 flex space-x-2">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-black rounded-full hover:bg-gray-200"
          >
            {leftArrow}
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 border border-black rounded-full hover:bg-gray-200"
          >
            {rightArrow}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandCard1;
