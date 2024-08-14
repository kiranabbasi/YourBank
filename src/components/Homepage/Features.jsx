import React, { useState } from 'react'
import LoanCalculator from './LoanCalculator.js';
import Arrowicon from '../../assets/iconarrow.svg';
import Card1 from '../../assets/card1.jpeg'
import Card2 from '../../assets/card2.jpeg'
import Card3 from '../../assets/card3.jpeg'
import Card4 from '../../assets/card4.jpeg'

const Features = () => {

    const [activeFeature, setActiveFeature] = useState('LoanPlanner');

    const handleFeatureChange = (feature) => {
        setActiveFeature(feature);
    };

    return (
        <div>
            <div className='flex flex-col gap-5 mt-14 min-[900px]:text-left text-center'>
                <p className='text-4xl'>Our <span className='text-secondary'>Features</span></p>
                <p className='w-4/5 text-xm font-extralight text-zinc-300 min-[900px]:m-0 m-auto'>
                    Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations.
                </p>
            </div>
            <div className='w-full flex gap-10 mt-14 lg:flex-row flex-col'>
                <div className='lg:w-1/5 flex sm:flex-nowrap flex-wrap lg:flex-col  lg:bg-customGray bg-opacity-40 items-center justify-center rounded-xl lg:py-10 h-2/5 gap-5 lg:shadow-inner shadow-zinc-700 lg:hover:shadow-lg duration-1000 hover:shadow-primary'>
                    <div className={`${activeFeature === 'onlinebanking' ? 'text-secondary' : 'text-white'}`}>
                        <button className='border w-36 border-zinc-700 p-3  rounded-full  hover:text-secondary duration-700 hover:border-secondary '
                            onClick={() => handleFeatureChange('onlinebanking')}
                        >Online Banking</button>
                    </div>
                    <div className={`${activeFeature === 'LoanPlanner' ? 'text-secondary' : 'text-white'}`}>
                        <button className='border w-36 border-zinc-700 p-3  rounded-full  hover:text-secondary duration-700 hover:border-secondary '
                            onClick={() => handleFeatureChange('LoanPlanner')}
                        >Plan Your Loan</button>
                    </div>
                    <div className={`${activeFeature === 'yourCards' ? 'text-secondary' : 'text-white'}`}>
                        <button className='border w-36 border-zinc-700 p-3  rounded-full  hover:text-secondary duration-700 hover:border-secondary '
                            onClick={() => handleFeatureChange('yourCards')}
                        >Our Cards</button>
                    </div>
                </div>
                <div className='lg:w-3/4 min-[900px]:w-11/12 sm:w-3/4 w-11/12 mx-auto'>
                    <div id='onlinebanking' className={`grid min-[900px]:grid-cols-2 gap-6  ${activeFeature === 'onlinebanking' ? 'block' : 'hidden'}`}>
                        <div className='border border-zinc-700  bg-customGray bg-opacity-40 p-10 rounded-xl  h-60 hover:shadow-lg hover:shadow-primary hover:border-zinc-800 duration-1000 '>
                            <div className='flex justify-between mb-4'>
                                <p className='text-lg'>24/7 Account Access</p>
                                <img className='w-8' src={Arrowicon} alt="icon" />
                            </div>
                            <p className='text-xm font-extralight text-zinc-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dignissimos sed, neque temporibus deserunt vel facere sequi consectetur enim. Nostrum eligendi pariatur aliquam laboriosam nihil cupiditate illum blanditiis ullam vel!
                            </p>
                        </div>
                        <div className='border border-zinc-700  bg-customGray bg-opacity-40 p-10 rounded-xl  h-60  hover:shadow-lg hover:shadow-primary hover:border-zinc-800 duration-1000'>
                            <div className='flex justify-between mb-4'>
                                <p className='text-lg'>Mobile Banking App</p>
                                <img className='w-8' src={Arrowicon} alt="icon" />
                            </div>
                            <p className='text-xm font-extralight text-zinc-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dignissimos sed, neque temporibus deserunt vel facere sequi consectetur enim. Nostrum eligendi pariatur aliquam laboriosam nihil cupiditate illum blanditiis ullam vel!
                            </p>
                        </div>
                        <div className='border border-zinc-700  bg-customGray bg-opacity-40 p-10 rounded-xl  h-60  hover:shadow-lg hover:shadow-primary hover:border-zinc-800 duration-1000'>
                            <div className='flex justify-between mb-4'>
                                <p className='text-lg'>Secure Transactions</p>
                                <img className='w-8' src={Arrowicon} alt="icon" />
                            </div>
                            <p className='text-xm font-extralight text-zinc-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dignissimos sed, neque temporibus deserunt vel facere sequi consectetur enim. Nostrum eligendi pariatur aliquam laboriosam nihil cupiditate illum blanditiis ullam vel!
                            </p>
                        </div>
                        <div className='border border-zinc-700  bg-customGray bg-opacity-40 p-10 rounded-xl  h-60  hover:shadow-lg hover:shadow-primary hover:border-zinc-800 duration-1000'>
                            <div className='flex justify-between mb-4'>
                                <p className='text-lg'>Bill Pay and transfers</p>
                                <img className='w-8' src={Arrowicon} alt="icon" />
                            </div>
                            <p className='text-xm font-extralight text-zinc-300 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt dignissimos sed, neque temporibus deserunt vel facere sequi consectetur enim. Nostrum eligendi pariatur aliquam laboriosam nihil cupiditate illum blanditiis ullam vel!
                            </p>
                        </div>
                    </div>
                    <div id='LoanPlanner ' className={` ${activeFeature === 'LoanPlanner' ? 'block' : 'hidden'}`}><LoanCalculator /></div>
                    <div id='yourCards' className={` ${activeFeature === 'yourCards' ? 'block' : 'hidden'}`}>
                        <div className='grid grid-cols-2 gap-8 w-full'>
                            <img className='lg:h-60 min-[900px]:h-52 md:h-44 min-[500px]:h-40 h-28 object-cover rounded-lg  hover:scale-105  duration-700 w-[460px] shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary' src={Card1} alt="BankCradimg" />
                            <img className='lg:h-60 min-[900px]:h-52 md:h-44 min-[500px]:h-40 h-28 object-cover rounded-lg  hover:scale-105  duration-700 w-[460px] shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary' src={Card2} alt="BankCradimg" />
                            <img className='lg:h-60 min-[900px]:h-52 md:h-44 min-[500px]:h-40 h-28 object-cover rounded-lg  hover:scale-105  duration-700 w-[460px] shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary' src={Card3} alt="BankCradimg" />
                            <img className='lg:h-60 min-[900px]:h-52 md:h-44 min-[500px]:h-40 h-28 object-cover rounded-lg  hover:scale-105  duration-700 w-[460px] shadow-lg shadow-primary hover:shadow-2xl hover:shadow-primary' src={Card4} alt="BankCradimg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
