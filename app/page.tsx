  
  
import Homepage from "./home/page"
import Aboutpage from "./about/page"
import Projectpage from "./project/page"
 import Contactpage from "./contact/page"
import Navbar from "@/components/navbar/nav"
function Mainpage() {
  return (
    <div>
    <Homepage/>
     <Aboutpage/>
    <Projectpage/>
    <Contactpage/> 
    </div>
  )
}

export default Mainpage