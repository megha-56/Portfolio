"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
const FrontendSkills=()=>{
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
              <button  onClick={() => window.open("/resume.pdf", "_blank")} className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3'>RESUME</button>
        </div>
            <div>
                <h1 className="text-5xl font-extrabold text-black bg-gradient-to-r from-[#f5fcca] to-[#eaff73] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-10">Skills & Technologies</h1>
            </div>
            <div>
                <h2 className='text-black/40 text-lg'>Technologies I work with on a daily basis</h2>
            </div>
            <div>
                <h1 className='text-black'><hr/></h1>
            </div>
            <div className='flex flex-wrap justify-center gap-2 mb-12'>
                     <button onClick={()=>{router.push("/allskills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 hover:text-black border border-black/10  hover:border-black/20   ${pathname === "/allskills" ? "bg-black text-white" : "bg-white text-gray-400"} `}>All</button>
                     <button onClick={()=>{router.push("/frontendSkills")}}  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300  border border-black/10   hover:border-black/20 active:bg-black ${pathname === "/frontendSkills" ? "bg-black text-white" : "bg-white text-gray-400"} `}>Frontend</button>
                     <button onClick={()=>{router.push("/backendSkills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/backendSkills" ? "bg-black text-white" : "bg-white text-gray-400"}`}>Backend</button>
                     <button onClick={()=>{router.push("/language")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/language" ? "bg-black text-white" : "bg-white text-gray-400"}`}>Language</button>
                     <button onClick={()=>{router.push("/database")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/database" ? "bg-black text-white" : "bg-white text-gray-400"}`} >Database</button>
                     <button onClick={()=>{router.push("/tools")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/tools" ? "bg-black text-white" : "bg-white text-gray-400"}`}>Tools</button>
                     <button onClick={()=>{router.push("/devops")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/devops" ? "bg-black text-white" : "bg-white text-gray-400"}`}>DevOps</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%]'>
                <div className='gradient-border p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>React.js</span>
                        <span className='text-black/30'>"92%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Next.js</span>
                        <span className='text-black/30'>"90%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 block">Frontend</span>
                  </div>  


                  

                  <div className='gradient-border p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>HTML/CSS</span>
                        <span className='text-black/30'>"99%%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Tailwind CSS</span>
                        <span className='text-black/30'>"95%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 block">Frontend</span>
                  </div>  


                  
                   

                  <div className='gradient-border p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Redux</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-gray-400 mt-2 block">Frontend</span>
                  </div>  






            </div>

            
   

        </div>
    )
    
}
export default FrontendSkills