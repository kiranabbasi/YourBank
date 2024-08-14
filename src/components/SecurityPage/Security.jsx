import React, { useState, useEffect, useRef } from 'react'
import Securityheroimg from './securityheroimg.png';
import Rightbgimg from '../../assets/box2bg.png';
import Footer from '../CommonSections/Footer.jsx';
import BenefitIcon1 from '../../assets/bussinessicon1.svg';
import BenefitIcon2 from '../../assets/benefiticon2.svg';
import BenefitIcon3 from '../../assets/producticon1.svg';
import BenefitIcon4 from '../../assets/benefiticon4.svg';
import Cardbgimg from '../../assets/cardbgimg.png';
import FooterLogin from '../CommonSections/FooterLogin.jsx';
import Testimonials from '../CommonSections/Testimonals.jsx';

const Security = () => {
  const [IsSecurityTransitioning, setIsSecurityTransitioning] = useState(false);
  const SecurityTransitioningRef = useRef(null);

  useEffect(() => {
    const SecurityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecurityTransitioning(true);
          SecurityObserver.unobserve(entry.target); // Unobserve after transition is triggered
        }
      },
      {
        threshold: 0.1,
      }
    );

    const timeoutId = setTimeout(() => {
      if (SecurityTransitioningRef.current) {
        SecurityObserver.observe(SecurityTransitioningRef.current);
      }
    }, 100); // Adjust the delay as needed

    return () => {
      clearTimeout(timeoutId);
      if (SecurityTransitioningRef.current) {
        SecurityObserver.unobserve(SecurityTransitioningRef.current);
      }
    };
  }, []);
  return (
    <div className='mt-10 xl:w-4/5 sm:w-11/12 sm:mx-auto mx-3 '>
      <div className='relative lg:w-full md:w-4/5 m-auto'>
        <img className='absolute right-0 w-96 top-0' src={Rightbgimg} alt="bgimg" />
        <div id='CareersHero'>
          <div className='flex lg:justify-end lg:flex-row flex-col xl:py-16 sm:py-12 py-4 xl:px-16 sm:px-12 px-4  w-full relative bg-customGray bg-opacity-25 rounded-xl' >
          <div className='lg:w-3/5 relative lg:h-full sm:h-72 h-56 '>
              <img className='w-full' src={Securityheroimg} alt="bgimg" />
            </div>
            <div className='lg:w-1/2 lg:rounded-none rounded-3xl lg:rounded-br-[90px]  p-12 md:px-12 sm:px-8  z-30 lg:absolute lg:text-left text-center  xl:top-16 lg:top-12 lg:bottom-28  -bottom-28   xl:left-16 left-12 lg:right-0 right-12  bg-[#1E1E1E] flex flex-col gap-6'>
              <p className='xl:text-5xl md:text-4xl sm:text-3xl text-2xl'>Your Security is our <span className='text-secondary'>Top Priority</span>
              </p>
              <p className='text-zinc-300 md:text-sm text-xs  xl:pr-8 pr-0 font-extralight'>
                At YourBank, we understand the importance of keeping your financial information secure. We employ robust security measures and advanced technologies to protect your personal and financial data. Rest assured that when you bank with us, your security is our utmost priority.
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div>
        <div className='mt-20 lg:text-left text-center'>
          <p className='text-4xl my-5'>How We <span className='text-secondary'>Protect you</span></p>
          <p className='text-zinc-300 text-sm font-extralight md:w-3/4 lg:mx-0 mx-auto  mb-10'>At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times</p>
        </div>
        <div className='relative grid md:grid-cols-2 lg:gap-10 md:gap-3 gap-10 mt-10 lg:p-20 md:p-10 p-10  rounded-3xl ' ref={SecurityTransitioningRef}>
        <div className='absolute top-0 left-0 bottom-0 border border-primary rounded-[55px]'>
              <img className='h-full' src={Cardbgimg} alt="bgimg" />
            </div>
          <div className={`relative rounded-3xl lg:p-10 md:p-7 p-10 border border-primary hover:scale-105 duration-[1500ms] hover:shadow-xl ${IsSecurityTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
            <div className='absolute top-0 left-0 z-20 '>
              <img className='' src={Cardbgimg} alt="bgimg" />
            </div>
            <div className='flex gap-4 items-center text-xl mb-10 font-light z-50 relative'>
              <img className='w-16' src={BenefitIcon1} alt="" />
              <p >Competitive Compensation </p>
            </div>
            <p className='text-zinc-300 text-sm font-extralight relative z-50'>
              We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.
            </p>
          </div>
          <div className={`relative rounded-3xl  lg:p-10 md:p-7 p-10 hover:scale-105 duration-[1500ms] hover:shadow-xl border border-primary  ${IsSecurityTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
          <div className='absolute top-0 left-0 z-20 '>
              <img src={Cardbgimg} alt="bgimg" />
            </div>
            <div className='flex gap-4 items-center text-xl mb-10 font-light relative z-50'>
              <img className='w-16' src={BenefitIcon2} alt="" />
              <p>Health and Wellness</p>
            </div>
            <p className='text-zinc-300 text-sm font-extralight relative z-50'>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
          </div>
          <div className={`relative rounded-3xl lg:p-10 md:p-7 p-10 border border-primary  hover:scale-105 duration-[1500ms] hover:shadow-xl ${IsSecurityTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
          <div className='absolute top-0 left-0 z-20 '>
              <img src={Cardbgimg} alt="bgimg" />
            </div>
            <div className='flex gap-4 items-center text-xl mb-10 font-light relative z-50'>
              <img className='w-16' src={BenefitIcon3} alt="" />
              <p>Retirement Planning</p>
            </div>
            <p className='text-zinc-300 text-sm font-extralight relative z-50'>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
          </div>
          <div className={`relative  rounded-3xl lg:p-10 md:p-7 p-10 border border-primary hover:scale-105 duration-[1500ms] hover:shadow-xl ${IsSecurityTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-60 opacity-0'}`}>
          <div className='absolute top-0 left-0 z-20 '>
              <img src={Cardbgimg} alt="bgimg" />
            </div>
            <div className='flex gap-4 items-center text-xl mb-10 font-light relative z-50'>
              <img className='w-16' src={BenefitIcon4} alt="" />
              <p>Work-Life Balance</p>
            </div>
            <p className='text-zinc-300 text-sm font-extralight relative z-50'>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
          </div>
        </div>
      </div>
      <div>
        <Testimonials/>
      </div>
      <div>
        <FooterLogin/>
      </div>

      <div className='absolute max-w-full min-w-full left-0'>
        <Footer />
      </div>
    </div>
  )
}

export default Security
