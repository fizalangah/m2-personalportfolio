 "use client";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
function Aboutpage() {

  return (
    <div className="flex flex-col text-white justify-center items-center lg:mt-[100px] md:[60px] mt-[100px] mb-5">
      <div className="flex lg:flex-row md:flex-row flex-col items-center text-center gap-x-[200px] mb-[20px] lg:mr-[400px] mr-[00px] md:ml-[0px] md:gap-x-14 md:mr-[100px]">
         
            {/* ///image */}
        <div className="h-[150px] w-[150px]  rounded-full overflow-hidden">
          <Image
            src="/img4.jpeg"
            alt="profile pic"
            height={200}
            width={200}
            className="object-cover"
          />
        </div>

        <h1 className=" lg:text-4xl text-2xl  font-bold text-white">About Me!</h1>
      </div>

      <div className="lg:w-[800px] md:w-[600px] w-[300px] lg:h-[300px] md:h-[300px] border-blue-50 border-2 rounded-xl mt-[10px] p-4 bg-blue-950">
        <p className="text-center mt-[10px] sm:text-sm lg:text-xl lg:mt-[50px]">
          Hi, I'm Fiza Langah, a passionate front-end developer with a knack for
          creating visually engaging and highly functional web applications. My
          expertise lies in using modern tools and technologies like React,
          Next.js, Tailwind CSS, and TypeScript to bring ideas to life on the
          web.
        </p>
        <p className="text-center mt-[10px]">
          I have a strong focus on user experience and responsive design,
          ensuring that every project I work on is optimized for performance and
          accessibility. Whether it's building dynamic single-page applications
          or crafting pixel-perfect user interfaces, I thrive on turning complex
          problems into simple, elegant solutions.
        </p>
      </div>
                  {/* skills section */}

      <div className="mx-auto mt-7 lg:mt-16 text-center lg:text-left">
  <h1 className="text-xl lg:text-2xl font-bold">My Skills</h1>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:mt-12 bg-blue-950 w-full max-w-screen-lg mx-auto p-6 lg:p-8 rounded-lg">
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <FaHtml5 className="text-4xl text-orange-500 mr-2" /> HTML
  </h4>
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <FaCss3Alt className="text-4xl text-blue-500 mr-2" /> CSS
  </h4>
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <IoLogoJavascript className="text-4xl text-yellow-500 mr-2" /> JavaScript
  </h4>
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <SiTypescript className="text-4xl text-green-400 mr-2" /> TypeScript
  </h4>
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <RiNextjsFill className="text-4xl text-red-500 mr-2" /> Next.js
  </h4>
  <h4 className="flex items-center justify-center lg:justify-start mt-6 lg:mt-0">
    <FaReact className="text-4xl text-blue-300 mr-2" /> React.js
  </h4>
</div>


      {/* ///third section */}

<div className="lg:ml-[400px] mt-[50px] justify-center items-center ml-[100px]">
  <div className="text-white"><h1 className=" lg:text-2xl font-bold">What I Do:</h1>
  <div className="mt-[30px] list-item mr-[80px] gap-y-10 ">
  <ul className="list-item text-white">Responsive Web Design: Ensuring websites look and work great on all devices.</ul>
  <div className="list-item"><ul className="list-disc">JavaScript Frameworks: Building dynamic web apps with React, Next.js.</ul></div>
  
  <div className="list-item"><ul className="list-disc">CSS Mastery: Creating modern and clean user interfaces with Tailwind CSS..</ul></div>
   <div className="list-item"><ul>Performance Optimization: Ensuring fast load times and smooth interactions.</ul></div>
   <div className="list-item"><ul>Collaboration: Working closely with teams to deliver user-centric solutions.</ul></div>
  </div>
  </div>
</div>


    </div>
   
  );
}

export default Aboutpage;
