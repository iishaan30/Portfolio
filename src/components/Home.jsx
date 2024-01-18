import React from "react";
import HeroImage from "../assets/heroImage.png";
import { TypeAnimation } from 'react-type-animation';
import Typewriter from "typewriter-effect";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-indigo-900 via-blue-800  to-cyan-900 dark:bg-gradient-to-b dark:from-gray-50 dark:via-gray-50 dark:to-gray-50"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white dark:text-black">
          <Typewriter 
      options={{
        strings: [
          "I'm a Front End Developer"
        ],
        showCursor: true,
        autoStart: true,
        deleteSpeed: Infinity,
        
        cursor:" " 
      }}
    />
          </h2>
          <p className="text-slate-50 dark:text-slate-800 py-4 max-w-md ">
            I love to work on web application using technologies like
            React, Tailwind.
          </p>


        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl  pb-auto mx-auto  w-2/3 md:w-full"
          />
        </div>
      </div>

    </div>
    
  );
};

export default Home;