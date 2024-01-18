import React from "react";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-cyan-900 via-blue-800 to-indigo-900 text-white dark:bg-gradient-to-b dark:from-gray-50 dark:to-grey-50 dark:text-black"
    >
      <div className="max-w-screen-lg p-4  pt-5rem mx-auto flex flex-col justify-center w-full h-full">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 pb-4">
        As a devoted Computer Science Engineering student, 
        I possess a solid foundation in theoretical concepts and practical applications, 
        specializing in front-end development. My academic journey has provided me with 
        a robust skill set in HTML, CSS, and JavaScript, allowing me to craft visually appealing, user-friendly interfaces. 
        </p>

        <br />

        <p className="text-xl">
        Proficient in translating design concepts into responsive web applications, 
        I ensure a seamless, engaging user experience. My commitment to staying 
        current with industry trends enables me to leverage cutting-edge technologies 
        in the rapidly evolving field of front-end development.
        </p>

        <br />

        <p className="text-xl">
        Driven by a passion for the intersection of technology
        and innovation, I have immersed myself in the realms of Artificial Intelligence, Machine Learning,
        and Data Analytics.
        </p>


      </div>
    </div>
  );
};

export default About;