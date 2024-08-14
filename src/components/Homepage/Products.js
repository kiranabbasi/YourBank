import React, { useState } from 'react';
import Producticon1 from '../../assets/producticon1.svg';
import Producticon2 from '../../assets/producticon2.svg';
import Producticon3 from '../../assets/producticon3.svg';
import Individualicon1 from '../../assets/indvidiualicon1.svg';
import Individualicon2 from '../../assets/indvidiualicon2.svg';
import Individualicon3 from '../../assets/indvidiualicon3.svg';
import Individualicon4 from '../../assets/indvidiualicon4.svg';
import Bussinessicon1 from '../../assets/bussinessicon1.svg';
import Bussinessicon2 from '../../assets/bussinessicon2.svg';
import Bussinessicon3 from '../../assets/bussinessicon3.svg';
import Bussinessicon4 from '../../assets/bussinessicon4.svg';
import Individualbg from '../../assets/box1bg.png';
import Bussinessbg from '../../assets/box2bg.png';
import PercentageCounter from './Counter.js';


const Products = () => {
    const [activetab, setActiveTab] = useState('forindividual');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div>
            <div className='flex flex-col gap-20 mt-32 '>
                <div className='flex flex-col gap-5'>
                    <div className='flex min-[900px]:flex-row flex-col items-center '>
                        <div className='flex flex-col gap-3 min-[900px]:text-left text-center '>
                            <p className='text-4xl'>Our <span className='text-secondary'>Products</span></p>
                            <p className='w-4/5 min-[900px]:m-0 m-auto text-xm font-extralight text-zinc-300'>
                                Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.
                            </p>
                        </div>
                        <div className='border border-zinc-700 rounded-full  p-2 bg-customGray font-normal w-72 m-6'>
                            <div className='tab-container flex gap-3'>
                                <div className={`tab-bg ${activetab === 'forindividual' ? 'left-0' : 'left-50'}`}></div>
                                <button
                                    className={` rounded-full py-1 px-4 duration-700 ${activetab === 'forindividual' ? 'text-black' : 'text-white'}`}
                                    onClick={() => handleTabChange('forindividual')}
                                >
                                    For Individuals
                                </button>
                                <button
                                    className={`rounded-full py-1 px-4 duration-700 ${activetab === 'forbussiness' ? 'text-black' : 'text-white'}`}
                                    onClick={() => handleTabChange('forbussiness')}
                                >
                                    For Business
                                </button>
                            </div>
                        </div>
                    </div>
                    <div id='forindividual' className={` ${activetab === 'forindividual' ? 'block' : 'hidden'}`}>
                        <div className=' flex items-center text-center mt-8 min-[900px]:flex-row flex-col min-[900px]:gap-0 gap-10'>
                            <div className='p-4 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5'>
                                <img className='w-16 m-auto ' src={Producticon1} alt="icon" />
                                <p>Checking Accounts</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300  px-10'>Enjoy easy and convenient access to your funds with our range of checking account options.</p>
                            </div>
                            <div className='p-4 min-[900px]:py-0 py-10 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5 min-[900px]:border-x-2 min-[900px]:border-y-0 border-y-2 border-zinc-800'>
                                <img className='w-16 m-auto ' src={Producticon2} alt="icon" />
                                <p>Savings Accounts</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300 px-14'>Build your savings with our competitive interest rates and flexible savings account options.we have the right account for you.</p>
                            </div>
                            <div className='p-4 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5'>
                                <img className='w-16 m-auto ' src={Producticon3} alt="icon" />
                                <p>Loans and Mortgages</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300 px-14'>Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages.</p>
                            </div>
                        </div>
                        <div className='min-[900px]:text-left text-center'>
                            <p className='text-4xl text-secondary pt-32 pb-4'>Use Cases</p>
                            <p className='w-4/5 min-[900px]:m-0 m-auto text-xm font-extralight text-zinc-300  pb-4'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                            <div className='flex my-10 min-[900px]:flex-row flex-col min-[900px]:w-full sm:w-4/6 w-11/12 min-[900px]:mx-0 mx-auto min-[900px]:gap-0 gap-5 '>

                                <div className='w-full lg:h-full h-1/2  bg-customGray bg-opacity-40 flex gap-2 lg:py-16 py-10 lg:px-4  flex-wrap items-center justify-center  m-4 ml-0 rounded-xl relative' >
                                    <img className='h-23 w-40 absolute top-0 left-0 z-10' src={Individualbg} alt="" />
                                    <div className='w-5/12 h-1/2  lg:p-6 p-5  bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800 z-50'>
                                        <img className='w-16' src={Individualicon1} alt="icon" />
                                        <p>Managing Finances</p>
                                    </div>
                                    <div className='w-5/12 h-1/2  lg:p-6 p-5 bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800'>
                                        <img src={Individualicon2} alt="icon" />
                                        <p>Saving for future</p>
                                    </div>
                                    <div className='w-5/12 h-1/2  lg:p-6 p-5  bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800'>
                                        <img src={Individualicon3} alt="icon" />
                                        <p>Home OwnerShip</p>
                                    </div>
                                    <div className='w-5/12 h-1/2  lg:p-6 p-5  bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800'>
                                        <img src={Individualicon4} alt="icon" />
                                        <p>Education Funding</p>
                                    </div>
                                </div>
                                <div className='w-full px-8 py-4'>
                                    <p className='text-2xl pb-5 pt-4'>For Individuals</p>
                                    <p className='text-xm font-extralight text-zinc-300'>For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers</p>
                                    <div className='pt-8 flex sm:flex-nowrap flex-wrap items-center justify-center sm:gap-2 gap-10'>
                                        <div className=''>
                                            <div className='text-secondary text-5xl pb-5'>
                                                <PercentageCounter targetPercentage={78} duration={1500} />
                                            </div>
                                            <p className='text-base font-extralight text-zinc-300'>Secure Retirement Planning</p>
                                        </div>
                                        <div className='sm:border-x-2 border-dashed border-zinc-800 pl-5'>
                                            <div className='text-secondary text-5xl pb-5'>
                                                <PercentageCounter targetPercentage={63} duration={1600} /></div>
                                            <p className='text-base font-extralight text-zinc-300 '>Manageable Debt Consolidation</p>
                                        </div>
                                        <div className='pl-5'>
                                            <div className='text-secondary text-5xl pb-5'>
                                                <PercentageCounter targetPercentage={91} duration={1700} />
                                            </div>
                                            <p className='text-base font-extralight text-zinc-300'> Reducing Financial Burdens</p>
                                        </div>
                                    </div>
                                    <div >
                                        <button className='border border-zinc-700  p-4 rounded-full bg-customGray text-normal hover:bg-secondary hover:text-black hover:font-medium duration-700 my-5 '>
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="forbussiness" className={`${activetab === 'forbussiness' ? 'block' : 'hidden'}`}>
                        <div className=' flex items-center text-center mt-8 min-[900px]:flex-row flex-col min-[900px]:gap-0 gap-10'>
                            <div className='p-4 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5'>
                                <img className='w-16 m-auto' src={Bussinessicon2} alt="icon" />
                                <p>Business Credit Cards</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300 px-14'>Empower your business spending with our business credit cards, providing rewards, flexible limits, and control over expenses.</p>
                            </div>
                            <div className='p-4 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5 min-[900px]:border-x-2 min-[900px]:border-y-0 border-y-2 border-zinc-800'>
                                <img className='w-16 m-auto' src={Individualicon2} alt="icon" />
                                <p>Commercial Loans</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300 px-14'>Expand your business with our commercial loan options, providing the funding you need for growth and development.</p>
                            </div>
                            <div className='p-4 flex flex-col gap-4 min-[900px]:w-inherit md:w-3/5 sm:w-4/5 '>
                                <img className='w-16 m-auto' src={Bussinessicon4} alt="icon" />
                                <p>Payroll Services</p>
                                <p className='min-[900px]:text-xs text-sm font-extralight text-zinc-300 px-14'>Simplify your payroll management with our comprehensive payroll services, ensuring timely and accurate employee payments.</p>
                            </div>
                        </div>
                        <div className='min-[900px]:text-left text-center'>
                            <p className='text-4xl text-secondary pt-32 pb-4'>Use Cases</p>
                            <p className='w-4/5 min-[900px]:m-0 m-auto text-xm font-extralight text-zinc-300 pb-4'>At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions</p>
                            <div className='flex my-10 min-[900px]:flex-row flex-col min-[900px]:w-full md:w-4/6 sm:w-5/6  w-11/12  min-[900px]:mx-0 mx-auto min-[900px]:gap-0 gap-5 '>
                                <div className='w-full   px-8  pl-0 '>
                                    <p className='text-2xl pb-5 pt-10'>For Bussiness</p>
                                    <p className='text-xm font-extralight text-zinc-300'> For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them</p>
                                    <div className='pt-8 flex sm:flex-nowrap flex-wrap items-center justify-center sm:gap-2 gap-10'>
                                        <div className=''>
                                            <div className='text-secondary text-5xl pb-5 '>
                                                <PercentageCounter targetPercentage={65} duration={1500} />
                                            </div>
                                            <p className='text-base font-extralight text-zinc-300 py-2 pr-4'>Cash Flow Management</p>
                                        </div>
                                        <div className='sm:border-x-2 border-dashed border-zinc-800 pl-4 '>
                                            <div className='text-secondary text-5xl pb-5 '>
                                                <PercentageCounter targetPercentage={95} duration={1600} />
                                            </div>
                                            <p className='text-base font-extralight text-zinc-300  py-2 pr-4'>
                                                Drive Business Expansion</p>
                                        </div>
                                        <div className='pl-4'>
                                            <div className='text-secondary text-5xl pb-5 '>
                                                <PercentageCounter targetPercentage={45} duration={1700} />
                                            </div>
                                            <p className='text-base font-extralight text-zinc-300 py-2 pr-4'>Streamline payroll processing</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button className='border border-zinc-700  p-4 rounded-full bg-customGray text-normal hover:bg-secondary hover:text-black hover:font-medium duration-700 my-5'>
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                                <div className='w-full   bg-customGray bg-opacity-40 flex gap-2 md:py-16 py-10 sm:px-4 flex-wrap items-center justify-center m-4 ml-0 rounded-xl relative' >
                                    <img className='h-23 w-40 absolute top-0 right-0 z-10' src={Bussinessbg} alt="" />
                                    <div className='w-5/12 h-1/2 p-6 bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800 '>
                                        <img className='w-16' src={Bussinessicon1} alt="icon" />
                                        <p>Startups and Entrepreneurs</p>
                                    </div>
                                    <div className='w-5/12 h-1/2 p-6 bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800 z-50'>
                                        <img src={Bussinessicon2} alt="icon" />
                                        <p>Cash Flow Management</p>
                                    </div>
                                    <div className='w-5/12 h-1/2 p-6 bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800'>
                                        <img src={Bussinessicon3} alt="icon" />
                                        <p>Bussiness Expansion</p>
                                    </div>
                                    <div className='w-5/12 h-1/2 p-6 bg-[#1E1E1E] flex items-center flex-col text-center gap-4 rounded-2xl border-2 border-zinc-800'>
                                        <img src={Bussinessicon4} alt="icon" />
                                        <p>Payment Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;


