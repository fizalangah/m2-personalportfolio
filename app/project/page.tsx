"use client";
import Footer from "@/components/footer/footer";
import { TiWeatherStormy } from "react-icons/ti";
import { FaCalculator } from "react-icons/fa";
import { LuClock4 } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RiEmotionLaughLine } from "react-icons/ri";
import { LuCalculator } from "react-icons/lu";
import { GrGamepad } from "react-icons/gr";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { RiTimerFlashFill } from "react-icons/ri";

export default function ProjectPage() {

      // card data
  const projectList = [
    {
      title: "Weather App",
      description: "A dynamic weather app using OpenWeatherMap API.",
      icons: [<TiWeatherStormy />],
      Button: "https://weather-ap-beta.vercel.app/",
    },
    {
      title: "Tip Calculator",
      description: "A tip calculator to calculate bills with ease.",
      icons: [<FaCalculator />],
      Button: "https://tip-calculator-seven-orcin.vercel.app/",
    },
    {
      title: "Birthday Card",
      description: "A digital birthday card with personalized messages and animations.",
      icons: [<LiaBirthdayCakeSolid />],
      Button: "https://birthday-card-neon.vercel.app/",
    },
    {
      title: "Digital Clock",
      description: "A simple digital clock showing real-time updates.",
      icons: [<LuClock4 />],
      Button: "https://digital-clock2-sigma.vercel.app//",
    },
    {
      title: "Joke Generator",
      description: "Fetch and display random jokes from an API.",
      icons: [<RiEmotionLaughLine />],
      Button: "https://joke-generator-app-nine.vercel.app/",
    },
    {
      title: "Simple Calculator",
      description: "A basic calculator with arithmetic functionalities.",
      icons: [<LuCalculator />],
      Button: "https://simplecalculator-jehk.vercel.app/",
    },
    {
      title: "Guessing Number Game",
      description: "A number guessing game where the user guesses a number.",
      icons: [<GrGamepad />],
      Button: "https://guessing-numbergame.vercel.app/",
    },
    {
      title: "Countdown Timer",
      description: "A countdown timer to track time for specific events.",
      icons: [<RiTimerFlashFill />],
      Button: "https://countdown-timmer-five.vercel.app/",
    },
    {
      title: "Color-picker-App",
      description: "A color-picker application to choose colors.",
      icons: [<IoColorPaletteOutline />],
      Button: "https://color-picker-app-pink.vercel.app/",
    },
  ];

  return (
    <div className="text-white flex flex-col items-center justify-center bg-blue-900 mt-[px] ">
      <h1 className="text-3xl font-bold mb-8 mt-[90px]">My Projects</h1>
      <p className="font-semibold text-xl mb-5">Collection of my best work</p>
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8  ml-5 mr-5">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-gray-700 rounded-xl p-6 text-center shadow-lg transition-transform duration-300 transform hover:scale-105"
          >
            <div className="text-5xl mb-4">{project.icons[0]}</div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <p className="mt-2">{project.description}</p>
            <a
              href={project.Button}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-white text-black py-2 px-4 rounded-md hover:bg-gray-200 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
     
    </div>
  );
}
