import React from 'react'
import Bgimg from '../../assets/box1bg.png'
import { NavLink } from 'react-router-dom';

const FooterLogin = () => {
    return (
        <div className='mt-32 flex  gap-32 '>
            <div className='sm:p-16  pt-20 flex min-[900px]:flex-row flex-col items-center min-[900px]:text-left text-center  bg-customGray bg-opacity-30 justify-between rounded-xl relative border border-primary'>
                <div className='h-23 w-52 absolute top-0 left-0  '><img src={Bgimg} alt="" /></div>
                <div className='flex flex-col xl:w-4/5 w-10/12 '>
                    <p className='text-3xl '>Start your financial journey with <span className='text-secondary'>YourBank today!</span></p>
                    <p className='text-base font-extralight text-zinc-300 pt-4 min-[900px]:mr-10'>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
                </div>
                <div className='min-[900px]:w-1/5 my-10'>
                    <NavLink href="#login" to="/SignUp">
                        <button className='px-4 py-3 rounded-full  bg-secondary text-black  text-sm font-normal hover:translate-x-1 ease-out duration-500 hover:font-medium'>
                            Open Account</button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FooterLogin
