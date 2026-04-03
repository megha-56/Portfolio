"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
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
              <button onClick={() => window.open("/resume.pdf", "_blank")} className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3'>RESUME</button>
             </div>
             <div className='flex flex-col items-center gap-5'>
               <h1 className='text-5xl font-extrabold text-black bg-gradient-to-r from-[#f5fcca] to-[#eaff73] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-16'>Featured Projects</h1>
               <h2 className='text-black/30 text-lg'>Some of the things I've built recently</h2>
          
               <div className='rounded-full mx-auto h-[1] bg-black w-[15%] overflow-hidden '>
                   <div className='rounded-full bg-black h-full w-full  transition-all duration-1000 ease-out'></div>
               </div>
             </div>
             <div className='flex flex-wrap gap-10 min-h-200 w-full justify-center mt-10'>
                <div className='h-130 bg-white w-[27%] border border-top border-gray-300 rounded-2xl shadow object hover:shadow-2xl'>
                    <div className='flex flex-col items-center gap-3 justify-center h-50 bg-gray-100 rounded-2xl'>
                        <div className='flex justify-center items-center h-15 w-15 bg-black rounded-2xl text-2xl px-auto py-auto font-bold'>F</div>
                        <div><h2 className='text-black/25'>Ice-cream Website</h2></div>
                    </div>
                    <div className='flex flex-col h-100 w-full px-7 py-5 gap-5 '>
                        <h1 className='text-xl font-bold text-black/90'>Frozen-Scoops</h1>
                        <p className='text-black/40 text-sm '>Frozen Scopps is an Icecream Website, having a range of iceCreams, milkshakes ,Yoghurts etc. that are perfect for your fresh Mind</p>
                        <div className='flex flex-wrap gap-3'>
                              <button className='flex px-3 py-2 h-auto w-auto shadow bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs'>React</button>
                              <button className='flex px-3 py-2 h-auto w-auto shadow bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs'>Tailwind</button>
                              <button className='flex px-3 py-2 h-auto w-auto shadow bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs'>javascript</button>
                              <button className='flex px-3 py-2 h-auto w-auto shadow bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs'>html</button>
                              <button className='flex px-3 py-2 h-auto w-auto shadow bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs'>css</button>
                              <button></button>
                        </div>
                        <div className='flex gap-5'> 
                            <button className='flex h-10 w-auto bg-gray-200 px-4 py-2 rounded gap-3 text-black text-sm' onClick={() => window.open("https://github.com/megha-56/Frozen-Scoops-Icecream", "_blank")}> <FaCode /> Code</button>
                            <button className='flex h-10 w-auto bg-black px-4 py-2 rounded gap-3 text-sm' onClick={() => window.open("https://frozen-scoops-icecream.vercel.app", "_blank")}><FaExternalLinkAlt /> Live Demo</button>
   
                        </div>

                    </div>
                 </div>
                
                <div></div>
                <div></div>

             </div>
        </div>
    )
}
export default Projects