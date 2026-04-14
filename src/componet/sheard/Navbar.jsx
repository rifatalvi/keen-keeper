import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    const items = <>
      <li><NavLink to={'/'} className={({isActive})=> ` ${isActive? "bg-[#244D3F] text-white":"text-gray-500"}`}><RiHome2Line /> Home</NavLink></li>
      <li><NavLink to={'/timeline'} className={({isActive})=> ` ${isActive? "bg-[#244D3F]  text-white":"text-gray-500"}`}> <IoTimeOutline /> TimeLine</NavLink></li>
      <li><NavLink to={'/state'} className={({isActive})=> ` ${isActive? "bg-[#244D3F] text-white":"text-gray-500"}`}><TfiStatsUp /> Stats</NavLink></li>
        
    </>
    return (
        <div className=" bg-base-100 shadow-sm">
 <div className='container mx-auto navbar justify-between'>
     <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 gap-2 mt-3 w-52 p-2 shadow">
       {items}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Keen<span className="text-[#244D3F]">Keeper</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-2">
    {items}
    </ul>
  </div>
 </div>
 
</div>
    );
};

export default Navbar;