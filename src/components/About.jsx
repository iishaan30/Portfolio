import React from "react";


const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white dark:bg-gradient-to-b dark:from-gray-50 dark:to-grey-50 dark:text-black"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          
As a dedicated Computer Science Engineering student, I bring a strong foundation in both theoretical concepts and practical applications, with a specialized focus on front-end development. My academic journey has equipped me with a robust skill set in programming languages such as HTML, CSS, and JavaScript, enabling me to create visually appealing and user-friendly interfaces. I am adept at translating design concepts into responsive web applications, ensuring a seamless and engaging user experience. My commitment to staying abreast of the latest industry trends allows me to leverage cutting-edge technologies in the rapidly evolving field of front-end development.
        </p>

        <br />

        <p className="text-xl">
        Driven by a passion for the intersection of technology and innovation, I have immersed myself in the realms of Artificial Intelligence, Machine Learning, and Data Analytics. Beyond my academic pursuits, I have engaged in hands-on projects that showcase my ability to harness the power of AI and ML algorithms to derive meaningful insights from data. This enthusiasm extends beyond the classroom, as I actively seek opportunities to contribute to projects that push the boundaries of what is possible in the realms of AI, ML, and data analytics. With a solid foundation in front-end development and a fervent interest in emerging technologies, I am poised to make a meaningful impact in the dynamic landscape of computer science and technology.
        </p>
      </div>
    </div>
  );
};

export default About;