// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { p } from "framer-motion/client";

// const leftArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
// </svg>
// const rightArrow = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
// </svg>
// const instaSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline" viewBox="0 0 34 34" fill="none" preserveAspectRatio="xMidYMid meet" role="img">
// <path d="M18.3724 0C20.241 0.00498293 21.1893 0.0149488 22.0082 0.0382025L22.3304 0.0498293C22.7025 0.0631171 23.0695 0.0797269 23.513 0.0996586C25.2802 0.182708 26.4861 0.461752 27.5441 0.872014C28.6403 1.2939 29.5638 1.86528 30.4872 2.78712C31.3318 3.61744 31.9853 4.62182 32.4023 5.73037C32.8125 6.78842 33.0916 7.99429 33.1746 9.76323C33.1946 10.205 33.2112 10.5721 33.2245 10.9458L33.2344 11.2681C33.2593 12.0853 33.2693 13.0337 33.2726 14.9023L33.2743 16.1414V18.3173C33.2784 19.5288 33.2656 20.7403 33.2361 21.9515L33.2261 22.2737C33.2128 22.6474 33.1962 23.0145 33.1763 23.4563C33.0932 25.2253 32.8109 26.4295 32.4023 27.4892C31.9865 28.5984 31.3329 29.603 30.4872 30.4324C29.6567 31.2768 28.6524 31.9302 27.5441 32.3475C26.4861 32.7578 25.2802 33.0369 23.513 33.1199C23.1189 33.1385 22.7247 33.1551 22.3304 33.1697L22.0082 33.1797C21.1893 33.203 20.241 33.2146 18.3724 33.2179L17.1333 33.2196H14.9592C13.7471 33.2237 12.5351 33.211 11.3234 33.1814L11.0012 33.1714C10.6069 33.1565 10.2127 33.1393 9.8186 33.1199C8.05137 33.0369 6.84554 32.7578 5.78586 32.3475C4.67747 31.9313 3.67352 31.2776 2.84435 30.4324C1.99901 29.6024 1.3449 28.598 0.927635 27.4892C0.517385 26.4311 0.238348 25.2253 0.155302 23.4563C0.136797 23.0622 0.120187 22.668 0.105474 22.2737L0.0971693 21.9515C0.0665617 20.7403 0.0527192 19.5288 0.0556459 18.3173V14.9023C0.0510103 13.6908 0.0631917 12.4793 0.0921865 11.2681L0.103813 10.9458C0.1171 10.5721 0.13371 10.205 0.153641 9.76323C0.236687 7.99429 0.515724 6.79008 0.925974 5.73037C1.34306 4.62068 1.99847 3.61599 2.84601 2.78712C3.67497 1.94247 4.67826 1.2889 5.78586 0.872014C6.84554 0.461752 8.04971 0.182708 9.8186 0.0996586C10.2604 0.0797269 10.6291 0.0631171 11.0012 0.0498293L11.3234 0.0398634C12.5345 0.0103524 13.746 -0.002383 14.9575 0.00166086L18.3724 0ZM16.665 8.30489C14.4624 8.30489 12.3501 9.17987 10.7927 10.7373C9.23526 12.2948 8.36031 14.4072 8.36031 16.6098C8.36031 18.8124 9.23526 20.9248 10.7927 22.4822C12.3501 24.0397 14.4624 24.9147 16.665 24.9147C18.8675 24.9147 20.9798 24.0397 22.5372 22.4822C24.0947 20.9248 24.9696 18.8124 24.9696 16.6098C24.9696 14.4072 24.0947 12.2948 22.5372 10.7373C20.9798 9.17987 18.8675 8.30489 16.665 8.30489ZM16.665 11.6268C17.3193 11.6267 17.9673 11.7555 18.5719 12.0058C19.1764 12.2561 19.7258 12.6231 20.1886 13.0857C20.6513 13.5484 21.0185 14.0976 21.269 14.7021C21.5195 15.3066 21.6485 15.9546 21.6486 16.609C21.6487 17.2633 21.5199 17.9113 21.2696 18.5159C21.0193 19.1205 20.6524 19.6699 20.1898 20.1327C19.7271 20.5954 19.1779 20.9626 18.5734 21.2131C17.9689 21.4636 17.321 21.5926 16.6666 21.5927C15.3451 21.5927 14.0777 21.0677 13.1433 20.1333C12.2088 19.1988 11.6838 17.9313 11.6838 16.6098C11.6838 15.2882 12.2088 14.0208 13.1433 13.0863C14.0777 12.1518 15.3451 11.6268 16.6666 11.6268M25.3865 5.81342C24.8359 5.81342 24.3078 6.03217 23.9184 6.42154C23.5291 6.8109 23.3104 7.339 23.3104 7.88965C23.3104 8.4403 23.5291 8.96839 23.9184 9.35776C24.3078 9.74712 24.8359 9.96587 25.3865 9.96587C25.9372 9.96587 26.4652 9.74712 26.8546 9.35776C27.2439 8.96839 27.4627 8.4403 27.4627 7.88965C27.4627 7.339 27.2439 6.8109 26.8546 6.42154C26.4652 6.03217 25.9372 5.81342 25.3865 5.81342Z" fill="currentColor"></path>
// </svg>
// const images = [
//   "https://cdn.prod.website-files.com/666285153da630124c201ec0/66c170294a094cea4b93aed0_freepik_br_cbe89c50-de67-4569-bd75-7b898f707c91%201-p-800.webp",

