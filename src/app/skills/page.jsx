"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Beams from '@/components/dotGrid';
import Footer from '@/components/footer';
const Skills=()=>{
    const router = useRouter()
    const pathname = usePathname();
    return(
        <div className=" flex flex-col items-center min-h-screen w-full  gap-5" >
         
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
                <h1 className="text-5xl  font-extrabold text-white bg-gradient-to-r from-[] to-[] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-10">Skills & Technologies</h1>
            </div>
            <div>
                <h2 className='text-white font-mono text-lg'>Technologies I work with on a daily basis</h2>
            </div>
            <div>
                <h1 className='text-black'><hr/></h1>
            </div>
            <div className='flex flex-wrap justify-center gap-2 mb-12'>
                     <button onClick={()=>{router.push("/allskills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300  border border-black/10     ${pathname === "/allskills" ? "bg-white text-black" : "bg-white/50 text-black"} `}>All</button>
                     <button onClick={()=>{router.push("/frontendSkills")}}  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300  border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/frontendSkills" ? "bg-white text-black" : "bg-white/50 text-black"} `}>Frontend</button>
                     <button onClick={()=>{router.push("/backendSkills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/backendSkills" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Backend</button>
                     <button onClick={()=>{router.push("/language")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/language" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Language</button>
                     <button onClick={()=>{router.push("/database")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/database" ? "bg-white text-black" : "bg-white/50 text-black"}`} >Database</button>
                     <button onClick={()=>{router.push("/tools")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/tools" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Tools</button>
                     <button onClick={()=>{router.push("/devops")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/devops" ? "bg-white text-black" : "bg-white/50 text-black"}`}>DevOps</button>
            </div>
            <div className='grid font-mono grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%] mb-20'>
                <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className=' text-white font-bold shadow group-hover: transition-colors'>React.js</span>
                        <span className='text-white/70'>"92%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border bg-white/40  p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Next.js</span>
                        <span className='text-white/70'>"90%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>JavaScript</span>
                        <span className='text-white/70'>"95%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Language</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>TypeScript</span>
                        <span className='text-white/70'>"80%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Language</span>
                  </div>  

                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover:text- transition-colors'>HTML/CSS</span>
                        <span className='text-white/70'>"99%%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Frontend</span>
                  </div>  

                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Tailwind CSS</span>
                        <span className='text-white/70'>"95%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Node.js</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Backend</span>
                  </div>  
                

                <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Express.js</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Backend</span>
                  </div>  

                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>MongoDB</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Database</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>PostgreSQL</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Database</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>RestAPIs</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Backend</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Git & Github</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Tools</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Docker</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">DevOps</span>
                  </div>  


                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>AWS</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">DevOps</span>
                  </div>  

                  <div className='gradient-border bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Redux</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Frontend</span>
                  </div>  


                  <div className='gradient-border  bg-white/40 p-5 rounded-2xl group hover:bg-white/60 transition-all duration-500 animate-fade-in-up shadow hover:shadow-white' >
                    <div className='flex items-center justify-between mb-3'>
                        <span className='text-white font-bold group-hover: transition-colors'>Firebase</span>
                        <span className='text-white/70'>"5%"</span>
                    </div>
                    <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
                        <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
                    </div>
                    <span className="text-xs text-black mt-2 block">Backend</span>
                  </div>  






            </div>
            
             <Footer/>
            
            

            
   

        </div>
    )
    
}
export default Skills