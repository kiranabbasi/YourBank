import React from 'react';
import Herodesignbg from '../../assets/homepagedesign.png';
import Verifiedsvg from '../../assets/verified.svg';
import Exchangeicon from '../../assets/exchange.svg';
import Plusicon from '../../assets/plus.svg'
import CurrencyExchange from './Currencyexchange.js'

const HeroPage = () => {
    return (
        <div id='heropage' className='flex min-[900px]:flex-row flex-col min-[900px]:gap-0 gap-16'>
            <div id='left-half' className='min-[900px]:w-full w-4/5 min-[900px]:m-0 m-auto py-3 min-[900px]:text-left text-center'>
                <div className='flex bg-[#262626] rounded-full p-1  items-center sm:w-80 w-72  md:text-xm text-xs font-extralight gap-2 min-[900px]:m-0 m-auto' >
                    <span> <img className='' src={Verifiedsvg} alt="" /></span>
                    <p>No LLC Required, No Credit Check.</p>
                </div>
                <div>
                    <h1 className='font-normal w-5/6 md:text-4xl sm:text-3xl text-2xl my-7 min-[900px]:mx-0 mx-auto'>Welcome to YourBank Empowering <span className='text-secondary'>Your Financial Journey</span> </h1>
                    <p className='text-xm font-extralight text-zinc-300'>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                </div>
                <div>
                    <a href="#login">
                        <button className='sm:px-4 px-2 sm:py-3 py-2 rounded-full my-6 bg-secondary text-black  text-base  hover:translate-x-1 ease-out duration-1000 '>
                            Open Account</button>
                    </a>
                </div>
            </div>
            <div id='right-half' className='min-[900px]:w-11/12 md:w-4/6 w-10/12 min-[900px]:m-0 m-auto  md:p-6 '>
                <div className='border  border-zinc-700 xl:w-10/12 lg:w-11/12 p-4 m-auto rounded-lg relative'>
                <img className='absolute lg:-right-20 md:-right-20 -right-5 -top-10  lg:w-80 md:w-72 w-56' src={Herodesignbg} alt="bg-img" /> 
                    <div>
                        <div className='flex gap-2 bg-primary p-3 rounded-xl absolute -top-11 md:-left-12 -left-4'>
                            <img className='bg-secondary rounded-full w-7 h-7' src={Plusicon} alt="icon" />
                            <div>
                                <p className='text-xs'>+ $5000,00</p>
                                <p className=' text-xs font-thin'>Monthly Income</p>
                            </div>
                        </div>
                        <p className='text-sm pb-3'>Your Transactions </p>
                        <div className='flex border border-zinc-800 items-center gap-2 w-11/12 rounded-md m-auto opacity-100 ' >
                            <div className=' bg-secondary w-7 h-7  rounded-full flex justify-center items-center'>
                                <img className='w-5 h-5 bg-secondary ' src={Exchangeicon} alt="icon" />
                            </div>
                            <div className='flex flex-col w-3/5 m-2' >
                                <p className='text-xs font-extralight'>Transaction</p>
                                <p className='font-light text-sm'>Joel Kenley</p>
                            </div>
                            <div className='text-base'>-$68.00</div>
                        </div>
                        <div className='flex border border-zinc-800 items-center gap-2 w-10/12 rounded-md m-auto opacity-80 '>
                            <div className=' bg-secondary w-7 h-7  rounded-full flex justify-center items-center'>
                                <img className='w-5 h-5 bg-secondary ' src={Exchangeicon} alt="icon" />
                            </div>
                            <div className='flex flex-col w-3/5 m-2 ' >
                                <p className='text-xs font-extralight'>Transaction</p>
                                <p className='font-light text-sm'>Mark Smith</p>
                            </div>
                            <div className='text-base'>-$68.00</div>
                        </div>
                        <div className='flex border border-zinc-800 items-center gap-2 w-9/12 rounded-md m-auto opacity-40 '>
                            <div className=' bg-secondary w-7 h-7  rounded-full flex justify-center items-center'>
                                <img className='w-5 h-5 bg-secondary ' src={Exchangeicon} alt="icon" />
                            </div>
                            <div className='flex flex-col w-3/5 m-2' >
                                <p className='text-xs font-extralight'>Transaction</p>
                                <p className='font-light text-sm'> Lenon Roy</p>
                            </div>
                            <div className='text-base'>-$68.00</div>
                        </div>
                    </div>
                    <div id='CurrencyExchange ' className=''>
                        <p className='py-4 md:px-4'>Money Exchange</p>
                        <CurrencyExchange />
                    </div>
                    <div className=' absolute md:-right-14 -right-7 -bottom-12 flex px-2 py-1  gap-2 bg-[#222F1B] bg-opacity-70 rounded-full items-center text-xs '>
                        <p className='font-light'>Supported Currency</p>
                        <div className='flex gap-2 bg-[#1C1C1C] px-3 py-1 rounded-full items-center text-secondary'>
                            <p className='rounded-full bg-[#262626] w-6 h-6  flex items-center justify-center'>€</p>
                            <p className='rounded-full bg-zinc-800 w-6 h-6 flex items-center justify-center'>Rs</p>
                            <p className='rounded-full bg-zinc-800 w-6 h-6  flex items-center justify-center'>£</p>
                            <p className='rounded-full bg-zinc-800 w-6 h-6  flex items-center justify-center'>$</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroPage
