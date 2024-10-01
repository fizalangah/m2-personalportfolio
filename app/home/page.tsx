import Navbar from "@/components/navbar/nav";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

import styles from "./Home.module.css"; // Import the CSS module for styles
export default function Homepage() {
  
  return (
    <>
    <div  className=" bg-blue-950 flex sm:justify-center items-center text-white lg:flex-row flex-col-reverse mt-[00px]  ">
       <div className="lg:mr-[0px] text-center lg:text-left sm:mr-[50px]">
        <div className="ml-[10px] overflow-hidden mr-[10px] md:ml-[30px] lg:ml-[200px]">
        <h1 className="text-xl">
          Hi, IT's me
        </h1>
        <h1 className="text-2xl lg:text-4xl md:text-3xl">Fiza Langah</h1>
         <h2 className={`text-xl lg:w-[300px] mt-[20px] ${styles.typewriter}`}>Front-end Webdeveloper</h2>
         <p className="mt-[30px] ">I'm a passionate developer specializing in web development with a focus on creating dynamic and responsive applications. I love bringing ideas to life with code!.</p>
         <button className={"p-1 mt-[30px] bg-blue-400 border-2 rounded-xl border-transparent text-black text-sm ml-[10px]"}> <Link href= "/contact">contact</Link></button>
         </div>
         </div>
       <div className="mr-[300px] mt-[10px] ml-[10px]">
        <div className="lg:h-[400px] lg:w-[300px] w-[200px] h-[300px] md:w-[250px] md:mb-[70px] rounded-xl border-2 border-transparent  ml-[280px] mt-[50px]">
          <Image
          src="/img4.jpeg"
          alt="profile pic"
          height={500}
          width={500}
          className=" bg-blue-400 object-cover"
          />
        </div>
        </div>  

    </div>
    <div>
    
    </div>
    </>
  )
}
