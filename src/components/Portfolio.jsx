import React from "react";
import Typewriter from "typewriter-effect";


const Portfolio = () => {

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-indigo-900 via-blue-800  to-cyan-900 w-full pt-0 text-white  dark:bg-gradient-to-b dark:from-gray-50 dark:to-grey-50 dark:text-black md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
            
          </p>
          <p className="py-10 text-4xl">
          
            <Typewriter 
              options={{
              strings: [
              " Still in progress ..."
            ],
              showCursor: true,
              loop: true,
              autoStart: true,
              deleteSpeed: 100,
              cursor: " "
            }}
    />
          </p>
        </div>


      </div>
    </div>
  );
};

export default Portfolio;