//   "https://cdn.prod.website-files.com/666285153da630124c201ec0/66c1702819a9bbe9022dbcbb_freepik_br_d91a5f66-5020-44ae-99f7-49fe05773bb4%201-p-800.webp",

//   "https://cdn.prod.website-files.com/666285153da630124c201ec0/66cfbce2ced18930eb3ebaa1_Layer%201%203-p-800.png",
// ];

// const paragraphs = [
//   {
//     paragraph: "Wishlink has been a game-changer for me as a fashion and styling content Creator. With over 250+ Brands to monetize my organic content, it's opened up a sustainable source of income that perfectly complements my YouTube and Instagram. The seamless way of sharing product links makes recommending my favourite styles effortless. Plus, the automation of post comments with Wishlink Engage has saved me countless hours, allowing me to focus on creating content while delivering a great user experience. Wishlink is truly a must-have for any Creator looking to grow and monetize their organic content effortlessly.",
//     name: "Vaibhav Keswani",
//     insta: "@pehnawah",
//     followers: "625k",
//     href: "https://www.instagram.com/pehenawah/",
//     youtube: "",
//     subscribers: "",
//   },
//   {
//     paragraph: "I've been on YouTube for the last 7 years and always wished that there was a platform like Wishlink. It is truly revolutionary as it makes it incredibly simple to share product links in my videos and Instagram DMs. It's much easier for my audience to shop and for me to share links while monetising. I would highly recommend Wishlink to all Creators!",
//     name: "Sana Grover",
//     insta: "",
//     followers: "",
//     href: "https://www.youtube.com/@SanaGrover",
//     youtube: "@sanagrover",
//     subscribers: "505k",
//   },
//   {
//     paragraph: "Wishlink has revolutionized my content creation! As a fashion content Creator, I'm now earning 2-3L per month by sharing and recommending product links on Instagram stories and posts. Monetizing 100% of my content has never been easier. The best part is Wishlink Engage - it automates comments and sends product links directly to my audience's DMs. Plus, Wishlink has played a huge role in my social media growth. I highly recommend it!",
//     name: "Naveli Khatri",
//     insta: "@navelikhatri",
//     followers: "206k",
//     href: "https://www.instagram.com/navelikhatrii/",
//     youtube: "",
//     subscribers: "",
    
//   },

// ];
// const BrandCard2 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   const handleNext = () => {
//     setDirection(1);
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
//     <section className=" w-full bg-[#F0E4D2] ">
//       <motion.div
//         className="flex w-full justify-center mb-8 pt-16  "
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0 },
//         }}
//       >
//         <h3 className="text-3xl md:text-5xl max-w-[56rem] text-black font-bold p-1 border rounded-md text-center mb-12">
//           The love we get from our Creators
//         </h3>
//       </motion.div>

//       <div className="relative max-w-full  sm:max-w-[1050px] h-[600px] mx-auto  rounded-[30px]   bg-gradient-to-r from-[#241404] via-[#241404] to-black  ">

