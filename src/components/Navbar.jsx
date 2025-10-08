import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; 

const Navbar = () => {
  const [nav, setNav] = useState(false); 

  const handleNav = () => {
    setNav(!nav);
  };
   
  
  const navItems = [
    { id: 1, text: 'Home', href: 'home' },
    { id: 2, text: 'About Us', href: 'about' },
    { id: 3, text: 'Rooms & Suites', href: 'rooms' },
    { id: 4, text: 'Services', href: 'services' },
    { id: 5, text: 'Gallery', href: 'gallery' },
    { id: 6, text: 'Contact', href: 'contact' },
    { id: 7, text: 'Signup', href: 'signup' },

  ];

  return (
    
    <div className='bg-cyan-600 shadow-lg fixed top-0 left-0 w-full z-50 transition duration-300'> 
      <div className='flex justify-between items-center text-blue-950 h-20 max-w-[1400px] mx-auto px-6 lg:px-10'>
       
        <h1 className='text-3xl font-serif font-extrabold text-blue-900 cursor-pointer tracking-wider'>
          Luxury Haven
        </h1>

        
        <ul className='hidden md:flex space-x-2'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 text-black hover:text-black border-b-2 border-transparent hover:text-blue-100 transition-all duration-300 font-medium cursor-pointer text-sm uppercase'
            >
              <a href={item.href}>{item.text}</a>
            </li>
          ))}
        </ul>

       
        <div onClick={handleNav} className='block md:hidden cursor-pointer text-sky-700'>
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        
        <ul
          className={
            nav
              ? 'fixed md:hidden left-0 top-20 w-full h-fit border-t border-gray-200 bg-white ease-in-out duration-300 shadow-xl'
              : 'ease-in-out duration-300 fixed left-[-100%] top-20' 
          }
        >
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 border-b border-gray-100 hover:bg-sky-50 cursor-pointer transition-colors duration-200'
              onClick={() => setNav(false)} 
            >
              <a href={item.href} className='text-gray-800 hover:text-sky-700 font-medium block'>
                {item.text}
              </a>
            </li>
          ))}
          
          
          
        </ul>
      </div>
    </div>
  );
};



export default Navbar;