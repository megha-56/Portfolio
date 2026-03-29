"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
const Projects=()=>{
    const router = useRouter()
    const pathname = usePathname();
    return(
       <div className=" flex flex-col items-center min-h-screen w-full bg-white gap-5" >
            <div className="h-12 flex justify-center gap-10 text-xs font-bold w-screen bg-[#525251] ">
              <button onClick={()=>{router.push('/home')}} className={pathname === "/home" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>HOME</button>
              <button onClick={()=>{router.push('/about')}} className={pathname === "/about" ? "underline decoration-3 decoration-[#c6fa0a]" : ""} >ABOUT</button>
              <button onClick={()=>(router.push('/skills'))} className={pathname === "/skills" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>SKILLS</button>
              <button onClick={()=>{router.push('/experience')}}  className={pathname === "/experience" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>EXPERIENCE</button>
              <button onClick={()=>{router.push('/projects')}}  className={pathname === "/projects" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>PROJECTS</button>
              <button onClick={()=>{router.push('/contact')}}  className={pathname === "/contact" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>CONTACT</button>
              <button  className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3'>RESUME</button>
        </div>
        </div>
    )
}
export default Projects