import React, { useState } from 'react';
import { motion , AnimatePresence } from 'framer-motion';
import { text } from 'framer-motion/client';

const images = [
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a841709b28b58edf0f73b0_Group%201116600948%20(1).avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a8417084ef4a87698ba985_Group%201116600927.avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a8416f17fd47a046b64eca_Group%201116600932%20(1).avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a8458ec59f9d493f5e2474_Group%201116600947%20(1).avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a84170a118949eb72f9f8f_Group%201116600942%20(1).avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a841708d8c89f0dc818fff_Group%201116600976.avif",

  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66a84170ff8816b3ba7bd129_Group%201116600975.avif",


];

const paragraphs = [
    {
        heading1: "Customer First",
        heading2: "Hyperfocus on customers' needs and experience",
        text: "We're dedicated to understanding your needs and exceeding your expectations every step of the way",
    },
    {
        heading1: "Solve",
        heading2: "Identify and solve problems relentlessly",
        text: "We're all about tackling problems with fresh, data-driven solutions to make your experience extraordinary",
    },
    {
        heading1: "Fail Fast",
        heading2: "Fail fast & learn faster",
        text: "We bounce back from failures quickly, learn on the go, and keep innovating for fantastic results",
    },
    {
        heading1: "Have fun",
        heading2: "Work passionately and have a hell lot of fun",
        text: "We create a vibrant workspace where creativity and fun go hand in hand",
    },
    {
        heading1: "Empower",
        heading2: "Empower your teammates and grow together",
        text: "We champion each other's growth, fostering success through strong collaboration and mutual support",
    },
    {
        heading1: "Be honest",
        heading2: "Be honest, starting with yourself",
        text: "We stick to our principles, bringing honesty and integrity to everything we do",
    },
    {
        heading1: "Dream big",
        heading2: "Have audacious goals and dream big",
        text: "We aim high, set bold goals, and strive for exceptional success and impact",
    }

]
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction === 1 ? 300 : -300, // Image enters from the right or left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1, // Centered image
    },
    exit: (direction) => ({
      x: direction === 1 ? -300 : 300, // Image exits to the left or right
      opacity: 0,
    }),
  };

  return (

    <section className=' w-full '>
        <motion.div className='flex w-full justify-center mb-8 pt-16  '
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.6, duration: 0.5,  }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              
              >
                    <h3 className='text-2xl md:text-4xl text-black font-bold p-1 bg-[#eda86e] border rounded-md'>Our Core Values</h3>
                </motion.div>

                <div className="relative max-w-full  sm:max-w-[80%] h-[600px] mx-auto bg-gradient-to-b from-[#f9bb84] to-[#f1e5d2] rounded-3xl overflow-hidden">
  <div className='flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between sm:mx-32 h-full'>

    {/* Text Section */}
    <AnimatePresence initial={false} custom={direction}>
      <motion.div key={currentIndex} className='p-4 sm:p-8 w-full sm:w-96 text-black flex justify-center items-center flex-col ' 
        custom={direction} initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}  
        animate={{ x: 0, opacity: 1 }} exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }} 
        transition={{ duration: 0.3 }}
      >
        <h1 className='text-2xl  sm:w-full md:text-4xl font-bold p-3 bg-orange-500 rounded-md'>
          {paragraphs[currentIndex].heading1}
        </h1>
        <h2 className=' w-80  sm:w-full text-2xl text-center sm:text-3xl font-bold mt-4'>{paragraphs[currentIndex].heading2}</h2>
        <p className=' w-80 text-center sm:w-full text-md sm:font-medium mt-2'>{paragraphs[currentIndex].text}</p>
      </motion.div>
    </AnimatePresence>

    {/* Image Section */}
    <AnimatePresence initial={false} custom={direction}>
      <motion.img key={currentIndex} src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} 
        className="w-full h-auto max-w-[250px] sm:w-[570px] sm:h-[456px] rounded-md" 
        custom={direction} initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }} 
        transition={{ duration: 0.3 }}
      />
    </AnimatePresence>

  </div>


<div className="absolute bottom-8 left-7 sm:left-32 flex space-x-2">
  {images.map((_, index) => (
    <motion.div
      key={index}
      className={`w-2 h-2 sm:w-4 sm:h-4 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
      animate={{
        scale: index === currentIndex ? 1.3 : 1,
        backgroundColor: index === currentIndex ? 'orange' : '#7f7f7f',
      }}
      transition={{ duration: 0.3 }}
    />
  ))}
</div>

<div className="absolute bottom-5 right-12 flex space-x-2">
  <button
    onClick={handlePrev}
    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-full hover:bg-gray-200"
  >
    <span className="text-black text-xl sm:text-base">←</span>
  </button>
  <button
    onClick={handleNext}
    className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-black rounded-full hover:bg-gray-200"
  >
    <span className="text-black text-xl sm:text-base">→</span>
  </button>
</div>
</div>

    </section>
 
  );
};

export default ImageCarousel;
