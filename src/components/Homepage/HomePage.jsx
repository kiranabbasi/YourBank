import React from 'react'
import Topbg from '../../assets/topleft.png';
import HeroPage from './HeroPage.jsx';
import ProductsSection from './Products.js';
import FeatureSection from './Features.jsx'
import Testimonals from '../CommonSections/Testimonals.jsx';
import FooterLogin from '../CommonSections/FooterLogin.jsx';
import Footer from  '../CommonSections/Footer.jsx';

const HomePage = () => {
    return (
        <div className='xl:w-4/5 md:w-11/12 m-auto mt-16 '>
            <img className='w-2/6  absolute top-0 left-0' src={Topbg} alt="bg-img" />
            <div>
                <HeroPage />
            </div>
            <div>
                <ProductsSection/>
            </div>
            <div>
                <FeatureSection/>
            </div>
            <div>
                <Testimonals/>
            </div>
            <div>
                <FooterLogin/>
            </div>
            <div className='absolute max-w-full min-w-full left-0'> 
                <Footer/>
            </div> 
        </div>
    )
}

export default HomePage