//         <div className=" h-full pt-16 pl-16  ">
//           {/* Text Section */}
//           <AnimatePresence initial={false} custom={direction}>
//             <motion.div
//               key={currentIndex}
//               className=" w-full sm:w-[35rem] text-black "
//               custom={direction}
//               initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <p className="text-lg text-[#F2F2F2]  md:text-xl md:leading-6 h-72  ">
//                 {paragraphs[currentIndex].paragraph}
//               </p>

//               <div className="h-full  mt-32 ">
//                 <h2 className="text-[#DE5B11] bottom-10 text-3xl font-bold">{paragraphs[currentIndex].name}</h2>

//                 <div className="text-white mt-2 text-[22px] font-medium">
//                   {paragraphs[currentIndex].insta !=='' ? (
//                     <a className="flex items-center" href={paragraphs[currentIndex].href} target="_blank" >
//                       <p>{paragraphs[currentIndex].insta} | {instaSvg} {paragraphs[currentIndex].followers} Followers</p>
//                     </a>
//                   ): 
//                   <a className="flex items-center">
//                   <p >{paragraphs[currentIndex].youtube} | {instaSvg} {paragraphs[currentIndex].subscribers} Subscribers</p>
//                 </a>
//                   }
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//           {/* Image Section */}
         
//             <AnimatePresence initial={false} custom={direction}>
//               <motion.img
//                 key={currentIndex}
//                 src={images[currentIndex]}
//                 alt={`Image ${currentIndex + 1}`}
//                 className="absolute z-30 bottom-0 right-[-105px] w-[40vw] max-w-[400px] sm:w-[60vw] md:w-[64vw] lg:w-[85vw] max-h-[550px]"
//                 custom={direction}
//                 initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//                 animate={{ x: 0, opacity: 1 }}
//                 exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </AnimatePresence>
          
//         </div>
//       </div>

//       <div className="flex justify-between mx-64 mt-6 items-center">
//         <div className="  flex space-x-2">
//           {images.map((_, index) => (
//             <motion.div
//               key={index}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
//                 index === currentIndex ? "bg-white" : "bg-gray-500"
//               }`}
//               animate={{
//                 scale: index === currentIndex ? 1.3 : 1,
//                 backgroundColor: index === currentIndex ? "orange" : "#7f7f7f",
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           ))}
//         </div>

//         <div className=" flex space-x-2">
//           <button
//             onClick={handlePrev}
//             className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//           >
//             <span className="text-black text-xl sm:text-2xl">{leftArrow}</span>
//           </button>
//           <button
//             onClick={handleNext}
//             className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//           >
//             <span className="text-black text-xl sm:text-2xl">{rightArrow}</span>
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default BrandCard2;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const leftArrow = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z" fill="currentColor"></path>
  </svg>
);

const rightArrow = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z" fill="currentColor"></path>
  </svg>
);


