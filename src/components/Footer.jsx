import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#F0E4D2]'>
      <footer className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://cdn.prod.website-files.com/666285153da630124c201ec0/6667bc00241d5c033fa7c729_Gacrux%20(2).webp')", backgroundSize: '60%' }}>
        <div className='w-full max-w-7xl mx-auto '>
          <div className='flex flex-col lg:grid gap-20 lg:grid-cols-2 gap-x-[4vw] p-8 md:p-12 rounded-tl-[4rem] rounded-tr-[4rem] lg:rounded-tl-[4rem] lg:rounded-tr-[4rem] rounded-bl-0 rounded-br-0 shadow '>
            <div className='flex flex-col items-center md:items-start'>
              <Link to="https://www.wishlink.com/">
                <img src="https://cdn.prod.website-files.com/666285153da630124c201ec0/6667c21204782fca0e063277_3rd.svg" alt="" />
              </Link>

              <div className='w-full pt-5 md:pt-6 lg:pt-8'></div>
              <div className='text-black'>Copyright © 2024, All Right Reserved</div>
              <div className='w-full pt-5 md:pt-6 lg:pt-8'></div>

              <Link to="https://maps.app.goo.gl/yJo3mSjTuWR6Y6bJ9" className='py-2 w-full max-w-80 hover:text-orange-500'>
                <div className='text-black'>
                  <strong>Creatormon Private Limited</strong><br />
                  944, Block C, Sushant Lok Phase 1 <br />
                  Gurugram, Haryana, 122001
                </div>
              </Link>
            </div>

            <div className='grid gap-x-8 gap-y-4 grid-rows-[auto_auto] grid-cols-3 items-start'>
              {/* Company Links */}
              <div className="flex flex-col md:items-start items-center justify-start text-black">
                <div className='font-bold sm:mb-[0.2rem] text-xl '>
                  Company
                </div>
                <Link to="/" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  For Creators
                </Link>
                <Link to="/w/brand" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  For Brands
                </Link>
                <Link to="/w/about-us" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  About Us
                </Link>
              </div>

              {/* Resources Links */}
              <div className="flex flex-col md:items-start items-center justify-start text-black">
                <div className='font-bold sm:mb-[0.2rem] text-xl '>
                  Resources
                </div>
                <Link to="/w/case-studies" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Blogs
                </Link>
                <Link to="/w/case-studies" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Case Studies
                </Link>
                <Link to="https://wishlink.keka.com/careers/" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Careers
                </Link>
              </div>

              {/* Social Media and Policies */}
              <div className="flex flex-col md:items-start items-center justify-start text-black xs:col-span-2 xs:row-span-1">
                <div className='grid gap-x-3 gap-y-0 whitespace-normal grid-rows-[auto] grid-cols-[max-content] auto-cols-[max-content] grid-flow-col place-items-start mb-2'>
                  <Link to="https://www.facebook.com/share/udy55UesjTSm4a3B/?mibextid=LQQJ4d" className='hover:text-orange-500'>
                    <FaFacebook />
                  </Link>
                  <Link to="https://www.instagram.com/connect.wishlink?igsh=MTNvNmU5a3RtdWZ3Mg==" className='hover:text-orange-500'>
                    <FaInstagram />
                  </Link>
                  <Link to="https://www.linkedin.com/company/shop-wishlink/" className='hover:text-orange-500'>
                    <FaLinkedin />
                  </Link>
                </div>
                <Link to="/w/privacy-policy" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Privacy Policy
                </Link>
                <Link to="/w/cookie-policy" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Cookie Policy
                </Link>
                <Link to="/w/terms-of-service" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  Terms of Services
                </Link>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col md:items-start items-center justify-start text-black xs:col-span-2 xs:row-span-1">
                <div className='font-bold sm:mb-[0.2rem] text-xl '>
                  Talk To us
                </div>
                <Link to="mailto:info@wishlink.com" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  info@wishlink.com
                </Link>
                <div className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm">
                  +91 98104 92885
                </div>
              </div>

              {/* Grievances */}
              <div className="flex flex-col md:items-start items-center justify-start text-black xs:row-start-4 xs:row-end-5 xs:col-start-1 xs:col-end-3">
                <div className='font-bold mb-[0.2rem] text-xl '>
                  For grievances:
                </div>
                <div className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm">
                  Shaurya Gupta
                </div>
                <Link to="mailto:grievances@wishlink.com" className="font-medium no-underline pt-[0.3rem] pb-[0.3rem] text-sm hover:text-orange-500">
                  grievances@wishlink.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;