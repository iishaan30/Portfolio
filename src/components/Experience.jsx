import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
      style: "dark:bg-gray-800 dark:rounded-3xl"
      
    },
    {
        id: 8,
        src: node,
        title: "NodeJS",
        
      }
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-cyan-900 via-blue-800 to-indigo-900 w-full md:h-screen dark:bg-gradient-to-b dark:from-gray-50 dark:to-grey-50 dark:text-black "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col p-3 justify-center w-full h-full text-white dark:text-black">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-10">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={` hover:scale-105 duration-500 py-2  `}
            >
              <img src={src} alt="" className={"w-20 mx-auto " + " " + style } />
              
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;