import React from 'react'
import FAQs from '../components/FAQ'
import BrandHeader from '../components/BrandHeader'
import Spotlight from '../components/Spotlight'
import ProofAndPartners from '../components/ProofAndPartners'
import BrandCard1 from '../components/BrandCard1'
import BrandCard2 from '../components/BrandCard2'
import CreatorEconomy from '../components/CreatorEconomy'
import Footer from '../components/Footer'
import OurPartnerCards from '../components/OurPartnerCards'
const Brand = () => {
  return (
    <>
    <BrandHeader/>
    <ProofAndPartners/>
    <CreatorEconomy/>
    <BrandCard1/>
    <BrandCard2/>
    <Spotlight/>
    <FAQs />
    <Footer/>

    <OurPartnerCards/>
    </>
  )
}

export default Brand