const instaSvg = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="inline" viewBox="0 0 34 34" fill="none" preserveAspectRatio="xMidYMid meet" role="img">
 <path d="M18.3724 0C20.241 0.00498293 21.1893 0.0149488 22.0082 0.0382025L22.3304 0.0498293C22.7025 0.0631171 23.0695 0.0797269 23.513 0.0996586C25.2802 0.182708 26.4861 0.461752 27.5441 0.872014C28.6403 1.2939 29.5638 1.86528 30.4872 2.78712C31.3318 3.61744 31.9853 4.62182 32.4023 5.73037C32.8125 6.78842 33.0916 7.99429 33.1746 9.76323C33.1946 10.205 33.2112 10.5721 33.2245 10.9458L33.2344 11.2681C33.2593 12.0853 33.2693 13.0337 33.2726 14.9023L33.2743 16.1414V18.3173C33.2784 19.5288 33.2656 20.7403 33.2361 21.9515L33.2261 22.2737C33.2128 22.6474 33.1962 23.0145 33.1763 23.4563C33.0932 25.2253 32.8109 26.4295 32.4023 27.4892C31.9865 28.5984 31.3329 29.603 30.4872 30.4324C29.6567 31.2768 28.6524 31.9302 27.5441 32.3475C26.4861 32.7578 25.2802 33.0369 23.513 33.1199C23.1189 33.1385 22.7247 33.1551 22.3304 33.1697L22.0082 33.1797C21.1893 33.203 20.241 33.2146 18.3724 33.2179L17.1333 33.2196H14.9592C13.7471 33.2237 12.5351 33.211 11.3234 33.1814L11.0012 33.1714C10.6069 33.1565 10.2127 33.1393 9.8186 33.1199C8.05137 33.0369 6.84554 32.7578 5.78586 32.3475C4.67747 31.9313 3.67352 31.2776 2.84435 30.4324C1.99901 29.6024 1.3449 28.598 0.927635 27.4892C0.517385 26.4311 0.238348 25.2253 0.155302 23.4563C0.136797 23.0622 0.120187 22.668 0.105474 22.2737L0.0971693 21.9515C0.0665617 20.7403 0.0527192 19.5288 0.0556459 18.3173V14.9023C0.0510103 13.6908 0.0631917 12.4793 0.0921865 11.2681L0.103813 10.9458C0.1171 10.5721 0.13371 10.205 0.153641 9.76323C0.236687 7.99429 0.515724 6.79008 0.925974 5.73037C1.34306 4.62068 1.99847 3.61599 2.84601 2.78712C3.67497 1.94247 4.67826 1.2889 5.78586 0.872014C6.84554 0.461752 8.04971 0.182708 9.8186 0.0996586C10.2604 0.0797269 10.6291 0.0631171 11.0012 0.0498293L11.3234 0.0398634C12.5345 0.0103524 13.746 -0.002383 14.9575 0.00166086L18.3724 0ZM16.665 8.30489C14.4624 8.30489 12.3501 9.17987 10.7927 10.7373C9.23526 12.2948 8.36031 14.4072 8.36031 16.6098C8.36031 18.8124 9.23526 20.9248 10.7927 22.4822C12.3501 24.0397 14.4624 24.9147 16.665 24.9147C18.8675 24.9147 20.9798 24.0397 22.5372 22.4822C24.0947 20.9248 24.9696 18.8124 24.9696 16.6098C24.9696 14.4072 24.0947 12.2948 22.5372 10.7373C20.9798 9.17987 18.8675 8.30489 16.665 8.30489ZM16.665 11.6268C17.3193 11.6267 17.9673 11.7555 18.5719 12.0058C19.1764 12.2561 19.7258 12.6231 20.1886 13.0857C20.6513 13.5484 21.0185 14.0976 21.269 14.7021C21.5195 15.3066 21.6485 15.9546 21.6486 16.609C21.6487 17.2633 21.5199 17.9113 21.2696 18.5159C21.0193 19.1205 20.6524 19.6699 20.1898 20.1327C19.7271 20.5954 19.1779 20.9626 18.5734 21.2131C17.9689 21.4636 17.321 21.5926 16.6666 21.5927C15.3451 21.5927 14.0777 21.0677 13.1433 20.1333C12.2088 19.1988 11.6838 17.9313 11.6838 16.6098C11.6838 15.2882 12.2088 14.0208 13.1433 13.0863C14.0777 12.1518 15.3451 11.6268 16.6666 11.6268M25.3865 5.81342C24.8359 5.81342 24.3078 6.03217 23.9184 6.42154C23.5291 6.8109 23.3104 7.339 23.3104 7.88965C23.3104 8.4403 23.5291 8.96839 23.9184 9.35776C24.3078 9.74712 24.8359 9.96587 25.3865 9.96587C25.9372 9.96587 26.4652 9.74712 26.8546 9.35776C27.2439 8.96839 27.4627 8.4403 27.4627 7.88965C27.4627 7.339 27.2439 6.8109 26.8546 6.42154C26.4652 6.03217 25.9372 5.81342 25.3865 5.81342Z" fill="currentColor"></path>
 </svg>

const images = [
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66c170294a094cea4b93aed0_freepik_br_cbe89c50-de67-4569-bd75-7b898f707c91%201-p-800.webp",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66c1702819a9bbe9022dbcbb_freepik_br_d91a5f66-5020-44ae-99f7-49fe05773bb4%201-p-800.webp",
  "https://cdn.prod.website-files.com/666285153da630124c201ec0/66cfbce2ced18930eb3ebaa1_Layer%201%203-p-800.png",
];

