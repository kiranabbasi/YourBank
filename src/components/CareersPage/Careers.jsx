import React from 'react';
import Careersheroimg from './careersbgimg1.png';
import Rightbgimg from '../../assets/box2bg.png';
import Values from './Values.jsx';
import Jobs from './Jobs.jsx';
import FooterLogin from '../CommonSections/FooterLogin.jsx';
import Footer from '../CommonSections/Footer.jsx';


const Careers = () => {

  return (
    <div className='mt-10 xl:w-4/5 sm:w-11/12 sm:mx-auto mx-3 '>
      <div className='relative lg:w-full md:w-4/5 m-auto'>
        <img className='absolute right-0 w-96 top-0' src={Rightbgimg} alt="bgimg" />
        <div id='CareersHero ' className=''>
        <div className='flex lg:justify-end lg:flex-row flex-col xl:py-16 sm:py-12 py-4 xl:px-16 sm:px-12 px-3  w-full relative bg-customGray bg-opacity-25 rounded-xl ' >
          <div className='lg:w-3/5 relative lg:h-full sm:h-72 h-56'>
              <img className='w-full ' src={Careersheroimg} alt="bgimg" />
            </div> 
            <div className='lg:w-1/2 lg:rounded-none rounded-3xl lg:rounded-br-[90px]  p-12 md:px-12 sm:px-8  z-30 lg:absolute lg:text-left text-center  xl:top-16 lg:top-12 lg:bottom-28  -bottom-28   xl:left-16 left-12 lg:right-0 right-12  bg-[#1E1E1E] flex flex-col gap-6'>
              <p className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl '>
                Welcome To <span className='text-secondary'>YourBank</span> Careers
              </p>
              <p className='text-zinc-300 md:text-sm text-xs  xl:pr-8 pr-5 font-extralight '>
                Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <Values />
      </div>
      <div>
        <Jobs />
      </div>
      <div>
        <FooterLogin />
      </div>
      <div className='absolute max-w-full min-w-full left-0'>
        <Footer />
      </div>
    </div>

  );
}

export default Careers;
