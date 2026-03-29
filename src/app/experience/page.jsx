"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";



const Experience=()=>{
    const router = useRouter()
    const pathname = usePathname();
   return(
<div className="min-h-screen w-screen bg-white ">
    <div className="h-12 flex justify-center gap-10 text-xs font-bold w-screen bg-[#525251] ">
        <button onClick={()=>{router.push('/home')}} className={pathname === "/home" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>HOME</button>
        <button onClick={()=>{router.push('/about')}} className={pathname === "/about" ? "underline decoration-3 decoration-[#c6fa0a]" : ""} >ABOUT</button>
        <button onClick={()=>(router.push('/skills'))} className={pathname === "/skills" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>SKILLS</button>
        <button onClick={()=>{router.push('/experience')}}  className={pathname === "/experience" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>EXPERIENCE</button>
        <button onClick={()=>{router.push('/projects')}}  className={pathname === "/projects" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>PROJECTS</button>
        <button onClick={()=>{router.push('/contact')}}  className={pathname === "/contact" ? "underline decoration-3 decoration-[#c6fa0a]" : ""}>CONTACT</button>
        <button  className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3'>RESUME</button>
    </div>
    
    <div className='flex flex-col items-center gap-5'>
        <h1 className='text-5xl font-bold text-black mt-20'>Experience</h1>
        <h2 className='text-black/30 text-lg'>My professional journey</h2>
        <div className='rounded-full mx-auto h-[1] bg-black w-[5%] overflow-hidden '>
            <div className='rounded-full bg-black h-full w-full  transition-all duration-1000 ease-out'></div>
        </div>
        <div className='flex flex-col  p-6 h-65 bg-white w-[50%] rounded-2xl transition shadow border border-gray-300 hover:shadow-2xl mt-12'>
           
            <h1 className='text-black text-lg font-bold'>Web Development Intern</h1>
            <h3 className='text-black/30'>Technova Solutions</h3>
            <div className='flex text-black/40 gap-3 mt-3'>
                <button className='flex px-2 rounded-4xl  bg-gray-300'>Nov-2025-Present</button>
                <div>Bhopal</div>
            </div>
            <div className='mt-5 w-[90%]'>
            <p className='text-black/50 '>
                Working on building and maintaining web applications using React and Node.js. Collaborating with the team on frontend UI components and backend API development.
            </p>
            </div>
            
            

        </div>
        

    </div>
</div>
   )
}
export default Experience