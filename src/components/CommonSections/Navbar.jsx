import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import BankLogo from '../../assets/banklogo.png';
import Dropdownnav from '../../assets/navdropdown.png';
import Cancelicon from '../../assets/icon_cancel.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='mt-8 xl:w-4/5 sm:w-11/12 sm:mx-auto mx-2'>
      <div className="border border-zinc-700 bg-opacity-40 bg-customGray rounded-full h-14 flex justify-between items-center p-8">
        <NavLink to="/">
          <div className='w-36 h-10 flex items-center'>
          <img className='w-[132px] h-[34px] hover:scale-95 ease-out duration-1000' src={BankLogo} alt="Bank Logo" />
          </div>
        </NavLink>
        <div className='flex justify-between  xl:w-4/6 lg:w-9/12 items-center relative 3q'>
          <button onClick={toggleDropdown} className='lg:hidden z-50 '>
            {isOpen ? (
              <img className='fixed right-10' src={Cancelicon} alt="Crossicon" />
            ) : (
              <div className='bg-secondary rounded-3xl px-4 py-2'>
                <img src={Dropdownnav} alt="dropdownicon" />
              </div>
            )}
          </button>

          <div
            className={`flex lg:w-inherit w-72  list-none lg:gap-4 lg:flex-row flex-col lg:relative fixed  right-0 lg:py-0 lg:px-0 py-32 px-4 z-40 top-0 lg:bg-inherit bg-zinc-900 items-start gap-10 text-base lg:h-10 h-full bg-opacity-90 transition-transform duration-300 ${isOpen ? 'transform translate-x-0' : 'transform lg:translate-x-0 translate-x-full'
              }`}
          >
            <NavLink className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''} to="/" onClick={() => setIsOpen(false)}>
              <li className='px-4 py-2 rounded-3xl hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Home</li>
            </NavLink>
            <NavLink className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''} to="/Careers" onClick={() => setIsOpen(false)}>
              <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Careers</li>
            </NavLink>
            <NavLink className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''} to="/About" onClick={() => setIsOpen(false)}>
              <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>About</li>
            </NavLink>
            <NavLink className={(e) => e.isActive ? 'bg-zinc-700 bg-opacity-50 rounded-3xl' : ''} to="/Security" onClick={() => setIsOpen(false)}>
              <li className='px-3 py-2 rounded-full hover:bg-zinc-700 hover:bg-opacity-70 duration-300'>Security</li>
            </NavLink>
          </div>

          <div className= {`flex list-none w-inherit lg:relative fixed z-50  lg:gap-4 gap-10  lg:bottom-0 bottom-44 -right-4 transition-transform duration-300 ${isOpen ? 'transform -translate-x-20' : 'transfrom lg:translate-x-0 translate-x-full'}`}>
            <NavLink className={(e) => e.isActive ? 'bg-secondary text-black rounded-full' : ''} to="/SignUp" onClick={() => setIsOpen(false) }>
              <li className='px-4 py-2 rounded-full hover:bg-[#CAFF33] hover:text-black duration-500 hover:scale-105 ease-linear lg:bg-inherit bg-secondary lg:text-inherit text-black'>
                Sign Up
              </li>
            </NavLink>
            <NavLink className={(e) => e.isActive ? 'bg-secondary text-black rounded-full' : ''} to="/Login" onClick={() => setIsOpen(false)}>
              <li className='px-4 py-2 rounded-full hover:bg-secondary hover:text-black duration-500 hover:scale-105 ease-linear lg:bg-inherit bg-secondary lg:text-inherit text-black'>
                Login
              </li>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
