import React, { useRef } from 'react';
import CreatorCard from './CreatorCard';

const CreatorBanner2 = () => {
  // Store multiple refs for multiple cards
  const cardRefs = useRef([]);

  

  // Sample card data
  const cardsData1 = [
    {
      name: 'Malvika Sitlani',
      imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d35e410be6e4f0217f_66c06df92ac72d39a9f006be_76.webp',
      instagramHandle: 'malvikasitlaniofficial',
      instagramUrl: 'https://www.instagram.com/malvikasitlaniofficial/',
      followers: '707K',
      shopUrl: 'http://wishlink.com/malvikasitlani',
      flippable: true,
      backgroundImage:'linear-gradient(180deg, #7b3e0d, #f89646)',
    },
    {
      name: 'SNITCH',
      imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da8e95dc2a17f17bd1681b_72.png',
      instagramHandle: '',
      instagramUrl: '#',
      followers: '0',
      shopUrl: '#',
      flippable: false,
      backgroundImage:'',
    },
    {
      name: 'Aditi Shreshtha',
      imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d216651c0ece756a03_66c06e746c3372cd9b73cc94_74.webp',
      instagramHandle: 'thatquirkymissaditi',
      instagramUrl: 'https://www.youtube.com/@ThatQuirkyMiss',
      followers: '1 Million subscribers',
      shopUrl: 'http://wishlink.com/thatquirkymissaditi',
      flippable: true,
      backgroundImage:'linear-gradient(180deg, #ffdf58, #9d7f00)',
    },
    {
        name: 'innovisit',
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d2d7ebb68f96e3d1e1_66c06f2a1ef0c15101c8dbe3_94.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
      },
      {
        name: 'shopsy',
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d14947f78537d714c2_66c06fc7d0e07e3551d0e2cb_75.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
      },
      {
        name: 'Simran Balarjain',
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66e289c245ac7a1920e09990_Group%201116600262%20(1).png',
        instagramHandle: 'simranbalarjain',
        instagramUrl: 'https://www.instagram.com/simranbalarjain/',
        followers: '1 Million Followers',
        shopUrl: 'http://wishlink.com/simranbalarjain',
        flippable: true,
        backgroundImage:'linear-gradient(180deg, #ffdf58, #9d7f00)',
      },
      {
        name: "Dr. Sheth's",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da94e008e04cb480fd5ad7_77.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
      },  
      {
        name: "nykaa",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d12514da9000bf6437_66c0701a1ef0c15101c97d4e_77.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
      },
    {
        name: "tokyo tales",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d09fb59105a9798036_66c070586c3372cd9b75d97d_88.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
    },
    {
        name: "tokyo tales",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074cf16651c0ece75687c_66c0709e837d3992b92f8573_87.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
    },
    {
        name: "Zuola",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66da92cd379690cb61d08e76_freepik_br_c9fe4e9f-cf2b-49cf-bf73-d2d0e1173b31.png',
        instagramHandle: 'zuola',
        instagramUrl: 'https://www.instagram.com/_zuola_/',
        followers: '201K Followers',
        shopUrl: 'https://www.wishlink.com/zuola',
        flippable: true,
        backgroundImage:'linear-gradient(180deg, #f99e4b, #a53c00)',
    },
    {
        name: "urbanic",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d0040993453db6da0c_66c070f3591493e4618c82d7_85.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'linear-gradient(180deg, #ffdf58, #9d7f00)',
    },
    {
        name: "uptowine",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074ce4a094cea4bd398dc_66c0716216651c0ece729115_84.png',
        instagramHandle: '',
        instagramUrl: '#',
        followers: '0',
        shopUrl: '#',
        flippable: false,
        backgroundImage:'',
    },
    {
        name: "Anushka Hazra",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d1040993453db6dbc7_66c06fde9fb59105a975d996_69.webp',
        instagramHandle: '@anushkahazraa',
        instagramUrl: 'https://www.instagram.com/anushkahazraa/',
        followers: '569k followers',
        shopUrl: 'http://wishlink.com/anushkahazraa',
        flippable: true,
        backgroundImage:'linear-gradient(180deg, #f99e4b, #a53c00)',
    },
    {
        name: "Kritika Khurana",
        imageUrl: 'https://cdn.prod.website-files.com/6665566fd32a68cdf8236075/66c074d05e410be6e4f02020_66c0702f6a0aa02def924fb3_67.webp',
        instagramHandle: '@thatbohogirll',
        instagramUrl: '"https://www.instagram.com/thatbohogirl/"',
        followers: '2 Million Followers',
        shopUrl: 'http://wishlink.com/thatbohogirll',
        flippable: true,
        backgroundImage:'linear-gradient(180deg, #ffdf58, #9d7f00)',
    },
  ];

  // Function to flip a card to the back
  const handleMouseMove = (index) => {
    cardRefs.current[index].style.transform = 'rotateY(180deg)';
  };

  // Function to flip a card back to the front
  const handleMouseLeave = (index) => {
    cardRefs.current[index].style.transform = 'rotateY(0deg)';
  };

  return (
    <section className='relative bg-[#F0E4D2]'>
      <div className='pt-8 pb-8 md:pt-24 md:pb-24'>
        <div className='w-full max-w-[120rem] mx-auto'>
          <div className='overflow-visible'>
            <div className='w-full flex flex-col gap-4 text-center justify-center items-center sm:gap-3 sm:px-4'>
              <h2 className='text-[2rem] md:text-[3rem] font-bold text-black leading-tight'>
                Loved by Creators, trusted by Brands
              </h2>
              <p className='text-xl md:text-2xl text-black leading-tight'>
                Join forces with fellow Creators, partner with leading Brands like never before
              </p>
            </div>

            <div className='pt-6 md:pt-10 lg:pt-12'></div>

            <div className='overflow-hidden flex flex-col md:gap-2'>
                <div className='flex justify-end items-center'>
                  <div className='relative flex flex-none md:mr-2 gap-3 md:gap-2'>
                    {cardsData1.map((card, index) => (
                        <CreatorCard key={index}
                        MouseMove={() => handleMouseMove(index)}
                        MouseLeave={() => handleMouseLeave(index)}
                        Ref={(el) => (cardRefs.current[index] = el)}
                        flippable={card.flippable}
                        cardData={card} 
                        />
                    ))}
                  </div>
                </div>


              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorBanner2;
