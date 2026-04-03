"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Beams from '@/components/dotGrid';

const Skills=()=>{
    const router = useRouter()
    const pathname = usePathname();
    const [show, setShow] = useState(false);

    useEffect(() => {
    setShow(true);
  }, []);


    return(
        
         
        <div className=" relative flex flex-col items-center min-h-screen w-full gap-5" >

        <div className="absolute  inset-0 -z-10">
  <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
</div>


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
                <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-[] to-[] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-10">Skills & Technologies</h1>
            </div>
            <div>
                <h2 className='text-black/40 text-lg'>Technologies I work with on a daily basis</h2>
            </div>
            <div>
                <h1 className='text-black'><hr/></h1>
            </div>
            <div className='flex flex-wrap justify-center gap-2 mb-12'>
                     <button onClick={()=>{router.push("/allskills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>All</button>
                     <button onClick={()=>{router.push("/frontendSkills")}}  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>Frontend</button>
                     <button onClick={()=>{router.push("/backendSkills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>Backend</button>
                     <button onClick={()=>{router.push("/language")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>Language</button>
                     <button onClick={()=>{router.push("/database")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`} >Database</button>
                     <button onClick={()=>{router.push("/tools")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>Tools</button>
                     <button onClick={()=>{router.push("/devops")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 bg-white border border-black/10 text-gray-400 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/home" ? "bg-black text-white" : ""}`}>DevOps</button>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%]'>
                <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>React.js</span>
                        <span className='text-black/30'>"92%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Next.js</span>
                        <span className='text-black/30'>"90%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>JavaScript</span>
                        <span className='text-black/30'>"95%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Language</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>TypeScript</span>
                        <span className='text-black/30'>"80%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Language</span>
                  </div>  

                  <div className='gradient-border p-5 bg-white/50 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>HTML/CSS</span>
                        <span className='text-black/30'>"99%%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Tailwind CSS</span>
                        <span className='text-black/30'>"95%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Node.js</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Backend</span>
                  </div>  
                

                <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Express.js</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Backend</span>
                  </div>  

                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>MongoDB</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Database</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>PostgreSQL</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Database</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>RestAPIs</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xstext-white mt-2 block">Backend</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Git & Github</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Tools</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Docker</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">DevOps</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>AWS</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">DevOps</span>
                  </div>  

                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Redux</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-white mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border bg-white/50 p-5 rounded-2xl group hover:bg-gray-50 transition-all duration-500 animate-fade-in-up' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='font-medium text-black group-hover:text-gray-700 transition-colors'>Firebase</span>
                        <span className='text-black/30'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs  text-white mt-2 block">Backend</span>
                  </div>  






            </div>

            
   

        </div>
    )
    
}
export default Skills