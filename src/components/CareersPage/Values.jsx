import React, { useState, useEffect, useRef } from 'react'
import BenefitIcon1 from '../../assets/bussinessicon3.svg'
import BenefitIcon2 from '../../assets/benefiticon2.svg'
import BenefitIcon3 from '../../assets/producticon1.svg'
import BenefitIcon4 from '../../assets/benefiticon4.svg'

const Values = () => {
    const [IsValuesTransitioning, setIsValuesTransitioning] = useState(false);
    const [IsBenefitTransitioning, setIsBenefitTransitioning] = useState(false);
    const ValuesTransitioningRef = useRef(null);
    const BenefitTransitioningRef = useRef(null);

    useEffect(() => {
        const valuesObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsValuesTransitioning(true);
                    valuesObserver.unobserve(entry.target); // Unobserve after transition is triggered
                }
            },
            {
                threshold: 0.1,
            }
        );

        const benefitsObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsBenefitTransitioning(true);
                    benefitsObserver.unobserve(entry.target); // Unobserve after transition is triggered
                }
            },
            {
                threshold: 0.1,
            }
        );

        const timeoutId = setTimeout(() => {
            if (ValuesTransitioningRef.current) {
                valuesObserver.observe(ValuesTransitioningRef.current);
            }
            if (BenefitTransitioningRef.current) {
                benefitsObserver.observe(BenefitTransitioningRef.current);
            }
        }, 100); // Adjust the delay as needed

        return () => {
            clearTimeout(timeoutId);
            if (ValuesTransitioningRef.current) {
                valuesObserver.unobserve(ValuesTransitioningRef.current);
            }
            if (BenefitTransitioningRef.current) {
                benefitsObserver.unobserve(BenefitTransitioningRef.current);
            }
        };
    }, []);

    return (
        <div className='sm:mt-32 mt-20  duration-1000 transition-all   '>
            <div>
                <div className='lg:text-left text-center'>
                    <p className='text-4xl my-6'>Our <span className='text-secondary'>Values</span></p>
                    <p className='text-zinc-300 text-sm font-extralight w-3/4 mb-20  lg:mx-0 mx-auto'>
                        At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
                    </p>
                </div>
                <div className='grid md:grid-cols-2 lg:gap-20 md:gap-5 gap-20 md:w-full sm:w-3/4 w-11/12  mx-auto ' ref={ValuesTransitioningRef}>
                    <div className={`flex gap-5 hover:scale-105 duration-1000 ${IsValuesTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className=' bg-secondary w-[2px]'></div>
                        <div className='flex flex-col gap-6 pt-4'>
                            <p className='lg:text-5xl text-4xl  text-zinc-700'>Integrity</p>
                            <p className='text-zinc-300 text-sm font-extralight '>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
                        </div>
                    </div>
                    <div className={`flex gap-5 hover:scale-105 duration-1000 ${IsValuesTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className=' bg-secondary w-[2px]'></div>
                        <div className='flex flex-col gap-6 pt-4'>
                            <p className='lg:text-5xl text-4xl  text-zinc-700'>Centricity</p>
                            <p className='text-zinc-300 text-sm font-extralight '>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
                        </div>
                    </div>
                    <div className={`flex gap-5 hover:scale-105 duration-1000 ${IsValuesTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className=' bg-secondary w-[2px]'></div>
                        <div className='flex flex-col gap-6 pt-4'>
                            <p className='lg:text-5xl text-4xl  text-zinc-700'>Collaboration</p>
                            <p className='text-zinc-300 text-sm font-extralight '>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
                        </div>
                    </div>
                    <div className={`flex gap-5 hover:scale-105 duration-1000 ${IsValuesTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className='bg-secondary w-[2px]'></div>
                        <div className='flex flex-col gap-6 pt-4'>
                            <p className='lg:text-5xl text-4xl  text-zinc-700'>Innovation</p>
                            <p className='text-zinc-300 text-sm font-extralight '>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='mt-20 lg:text-left text-center'>
                    <p className='text-4xl my-5'>Our <span className='text-secondary'>Benefits</span></p>
                    <p className='text-zinc-300 text-sm font-extralight w-3/4 mb-10 lg:mx-0 mx-auto'>At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-16 mt-20' ref={BenefitTransitioningRef}>
                    <div className={`bg-customGray bg-opacity-30 rounded-xl rounded-tl-[60px] rounded-br-[60px] bg-gradient-to-tl p-10 to-primary from-customGray via-customGray border-primary shadow-inner shadow-primary hover:scale-105 duration-1000 hover:shadow-xl ${IsBenefitTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className='flex gap-4 items-center text-xl mb-10 font-light'>
                            <img className='w-16' src={BenefitIcon1} alt="" />
                            <p>Competitive Compensation</p>
                        </div>
                        <p className='text-zinc-300 text-sm font-extralight'>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
                    </div>
                    <div className={`bg-customGray bg-opacity-30 rounded-xl rounded-bl-[60px] rounded-tr-[60px] bg-gradient-to-tl p-10 to-primary from-customGray via-customGray border-primary shadow-inner shadow-primary hover:scale-105 duration-1000 hover:shadow-xl ${IsBenefitTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className='flex gap-4 items-center text-xl mb-10 font-light'>
                            <img className='w-16' src={BenefitIcon2} alt="" />
                            <p>Health and Wellness</p>
                        </div>
                        <p className='text-zinc-300 text-sm font-extralight'>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
                    </div>
                    <div className={`bg-customGray rounded-xl rounded-bl-[60px] rounded-tr-[60px] bg-gradient-to-tl p-10 to-primary from-customGray via-customGray border-primary shadow-inner shadow-primary hover:scale-105 duration-1000 hover:shadow-xl bg-opacity-30 ${IsBenefitTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className='flex gap-4 items-center text-xl mb-10 font-light'>
                            <img className='w-16' src={BenefitIcon3} alt="" />
                            <p>Retirement Planning</p>
                        </div>
                        <p className='text-zinc-300 text-sm font-extralight'>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
                    </div>
                    <div className={`bg-customGray bg-opacity-30 rounded-xl rounded-tl-[60px] rounded-br-[60px] bg-gradient-to-tl p-10 to-primary from-customGray via-customGray border-primary shadow-inner shadow-primary hover:scale-105 duration-1000 hover:shadow-xl ${IsBenefitTransitioning ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'}`}>
                        <div className='flex gap-4 items-center text-xl mb-10 font-light'>
                            <img className='w-16' src={BenefitIcon4} alt="" />
                            <p>Work-Life Balance</p>
                        </div>
                        <p className='text-zinc-300 text-sm font-extralight'>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Values
