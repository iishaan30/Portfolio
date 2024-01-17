import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IoMdSunny } from "react-icons/io";
import { Link } from "react-scroll";
import { WiMoonAltNew } from "react-icons/wi";

const NavBar = () => { 
    const toggleMode = () => {
        if(localStorage.theme === undefined){
          localStorage.theme = 'dark';
        }
        localStorage.theme === 'light' ? localStorage.theme = 'dark' : localStorage.theme = 'light';
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }
      }
    const [darkMode, setDarkMode] = useState(false);
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1 ,
            link: 'home'
        },
        {
            id: 2 ,
            link: 'about'
        },
        {
            id: 3 ,
            link: 'portfolio'
        },
        {
            id: 4 ,
            link: 'experience'
        },
        
    ]
    
    
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed dark:text-black dark:bg-white'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>IishaanJha</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link})=>(
                <li
                key={id}
                className='px-10 cursor-pointer font-medium text-gray-500 hover:scale-105 capitalize duration-200  dark:text-black'>
                <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
            <div className="" onClick={() => setDarkMode(!darkMode)} > {darkMode ? <WiMoonAltNew size={30}  onClick={toggleMode} className="text-black-500 "/> : <IoMdSunny size={30} onClick={toggleMode} className="text-amber-500"/>} </div>
            
        </ul>
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden dark:text-black  '>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800  text-gray-500 dark:bg-gradient-to-b dark:from-gray-50 dark:to-gray-50 dark:text-black'>
        {links.map(({id, link})=>(
                <li
                key={id}
                className='px-4 cursor-pointer font-medium text-gray-500 capitalize py-6 dark:text-black '>
                <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
            <div className="" onClick={() => setDarkMode(!darkMode)} > {darkMode ? <WiMoonAltNew size={30}  onClick={toggleMode} className="text-black-500 "/> : <IoMdSunny size={30} onClick={toggleMode} className="text-amber-500"/>} </div>
        </ul>
        )}
        
   

        
    
    </div>
  )
}

export default NavBar