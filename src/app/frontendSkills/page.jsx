// "use client";
// import { useRouter } from 'next/navigation';
// import { usePathname } from "next/navigation";
// import Beams from '@/components/dotGrid';
// import Footer from '@/components/footer';
// const frontendSkills=()=>{
//     const router = useRouter()
//     const pathname = usePathname();
//     return(
//         <>
//         <div className=" flex flex-col items-center min-h-screen w-full  gap-5" >
         
//          <div className="absolute  inset-0 -z-10">
//   <Beams
//     beamWidth={3}
//     beamHeight={30}
//     beamNumber={20}
//     lightColor="#ffffff"
//     speed={2}
//     noiseIntensity={1.75}
//     scale={0.2}
//     rotation={30}
//   />
// </div>

//             <div className="h-12 flex justify-center gap-10 text-xs font-bold w-screen bg-[#525251] ">
//               <button onClick={()=>{router.push('/home')}} className={pathname === "/home" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>HOME</button>
//               <button onClick={()=>{router.push('/about')}} className={pathname === "/about" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"} >ABOUT</button>
//               <button onClick={()=>(router.push('/skills'))} className={pathname === "/skills" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>SKILLS</button>
//               <button onClick={()=>{router.push('/experience')}}  className={pathname === "/experience" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>EXPERIENCE</button>
//               <button onClick={()=>{router.push('/projects')}}  className={pathname === "/projects" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>PROJECTS</button>
//               <button onClick={()=>{router.push('/contact')}}  className={pathname === "/contact" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>CONTACT</button>
//               <button  onClick={() => window.open("/resume.pdf", "_blank")} className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3 cursor-pointer'>RESUME</button>
//         </div>
//             <div>
//                 <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-[] to-[] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-10">Skills & Technologies</h1>
//             </div>
//             <div>
//                 <h2 className='text-white text-lg'>Technologies I work with on a daily basis</h2>
//             </div>
//             <div>
//                 <h1 className='text-black'><hr/></h1>
//             </div>
//             <div className='flex flex-wrap justify-center gap-2 mb-12'>
//                      <button onClick={()=>{router.push("/allskills")}} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duratiion-300  border border-black/10     ${pathname === "/allskills" ? "bg-white text-black" : "bg-white/50 text-black"} `}>All</button>
//                      <button onClick={()=>{router.push("/frontendSkills")}}  className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300  border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/frontendSkills" ? "bg-white text-black" : "bg-white/50 text-black"} `}>Frontend</button>
//                      <button onClick={()=>{router.push("/backendSkills")}} className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/backendSkills" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Backend</button>
//                      <button onClick={()=>{router.push("/language")}} className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/language" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Language</button>
//                      <button onClick={()=>{router.push("/database")}} className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/database" ? "bg-white text-black" : "bg-white/50 text-black"}`} >Database</button>
//                      <button onClick={()=>{router.push("/tools")}} className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/tools" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Tools</button>
//                      <button onClick={()=>{router.push("/devops")}} className={`px-5 cursor-pointer py-2 rounded-full text-sm font-medium transition-all duratiion-300 border border-black/10  hover:text-black hover:border-black/20 active:bg-black ${pathname === "/devops" ? "bg-white text-black" : "bg-white/50 text-black"}`}>DevOps</button>
//             </div>
//             <div className='grid font-mono grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[70%]'>
//                 <div className='gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400' >
//                     <div className='flex items-center justify-between mb-3'>
//                         <span className=' text-black font-bold group-hover: transition-colors'>React.js</span>
//                         <span className='text-black'>"92%"</span>
//                     </div>
//                     <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
//                         <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
//                     </div>
//                     <span className="text-xs text-black mt-2 block">Frontend</span>
//                   </div>  

//                   <div className='gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400' >
//                     <div className='flex items-center justify-between mb-3'>
//                         <span className='text-black font-bold group-hover: transition-colors'>Next.js</span>
//                         <span className='text-black'>"90%"</span>
//                     </div>
//                     <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
//                         <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
//                     </div>
//                     <span className="text-xs text-black mt-2 block">Frontend</span>
//                   </div>  

//                   <div className='gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400' >
//                     <div className='flex items-center justify-between mb-3'>
//                         <span className='text-black font-bold group-hover:text- transition-colors'>HTML/CSS</span>
//                         <span className='text-black'>"99%%"</span>
//                     </div>
//                     <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
//                         <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
//                     </div>
//                     <span className="text-xs text-black mt-2 block">Frontend</span>
//                   </div>  

//                   <div className='gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400' >
//                     <div className='flex items-center justify-between mb-3'>
//                         <span className='text-black font-bold group-hover: transition-colors'>Tailwind CSS</span>
//                         <span className='text-black'>"95%"</span>
//                     </div>
//                     <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
//                         <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
//                     </div>
//                     <span className="text-xs text-black mt-2 block">Frontend</span>
//                   </div>  


//                   <div className='gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400' >
//                     <div className='flex items-center justify-between mb-3'>
//                         <span className='text-black font-bold group-hover: transition-colors'>Redux</span>
//                         <span className='text-black'>"5%"</span>
//                     </div>
//                     <div className='w-full h-1.5 rounded-full bg-gray-100 overflow-hidden'>
//                         <div className='h-full rounded-full w-[92%] bg-black transition-all duration-1000 ease-out '></div>
//                     </div>
//                     <span className="text-xs text-black mt-2 block">Frontend</span>
//                   </div>  


