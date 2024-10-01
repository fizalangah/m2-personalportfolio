
import Link from "next/link";
interface projectCardProp {
title : string;
description: string;
icons:any;
Button: string;
}




const ProjectCard:React.FC<projectCardProp> = ({title,description,icons,Button}) =>{
return ( 
    <div className="group">

       <div className="bg-blue-950 rounded-xl h-[300px] lg:w-[370px] w-[280px]  lg:ml-[30px] ml-[20px] mt-[50px] mb-[0px]   text-center group-hover:bg-white-300 group-hover:text-white mr-[0px] ">
        <p className=" h-8"></p>
        <h2 className=" text-white font-semibold text-2xl mt-[20px] group-hover:text-blue-400">{title}</h2>
    
        <p className="  text-white text-xl mb-2 mt-[30px]  group-hover:text-blue-400">{[description]}</p>
        <p className="flex justify-center items-center text-2xl mt-[5px] text-white group-hover:text-blue-400  ">{icons}</p>
        <button className="bg-white rounded-xl p-2 mt-[20px] group-hover:bg-blue-400 group-hover:text-white"> <Link href={Button}>view project</Link></button>
        </div>
       </div>
)
}
export default ProjectCard