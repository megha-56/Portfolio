// "use client";
// import { useRouter } from 'next/navigation';
// import { usePathname } from "next/navigation";
// import Beams from '@/components/dotGrid';
// import Footer from '@/components/footer';


// const Experience=()=>{
//     const router = useRouter()
//     const pathname = usePathname();
//    return(
//     <>
// <div className="relative min-h-screen w-screen">

//     <div className="absolute  inset-0 -z-10">
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


//     <div className="h-12 flex justify-center gap-10 text-xs font-bold w-screen bg-[#525251] ">
//         <button onClick={()=>{router.push('/home')}} className={pathname === "/home" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>HOME</button>
//         <button onClick={()=>{router.push('/about')}} className={pathname === "/about" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"} >ABOUT</button>
//         <button onClick={()=>(router.push('/skills'))} className={pathname === "/skills" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>SKILLS</button>
//         <button onClick={()=>{router.push('/experience')}}  className={pathname === "/experience" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>EXPERIENCE</button>
//         <button onClick={()=>{router.push('/projects')}}  className={pathname === "/projects" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>PROJECTS</button>
//         <button onClick={()=>{router.push('/contact')}}  className={pathname === "/contact" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>CONTACT</button>
//         <button onClick={() => window.open("/resume.pdf", "_blank")} className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3 cursor-pointer'>RESUME</button>
//     </div>
    
//     <div className='flex mb-20 flex-col  items-center gap-5'>
//         <h1 className='text-5xl font-mono font-extrabold text-white bg-gradient-to-r from-[] to-[] bg-[length:100%_40%] bg-no-repeat bg-bottom mt-15'>Experience</h1>
//         <h2 className=' font-mono text-white text-lg'>My professional journey</h2>
//         <div className='rounded-full mx-auto h-[1] bg-white w-[5%] overflow-hidden '>
//             <div className='rounded-full bg-white h-full w-full  transition-all duration-1000 ease-out'></div>
//         </div>
//         <div className='flex flex-col   p-6 h-65 bg-white w-[50%] rounded-2xl transition shadow shadow-white/70 border border-gray-300 hover:shadow-2xl mt-12'>
           
//             <h1 className='text-black text-lg font-bold'>Web Development Intern</h1>
//             <h3 className='text-black/30'>Technova Solutions</h3>
//             <div className='flex text-black/40 gap-3 mt-3'>
//                 <button className='flex px-2 rounded-4xl  bg-gray-300'>Nov-2025-Present</button>
//                 <div>Bhopal</div>
//             </div>
//             <div className='mt-5 w-[90%]'>
//             <p className='text-  text-black/50 '>
//                 Working on building and maintaining web applications using React and Node.js. Collaborating with the team on frontend UI components and backend API development.
//             </p>
//             </div>

            

//         </div>
        
        

//     </div>
    
// </div>
// <Footer/>
// </>
//    )
// }
// export default Experience

"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Beams from '@/components/dotGrid';
import Footer from '@/components/footer';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Experience = () => {
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

    return (
        <>
        <div className="relative min-h-screen w-screen">

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

            {/* CONTENT */}
            <div className="flex mb-20 flex-col items-center gap-5 px-4">

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-mono font-extrabold text-white bg-no-repeat bg-bottom mt-15 text-center">
                    Experience
                </h1>

                {/* Subtitle */}
                <h2 className="font-mono text-white text-base sm:text-lg text-center">
                    My professional journey
                </h2>

                {/* Divider */}
                <div className="rounded-full mx-auto h-[1px] bg-white w-[10%] sm:w-[7%] lg:w-[5%] overflow-hidden">
                    <div className="rounded-full bg-white h-full w-full transition-all duration-1000 ease-out"></div>
                </div>

                {/* Experience Card */}
                <div className="flex flex-col p-6 bg-white w-full sm:w-[75%] lg:w-[50%] rounded-2xl transition shadow shadow-white/70 border border-gray-300 hover:shadow-2xl mt-12">

                    <h1 className="text-black text-lg font-bold">Web Development Intern</h1>
                    <h3 className="text-black/30">Technova Solutions</h3>

                    <div className="flex flex-wrap text-black/40 gap-3 mt-3">
                        <button className="flex px-2 rounded-4xl bg-gray-300">Nov-2025-Present</button>
                        <div>Bhopal</div>
                    </div>

                    <div className="mt-5 w-full lg:w-[90%]">
                        <p className="text-black/50">
                            Working on building and maintaining web applications using React and Node.js. Collaborating with the team on frontend UI components and backend API development.
                        </p>
                    </div>

                </div>

            </div>

        </div>
        <Footer />
        </>
    );
}

export default Experience;