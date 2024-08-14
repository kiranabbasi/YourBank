import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Loginbg from './Loginbg.png'
import FacebookIcon from '../../assets/facebookicon.svg';
import LinkedinIcon from '../../assets/LinkedinIcon.svg';
import GithubIcon from '../../assets/githublink.svg';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
  
 
    return (
        <div className='lg:w-4/5 m-auto my-14'>
            <div className='border border-zinc-700 md:w-4/5 w-11/12 m-auto p-20 flex flex-col items-center gap-10 relative rounded-3xl'>
            <img className='absolute top-0 right-0' src={Loginbg} alt="" />
                    <div>
                        <p className='text-4xl text-secondary text-center mb-4'>SignUp</p>
                        <p className='font-extralight text-base text-zinc-300 text-center'>Join our community today! Create an account to unlock exclusive features and personalized experiences.</p>
                    </div>
                    <div className='flex flex-col gap-5  '>
                    <div  className='flex md:flex-row flex-col gap-5'>
                    <input className='bg-[#1C1C1C]  ring-1 ring-zinc-700 rounded-full h-12 w-72 px-4 text-base placeholder:font-extralight placeholder:text-zinc-400' placeholder='Enter First Name' type="text"  required/>
                    <input className='bg-[#1C1C1C]  ring-1 ring-zinc-700 rounded-full h-12 w-72 px-4 text-base placeholder:font-extralight placeholder:text-zinc-400' placeholder='Enter Last Name' type="text"    />
                    </div>
                    <div className='flex md:flex-row flex-col gap-5'>
                    <input className='bg-[#1C1C1C]  ring-1 ring-zinc-700 rounded-full h-12 w-72 px-4 text-base placeholder:font-extralight placeholder:text-zinc-400' placeholder='Enter your Email' type="email" value={email}  onChange={(e) => setEmail(e.target.value)} required/>
                    <input className='bg-[#1C1C1C]  ring-1 ring-zinc-700 rounded-full h-12 w-72 px-4 text-base placeholder:font-extralight placeholder:text-zinc-400' placeholder='Enter Your PassWord' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className='underline my-2'>Forgot Password?</p>
                        <button type='submit' className='bg-secondary text-black font-medium block my-2 w-full py-4 sm:px-44 px-32 rounded-full'>SignUp</button>
                        <button className='bg-customGray border border-zinc-700  block my-2 w-full py-4 sm:px-44 px-32 rounded-full'>Login</button>
                    </div>
                <div className='flex sm:gap-3 gap-1 mt-4 items-center'>
                    <hr className='border border-zinc-500 sm:w-32 w-14 rounded-full' />
                    <p className='text-zinc-400 text-center'>Or Continue With</p>
                    <hr className='border border-zinc-500 sm:w-32 w-14 rounded-full' />
                </div>
                <div className='flex gap-5 '>
                    <div className='bg-secondary p-3 rounded-full'><img src={FacebookIcon} alt="icon" /></div>
                    <div className='bg-secondary p-3 rounded-full'><img src={LinkedinIcon} alt="icon" /> </div>
                    <div className='bg-secondary p-2 rounded-full'><img className='w-7' src={GithubIcon} alt="icon" /></div>
                </div>
            </div>

            
        </div>
       
    )
}

export default SignUp