const paragraphs = [
  {
    paragraph: "Wishlink has been a game-changer for me as a fashion and styling content Creator. With over 250+ Brands to monetize my organic content, it's opened up a sustainable source of income that perfectly complements my YouTube and Instagram. The seamless way of sharing product links makes recommending my favourite styles effortless. Plus, the automation of post comments with Wishlink Engage has saved me countless hours, allowing me to focus on creating content while delivering a great user experience. Wishlink is truly a must-have for any Creator looking to grow and monetize their organic content effortlessly.",
    name: "Vaibhav Keswani",
    insta: "@pehnawah",
    followers: "625k",
    href: "https://www.instagram.com/pehenawah/",
    youtube: "",
    subscribers: "",
  },
  {
    paragraph: "I've been on YouTube for the last 7 years and always wished that there was a platform like Wishlink. It is truly revolutionary as it makes it incredibly simple to share product links in my videos and Instagram DMs. It's much easier for my audience to shop and for me to share links while monetising. I would highly recommend Wishlink to all Creators!",
    name: "Sana Grover",
    insta: "",
    followers: "",
    href: "https://www.youtube.com/@SanaGrover",
    youtube: "@sanagrover",
    subscribers: "505k",
  },
  {
    paragraph: "Wishlink has revolutionized my content creation! As a fashion content Creator, I'm now earning 2-3L per month by sharing and recommending product links on Instagram stories and posts. Monetizing 100% of my content has never been easier. The best part is Wishlink Engage - it automates comments and sends product links directly to my audience's DMs. Plus, Wishlink has played a huge role in my social media growth. I highly recommend it!",
    name: "Naveli Khatri",
    insta: "@navelikhatri",
    followers: "206k",
    href: "https://www.instagram.com/navelikhatrii/",
    youtube: "",
    subscribers: "",
    
  },

];
// const BrandCard2 = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState(0);

//   const handlePrev = () => {
//     setDirection(-1);
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//   };

