import Link from "next/link";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: "url('/contactpage.jpeg')", 
      }}
    >
      <div className="mt-[20px]">
        <h1 className="text-4xl text-yellow-50 font-bold">Let's Get In Touch</h1>
      </div>

      <div className="flex justify-center items-center mt-[50px] text-center">

     < form action="https://formspree.io/f/mvgorqqy"
  method="POST">

<div className="bg-white  w-[400px] h-[450px] rounded-xl ">
   <div className="flex flex-col  p-5 -mt-5">
    <label htmlFor="name" >Name:</label>
    <input type="text" id="name "  name="name" placeholder="enter your Name"  required className="text-center p-2 border-2 border-gray-200 outline-none rounded-xl text-sm"/>
   </div>
   <div className="flex flex-col  p-5 -mt-5">
    <label htmlFor="email">Email:</label>
    <input type="email" id="email"  name="email" placeholder="enter Email" required className="text-center p-2 border-2 border-gray-200 outline-none rounded-xl  text-sm"/>
   </div>
   <div className="flex flex-col  p-5 -mt-5" >
    <label htmlFor="subject">Subject:</label>
    <input type="text"  id="subject"  name="subject" placeholder="subject" required  className="text-center p-2 border-2 border-gray-200 outline-none rounded-xl text-sm"/>
   </div>
   <div className="flex flex-col  p-5 -mt-5">
    <label htmlFor="message">Message</label>
    <input type="text" id="message"  name="message" placeholder="enter message"  required className="text-center p-2 border-2 border-gray-200 outline-none rounded-xl text-sm"/>
   </div>

   <div>
    <button className="bg-gray-200 py-2 px-4 rounded-xl hover:bg-gray-300">submit</button>
   </div>

</div>  
</form>
      </div>
    </div>
  );
}
