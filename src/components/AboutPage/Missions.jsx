import React, { useState, useEffect, useRef } from 'react';
import Missionimg1 from './missionimg1.png';
import Missionimg2 from './missionimg2.png';
import Bgimg1 from './missionbg1.png';
import bgimg2 from './missionbg2.png';
import Pressimg1 from './pressimg1.png';
import Pressimg2 from './pressimg2.png';
import Pressimg3 from './pressimg3.png';
import Pressimg4 from './pressimg4.png';

const Missions = () => {
  const [IsMissionTransitioning, setIsMissionTransitioning] = useState(false);
  const [IsPressTransitioning, setIsPressTransitioning] = useState(false);
  const MissionTransitioningRef = useRef(null);
  const PressTransitioningRef = useRef(null);

  useEffect(() => {
    const MissionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMissionTransitioning(true);
          MissionObserver.unobserve(entry.target); // Unobserve after transition is triggered
        }
      },
      {
        threshold: 0.1,
      }
    );

    const PressObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsPressTransitioning(true);
          PressObserver.unobserve(entry.target); // Unobserve after transition is triggered
        }
      },
      {
        threshold: 0.1,
      }
    );

    const timeoutId = setTimeout(() => {
      if (MissionTransitioningRef.current) {
        MissionObserver.observe(MissionTransitioningRef.current);
      }
      if (PressTransitioningRef.current) {
        PressObserver.observe(PressTransitioningRef.current);
      }
    }, 1000); // Adjust the delay as needed

    return () => {
      clearTimeout(timeoutId);
      if (MissionTransitioningRef.current) {
        MissionObserver.unobserve(MissionTransitioningRef.current);
      }
      if (PressTransitioningRef.current) {
        PressObserver.unobserve(PressTransitioningRef.current);
      }
    };
  }, []);

  return (
    <div className='mt-20'>
      <div className='lg:text-left text-center'>
        <p className='text-secondary text-3xl my-4'>Mission & Vision</p>
        <p className='text-zinc-300 text-sm lg:w-4/5 sm:w-3/5    lg:m-0 m-auto  text-light'>
          We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development.
        </p>
      </div>
      <div >
        <div className={`flex lg:flex-row flex-col mt-14 lg:gap-14  lg:w-full md:w-3/5 m-auto ${IsMissionTransitioning ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'} transition-all duration-[2000ms]`}>
          <div className='relative lg:w-2/5  m-auto ' ref={MissionTransitioningRef}>
            <div className='border border-zinc-800 rounded-3xl '><img src={Bgimg1} alt="Bgimg" /></div>
            <div className='absolute top-[60px] left-10 right-10 '><img className='lg:border-b-0 border-b-2 border-secondary' src={Missionimg1} alt="img" /></div>
          </div>
          <div className='lg:w-3/5 lg:mt-40 mt-14 flex lg:gap-10  lg:text-left text-center '>
            <div className='bg-secondary w-[2px]  lg:block hidden'></div>
            <div className='lg:w-3/5'>
              <p className='text-3xl mb-3'>Mission</p>
              <p className='text-zinc-300 font-light'>
                At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
              </p>
            </div>
          </div>
        </div>
        <div className={`flex lg:flex-row-reverse flex-col mt-14 mb-32 gap-2 lg:w-full md:w-3/5 m-auto  ${IsMissionTransitioning ? 'translate-x-0 opacity-100' : '-translate-x-40 opacity-0'} transition-all duration-[3000ms]`}>
          <div className='relative lg:w-2/5 m-auto'>
            <div className='border border-zinc-800 rounded-3xl'><img src={bgimg2} alt="Bgimg" /></div>
            <div className='absolute top-[60px] left-10 right-10'><img className='lg:border-b-0 border-b-2 border-secondary' src={Missionimg2} alt="img" /></div>
          </div>
          <div className='lg:w-3/5 lg:mt-48 mt-14 flex gap-10 lg:text-left text-center' >
            <div >
              <p className='text-3xl mb-3'>Vision</p>
              <p className='text-zinc-300 font-light'>
                Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
              </p>
            </div>
            <div className='bg-secondary w-[2px] lg:block hidden'></div>
          </div>

        </div>
      </div>
      <div>
        <div className=' mb-16 lg:text-left text-center'>
          <p className='text-secondary text-3xl my-4'>Press Releases</p>
          <p className='text-zinc-300 text-sm w-4/5 lg:mx-0 mx-auto text-light'>
            Stay updated with the latest happenings and exciting developments at YourBank through our press releases.
          </p>
        </div>
        <div className={`grid md:grid-cols-2 gap-5 ${IsPressTransitioning ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-40 opacity-0 scale-90 '} transition-all duration-[1500ms]`} ref={PressTransitioningRef}>
          <div className='bg-zinc-800 bg-opacity-40 rounded-3xl p-6 text-base font-extralight border border-zinc-800'>
            <img src={Pressimg1} alt="img" />
            <p className='font-light text-xl mt-4'>YourBank Launches New Rewards Program to Enhance Customer Loyalty and Satisfaction</p>
            <div className='flex gap-2 my-2'>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'> Location: Pakistan</p>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'>Date: 06/11/24</p>
            </div>
            <p className='text-zinc-300 mb-5'>
              YourBank is pleased to announce the introduction of our new Rewards Program, aimed at rewarding our loyal customers and enhancing their banking experience. The program offers exclusive benefits, discounts, and personalized offers tailored to individual customer preferences. With this initiative, YourBank reaffirms its commitment to delivering exceptional value and building lasting relationships with our valued customers.
            </p>
          </div>

          <div className='bg-zinc-800 bg-opacity-40 rounded-3xl p-6 text-base font-extralight border border-zinc-800'>
            <img src={Pressimg2} alt="img" />
            <p className='font-light text-xl mt-4'>YourBank Expands Branch Network with Opening of New Location in Chennai</p>
            <div className='flex gap-2 my-2'>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'> Location: Pakistan</p>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'>Date: 12/11/2024</p>
            </div>
            <p className='text-zinc-300 mb-5'>
              YourBank is excited to announce the grand opening of our newest branch in [City]. This expansion is a testament to our continued commitment to serving our customers and providing them with convenient access to our comprehensive range of banking services. The new branch will feature state-of-the-art facilities, a team of dedicated professionals, and a personalized approach to banking, further strengthening our presence in the local community.
            </p>
          </div>

          <div className='bg-zinc-800 bg-opacity-40 rounded-3xl p-6 text-base font-extralight border border-zinc-800'>
            <img src={Pressimg3} alt="img" />
            <p className='font-light text-xl mt-4'>YourBank Partners with Local Nonprofit to Support Financial Education Initiatives</p>
            <div className='flex gap-2 my-2'>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'> Location: Pakistan</p>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'>Date: 24/12/2024</p>
            </div>
            <p className='text-zinc-300 mb-5'>
              YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
            </p>
          </div>

          <div className='bg-zinc-800 bg-opacity-40 rounded-3xl p-6 text-base font-extralight border border-zinc-800'>
            <img src={Pressimg4} alt="img" />
            <p className='font-light text-xl mt-4'>YourBank Launches Sustainable Banking Initiative to Promote Environmental Responsibility</p>
            <div className='flex gap-2 my-2'>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'> Location: Pakistan</p>
              <p className='border border-zinc-800 bg-[#1E1E1E] p-2 rounded-full text-sm text-zinc-300'>Date: 28/12/2024</p>
            </div>
            <p className='text-zinc-300 mb-5'>
              YourBank is excited to unveil our new Sustainable Banking Initiative, demonstrating our commitment to environmental responsibility. This initiative includes a range of sustainable banking products and services, such as green loans, eco-friendly investment options, and paperless banking solutions. By incorporating sustainable practices into our operations, we aim to contribute to a greener future while providing innovative banking solutions to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Missions;