//   const handleNext = () => {
//     setDirection(1);
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const variants = {
//     enter: (direction) => ({
//       x: direction === 1 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction) => ({
//       x: direction === 1 ? -300 : 300,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="w-full bg-[#F0E4D2] py-10 md:py-20">
//       <motion.div
//         className="flex w-full justify-center mb-8"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.5 }}
//         transition={{ delay: 0.6, duration: 0.5 }}
//         variants={{
//           hidden: { opacity: 0, y: 50 },
//           visible: { opacity: 1, y: 0 },
//         }}
//       >
//         <h3 className="text-3xl md:text-5xl max-w-[56rem] text-black font-bold text-center mb-12">
//           The love we get from our Creators
//         </h3>
//       </motion.div>

//       <div className="relative max-w-full mx-auto sm:max-w-[1050px] h-full lg:h-[610px]  rounded-[30px] bg-gradient-to-r from-[#241404] via-[#241404] to-black p-6 md:p-12 lg:p-16   flex flex-col items-start">
//   <div className="flex flex-col items-center lg:items-start justify-between w-full h-full">
//     <AnimatePresence initial={false} custom={direction}>
//       <motion.div
//         key={currentIndex}
//         className="w-full sm:w-[35rem] text-black mb-10 md:mb-0"
//         custom={direction}
//         initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//       >
//         <p className="text-lg text-[#F2F2F2] md:text-xl leading-5 md:leading-6">
//           {paragraphs[currentIndex].paragraph}
//         </p>

//         <div className="mt-8 md:mt-32">
//           <h2 className="text-[#DE5B11] text-xl md:text-3xl font-bold">
//             {paragraphs[currentIndex].name}
//           </h2>

//           <div className="text-white mt-2 text-lg md:text-[22px] font-medium">
//             {paragraphs[currentIndex].insta ? (
//               <a href={paragraphs[currentIndex].href} target="_blank" rel="noopener noreferrer" className="flex items-center">
//                 <p>{paragraphs[currentIndex].insta} | {instaSvg} {paragraphs[currentIndex].followers} Followers</p>
//               </a>
//             ) : (
//               <a href={paragraphs[currentIndex].href} target="_blank" rel="noopener noreferrer" className="flex items-center">
//                 <p>{paragraphs[currentIndex].youtube} | {instaSvg} {paragraphs[currentIndex].subscribers} Subscribers</p>
//               </a>
//             )}
//           </div>
//         </div>
//       </motion.div>
//     </AnimatePresence>

//     <AnimatePresence initial={false} custom={direction}>
//       <motion.img
//         key={currentIndex}
//         src={images[currentIndex]}
//         alt={`Image ${currentIndex + 1}`}
//         className=" w-[60vw] max-w-[309px] md:w-[40vw] md:max-w-[400px] object-contain mt-10 md:mt-0 lg:absolute lg:bottom-0 lg:right-[-110px]"
//         custom={direction}
//         initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         exit={{ x: direction < 0 ? 300 : -300, opacity: 0 }}
//         transition={{ duration: 0.3 }}
//       />
//     </AnimatePresence>
//   </div>
// </div>



//       <div className="flex justify-between items-center mt-6 mx-6 md:mx-16 lg:mx-64">
//         <div className="flex space-x-2">
//           {images.map((_, index) => (
//             <motion.div
//               key={index}
//               className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
//               animate={{
//                 scale: index === currentIndex ? 1.3 : 1,
//                 backgroundColor: index === currentIndex ? "orange" : "#7f7f7f",
//               }}
//               transition={{ duration: 0.3 }}
//             />
//           ))}
//         </div>

//         <div className="flex space-x-2">
//           <button
//             onClick={handlePrev}
//             className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//           >
//             {leftArrow}
//           </button>
//           <button
//             onClick={handleNext}
//             className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
//           >
//             {rightArrow}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };


const BrandCard2 = () => {
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

  const textVariants = {
    enter: (direction) => ({
      x: direction === 1 ? '150%' : '-150%', // Start from off-screen
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction === 1 ? '-150%' : '150%', // Exit to off-screen
      opacity: 0,
    }),
  };

  return (
    <section className="w-full bg-[#F0E4D2] py-10 md:py-20 overflow-hidden">
      <motion.div
        className="flex w-full justify-center mb-8 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <h3 className="text-3xl md:text-5xl max-w-[56rem] text-black font-bold text-center mb-12">
          The love we get from our Creators
        </h3>
      </motion.div>

      <div className="relative max-w-full mx-auto sm:max-w-[1050px] h-full lg:h-[610px] overflow-hidden rounded-[30px] bg-gradient-to-r from-[#241404] via-[#241404] to-black p-6 md:p-12 lg:p-16 flex flex-col items-start">
        <div className="flex flex-col items-center lg:items-start justify-between w-full h-full overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              className="w-full sm:w-[35rem] text-black mb-10 md:mb-0 overflow-hidden"
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={textVariants}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p className="text-lg text-[#F2F2F2] md:text-xl leading-5 md:leading-6">
                {paragraphs[currentIndex].paragraph}
              </p>

              <div className="mt-8 md:mt-32">
                <h2 className="text-[#DE5B11] text-xl md:text-3xl font-bold">
                  {paragraphs[currentIndex].name}
                </h2>

                <div className="text-white mt-2 text-lg md:text-[22px] font-medium">
                  {paragraphs[currentIndex].insta ? (
                    <a href={paragraphs[currentIndex].href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p>{paragraphs[currentIndex].insta} | {instaSvg} {paragraphs[currentIndex].followers} Followers</p>
                    </a>
                  ) : (
                    <a href={paragraphs[currentIndex].href} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <p>{paragraphs[currentIndex].youtube} | {instaSvg} {paragraphs[currentIndex].subscribers} Subscribers</p>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-[60vw] max-w-[309px] md:w-[40vw] md:max-w-[400px] object-contain mt-10 md:mt-0 lg:absolute lg:bottom-0 lg:right-[-110px]"
              custom={direction}
              initial={{ x: direction > 0 ? '150%' : '-150%', opacity: 0 }} // Adjust to start from off-screen
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction < 0 ? '150%' : '-150%', opacity: 0 }} // Adjust to exit off-screen
              transition={{ duration: 0.6 }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation controls here */}
      <div className="flex justify-between items-center mt-6 mx-6 md:mx-16 lg:mx-64">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-500"}`}
              animate={{
                scale: index === currentIndex ? 1.3 : 1,
                backgroundColor: index === currentIndex ? "orange" : "#7f7f7f",
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
          >
            {leftArrow}
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center w-10 h-10 sm:w-[3.5rem] sm:h-[3.5rem] border border-black rounded-full hover:bg-gray-200"
          >
            {rightArrow}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandCard2;

