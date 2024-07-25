import Logo from "@/public/logosaas.png"
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";

export default function Header(){
  return(
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:inline-flex">
          Streamline your workflow and boost your productivity.
        </p>
        <div className="flex justify-center items-center gap-1">
          <p>
            Get started for free
          </p>
          <FaArrowRight className="h-3 w-4 inline-flex justify-center items-center"/>
        </div>
      </div>
      <div className="py-5">
        <div className="max-w-7xl py-2 px-6 mx-auto">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="saas logo" height={40} width={40}/>
            <IoIosMenu className="h-5 w-5 flex md:hidden"/>
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="">About</a>              
              <a href="">Features</a>              
              <a href="">Customers</a>             
              <a href="">Updates</a>    
              <a href="">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex justify-center tracking-tight">Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}