import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaCreativeCommons } from "react-icons/fa6";
<FaCreativeCommons />
import Link from "next/link"
export default function Footer() {
  return (
    <div className="flex-col bg-blue-950 w-full md:p-3 p-4">
      
      <div className="bg-blue-950 w-full md:p-7 p-5 flex justify-center items-center text-blue-300 md:gap-x-24 gap-x-14 text-xl mt-0 ">
      <Link href="mailto:fizalangah2001@gmail.com"><SiGmail /></Link>
       <Link href="https://www.linkedin.com/in/fiza-langah-33543b2b7"><FaLinkedin /></Link>
       <Link href="https://github.com/fizalangah"><FaGithub /></Link>
        </div>  
        <div className="flex justify-center items-center text-yellow-50"> <p className="mr-[10px]"><FaCreativeCommons /></p><p>created by Fiza langah</p></div>
    </div>
  )
}
