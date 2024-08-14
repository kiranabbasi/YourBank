import React from 'react';
import Aboutheroimg from './Aboutheroimg.png';
import Rightbgimg from '../../assets/box2bg.png';
import Footer from '../CommonSections/Footer.jsx';
import Missions from './Missions.jsx';

const About = () => {
  return (
    <div className='mt-10 xl:w-4/5 sm:w-11/12 sm:mx-auto mx-3 '>
      <div className='relative lg:w-full md:w-4/5 m-auto '>
      <img className='absolute right-0 w-96 top-0' src={Rightbgimg} alt="bgimg" />
      <div id='AboutHero'>
        <div className='flex lg:justify-end lg:flex-row flex-col xl:py-16 sm:py-12 py-4 xl:px-16 sm:px-12 px-4 w-full relative bg-customGray bg-opacity-25 rounded-xl' >
        <div className='lg:w-3/5 relative lg:h-full sm:h-72 h-56'>
            <img className='w-full' src={Aboutheroimg} alt="bgimg" />
          </div>
          <div className='lg:w-1/2 lg:rounded-none rounded-3xl lg:rounded-br-[90px]  p-12 md:px-12 sm:px-8  z-30 lg:absolute lg:text-left text-center  xl:top-16 lg:top-12 lg:bottom-28  -bottom-28   xl:left-16 left-12 lg:right-0 right-12  bg-[#1E1E1E] flex flex-col gap-6'>
            <p>Welcome to YourBank</p>
            <p className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl '>
            Where Banking Meets <span className='text-secondary'>Excellence!</span>
            </p>
            <p className='text-zinc-300 md:text-sm text-xs  xl:pr-8 pr-0 font-extralight'>
            At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. Join us on this exciting journey and discover a new level of banking excellence.
            </p>
          </div> 
          
        </div>
      </div>
      </div>
      <div>
        <Missions />
      </div>
     
      <div className='absolute max-w-full min-w-full left-0'>
        <Footer />
      </div>
    </div>
  )
}

export default About
