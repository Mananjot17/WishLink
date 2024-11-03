import React, { useState } from 'react';

const FAQs = () => {
  // State to manage visibility of the FAQ answers
  const [openIndex, setOpenIndex] = useState(null);

  // Array of FAQ items
  const faqItems = [
    {
      question: "Who manages Creator selection and execution?",
      answer: "Data does the selection and we manage the execution. It is a new way to work with creators where you have to just track sales and traffic being driven to your website or app."
    },
    {
      question: "What is the tech integration involved?",
      answer: "Given transactions get closed on your website, we will integrate with your backend to track sales driven by each influencer on your platform. It just takes 5 mins to integrate!"
    },
    {
      question: "When do we have to pay?",
      answer: "We believe in results and charge you only for outcomes. We will work with your team to identify the right outcome metric (e.g., sales, traffic) and pricing model for you."
    },
    {
        question: "Can we also do paid awareness campaigns via Wishlink?",
        answer: "Absolutely. We have unparalleled data for each influencer - not just #followers or engagement, but also their ability to drive traffic and sales."
    },
    {
        question: "What all data is tracked??",
        answer: "We track data at each step of funnel - from views and engagement to Click-Through-Rates and Conversion. You will be able to calculate RoAS, CPV, CPC - just like any other performance marketing channel."
    }
    // Add more FAQ items as needed
  ];

  // Function to toggle the FAQ answer visibility
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='relative overflow-hidden bg-[#F0E4D2]'>
      <div className='py-12 px-5 md:py-16 md:px-10 lg:py-20 w-full'>
        <div className='mx-auto w-full max-w-5xl'>
          <div className='overflow-visible'>
            <div className='flex flex-col gap-4'>
              <div className='text-black text-left'>
                <h2 className='mt-0 mb-0 font-sans text-[1.8rem] md:text-[2rem] lg:text-[2.8rem] font-bold leading-[1.2]'>
                  FAQs
                </h2>
              </div>
              <p className='font-semibold text-xl lg:text-2xl text-black'>
                Got questions? We've got answers!
              </p>
            </div>

            <div className='pt-6 md:pt-10 lg:pt-12'></div>

            <div className='flex flex-col gap-4'>
              {faqItems.map((item, index) => (
                <div key={index}>
                  <div
                    className='gap-x-6 gap-y-6 text-text-alternate cursor-pointer bg-gradient-to-b from-[#ff833d] to-[#e04300] justify-between items-center px-6 py-5 flex'
                    onClick={() => toggleAnswer(index)} // Toggle answer on click
                  >
                    <div className='font-bold'>
                      <strong className='text-[#F0E4D2]'>
                        {item.question}
                      </strong>
                    </div>

                    <div className='flex self-start w-7 md:w-8'>
                      <div className='flex flex-col justify-center items-center w-12 h-12 text-[#F0E4D2]'>
                        {openIndex === index ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 42 36" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                          <path fillRule="evenodd" clipRule="evenodd" d="M41.8715 19.8961C29.6989 19.912 23.2636 27.8151 23.2408 33.5239L23.2408 33.5396L23.2076 33.5397L23.2076 35.219L18.5454 35.219L18.5454 32.8079C18.0357 27.1796 11.6671 19.9357 0.00034993 19.9509L0.00773539 16.1053C8.35916 16.0944 14.6351 19.1421 18.5454 23.1723L18.5454 0.652343L23.2076 0.652343L23.2076 23.2763C27.1258 19.1814 33.4517 16.0615 41.8789 16.0504L41.8715 19.8961Z" fill="currentColor" transform="rotate(180 21 18)"></path>
                        </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 42 36" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true" role="img">
                            <path fillRule="evenodd" clipRule="evenodd" d="M41.8715 19.8961C29.6989 19.912 23.2636 27.8151 23.2408 33.5239L23.2408 33.5396L23.2076 33.5397L23.2076 35.219L18.5454 35.219L18.5454 32.8079C18.0357 27.1796 11.6671 19.9357 0.00034993 19.9509L0.00773539 16.1053C8.35916 16.0944 14.6351 19.1421 18.5454 23.1723L18.5454 0.652343L23.2076 0.652343L23.2076 23.2763C27.1258 19.1814 33.4517 16.0615 41.8789 16.0504L41.8715 19.8961Z" fill="currentColor"></path>
                            </svg>
                        )}
                      </div>
                    </div>
                  </div>

                  {openIndex === index && ( // Conditionally render the answer based on openIndex state
                    <div className='w-full'>
                      <div className='bg-gradient-to-r from-[#ff833d33] to-[#e0430033] py-8 px-6 font-semibold'>
                        <p className='whitespace-normal w-full text-black'>
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;