//             </div>

            
   

//         </div>
//         <Footer/>
//         </>
//     )
    
// }
// export default frontendSkills
"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Beams from '@/components/dotGrid';
import Footer from '@/components/footer';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const frontendSkills = () => {
    const router = useRouter()
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { label: "HOME",       path: "/home"       },
        { label: "ABOUT",      path: "/about"      },
        { label: "SKILLS",     path: "/skills"     },
        { label: "EXPERIENCE", path: "/experience" },
        { label: "PROJECTS",   path: "/projects"   },
        { label: "CONTACT",    path: "/contact"    },
    ];

    const skills = [
        { name: "React.js",     pct: "92%", bar: "w-[92%]", cat: "Frontend" },
        { name: "Next.js",      pct: "90%", bar: "w-[90%]", cat: "Frontend" },
        { name: "HTML/CSS",     pct: "99%", bar: "w-[99%]", cat: "Frontend" },
        { name: "Tailwind CSS", pct: "95%", bar: "w-[95%]", cat: "Frontend" },
        { name: "Redux",        pct: "5%",  bar: "w-[5%]",  cat: "Frontend" },
    ];

    return (
        <>
        <div className="flex flex-col items-center min-h-screen w-full gap-5">

            {/* Background */}
            <div className="absolute inset-0 -z-10">
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

            {/* NAVBAR */}
            <div className="relative h-12 flex items-center justify-between lg:justify-center px-4 lg:px-0 lg:gap-10 text-xs font-bold w-screen bg-[#525251]">

                {/* Mobile title */}
                <span className="block lg:hidden text-white font-extrabold text-base">PORTFOLIO.</span>

                {/* Desktop links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map(({ label, path }) => (
                        <button
                            key={path}
                            onClick={() => router.push(path)}
                            className={pathname === path ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}
                        >
                            {label}
                        </button>
                    ))}
                    <button
                        onClick={() => window.open("/resume.pdf", "_blank")}
                        className="flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3 cursor-pointer"
                    >
                        RESUME
                    </button>
                </div>

                {/* Hamburger */}
                <button
                    className="block lg:hidden text-white z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="lg:hidden absolute top-12 right-0 w-56 bg-[#525251]/95 backdrop-blur-sm z-40 flex flex-col py-3 shadow-xl rounded-bl-xl">
                    {navLinks.map(({ label, path }) => (
                        <button
                            key={path}
                            onClick={() => { router.push(path); setMenuOpen(false); }}
                            className={`text-left px-6 py-3 text-xs font-bold text-white hover:bg-[#c6fa0a]/20 transition-colors ${
                                pathname === path ? "underline decoration-2 decoration-[#c6fa0a]" : ""
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                    <div className="border-t border-white/20 mt-2 pt-2 px-6">
                        <button
                            onClick={() => { window.open("/resume.pdf", "_blank"); setMenuOpen(false); }}
                            className="w-full border bg-black text-white rounded-2xl px-4 py-2 cursor-pointer text-xs font-bold"
                        >
                            RESUME
                        </button>
                    </div>
                </div>
            )}

            {/* Title */}
            <div className="px-4 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white bg-no-repeat bg-bottom mt-10">
                    Skills & Technologies
                </h1>
            </div>

            {/* Subtitle */}
            <div className="px-4 text-center">
                <h2 className="text-white text-base sm:text-lg">
                    Technologies I work with on a daily basis
                </h2>
            </div>

            <div>
                <h1 className="text-black"><hr /></h1>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 px-4">
                <button onClick={() => router.push("/allskills")} className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border border-black/10 ${pathname === "/allskills" ? "bg-white text-black" : "bg-white/50 text-black"}`}>All</button>
                <button onClick={() => router.push("/frontendSkills")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/frontendSkills" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Frontend</button>
                <button onClick={() => router.push("/backendSkills")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/backendSkills" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Backend</button>
                <button onClick={() => router.push("/language")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/language" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Language</button>
                <button onClick={() => router.push("/database")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/database" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Database</button>
                <button onClick={() => router.push("/tools")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/tools" ? "bg-white text-black" : "bg-white/50 text-black"}`}>Tools</button>
                <button onClick={() => router.push("/devops")} className={`px-5 py-2 cursor-pointer rounded-full text-sm font-medium transition-all duration-300 border border-black/10 hover:text-black hover:border-black/20 active:bg-black ${pathname === "/devops" ? "bg-white text-black" : "bg-white/50 text-black"}`}>DevOps</button>
            </div>

            {/* Skills Grid */}
            <div className="grid font-mono grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-[90%] sm:w-[80%] lg:w-[70%] mb-20">
                {skills.map(({ name, pct, bar, cat }) => (
                    <div key={name} className="gradient-border bg-white text-black p-5 rounded-2xl group hover:shadow-xl transition-all duration-500 animate-fade-in-up shadow hover:shadow-gray-400">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-black font-bold transition-colors">{name}</span>
                            <span className="text-black">"{pct}"</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                            <div className={`h-full rounded-full ${bar} bg-black transition-all duration-1000 ease-out`}></div>
                        </div>
                        <span className="text-xs text-black mt-2 block">{cat}</span>
                    </div>
                ))}
            </div>

        </div>
        <Footer />
        </>
    );
}

export default frontendSkills;