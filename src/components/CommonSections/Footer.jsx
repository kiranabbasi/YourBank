import React from 'react';
import Logo from '../../assets/banklogo.png';
import MailIcon from '../../assets/mailicon.svg';
import LocationIcon from '../../assets/loactionicon.svg';
import PhoneIcon from '../../assets/phoneicon.svg';
import FacebookIcon from '../../assets/facebookicon.svg';
import LinkedinIcon from '../../assets/LinkedinIcon.svg';
import GithubIcon from '../../assets/githublink.svg';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      <div className='bg-customGray pt-16 pb-7 flex flex-col gap-10 items-center mt-28 min-w-full max-w-full'>
        <div><img className='w-36' src={Logo} alt="logo" /></div>
        <div className='flex list-none '>
          <NavLink
            className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''}
            to="/"
            onClick={scrollToTop}
          >
            <li className='px-4 py-2 rounded-3xl hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Home</li>
          </NavLink>
          <NavLink
            className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''}
            to="/Careers"
            onClick={scrollToTop}
          >
            <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Careers</li>
          </NavLink>
          <NavLink
            className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''}
            to="/About"
            onClick={scrollToTop}
          >
            <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>About</li>
          </NavLink>
          <NavLink
            className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''}
            to="/Security"
            onClick={scrollToTop}
          >
            <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Security</li>
          </NavLink>
        </div>
        <div className='w-5/6 m-auto border border-zinc-700'></div>
        <div className='flex gap-8 font-light text-base flex-wrap items-center justify-center'>
          <div className='flex items-center gap-1'>
            <img src={MailIcon} alt="" />
            <a href="https://mail.google.com/mail/?view=cm&to=kiranabbasi048@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact With the Developer via Gmail">KiranAbbasi048@gmail.com</a>
          </div>
          <div className='flex items-center gap-1'>
            <img src={PhoneIcon} alt="" />
            <a href="https://wa.me/9266677193" target="_blank" rel="noopener noreferrer" title="Contact With the Developer via WhatsApp">+92 3266 67 7193</a>
          </div>
          <div className='flex items-center gap-1'>
            <img src={LocationIcon} alt="" />
            <a href="https://maps.app.goo.gl/J1xHo161MyDQmmnq5" target="_blank">Bahwalpur Punjab, Pakistan</a>
          </div>
        </div>
        <div className='w-5/6 m-auto border border-zinc-700 '></div>
        <div className='relative md:w-5/6 w-4/6 border border-zinc-700 md:rounded-full rounded-3xl flex md:flex-row flex-col gap-4 justify-between items-center p-2 md:py-2 py-14 bg-[#1E1E1E]'>
          <div className='flex gap-2 md:relative absolute md:top-0 -top-7'>
            <div className='bg-secondary p-3 rounded-full'><img src={FacebookIcon} alt="icon" /></div>
            <div className='bg-secondary p-3 rounded-full'><img src={LinkedinIcon} alt="icon" /></div>
            <div className='bg-secondary p-2 rounded-full'><img className='w-7' src={GithubIcon} alt="icon" /></div>
          </div>
          <div>
            <p className='font-extralight'>©YourBank All Rights Reserved</p>
          </div>
          <div>
            <a href="https://mail.google.com/mail/?view=cm&to=kiranabbasi048@gmail.com" target="_blank" rel="noopener noreferrer" title="Contact With the Developer via Gmail" className='font-extralight hover:font-normal duration-1000 mr-5'>Developed By | KiranAbbasi</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
