"use client";
import ProfileCard from "@/components/ProfileCard"
import MagicBento from "@/components/MagicBento";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";

const About=()=>{
  const router = useRouter()
  const pathname = usePathname();
   return(
    <>
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
    <div className="pt-25 flex gap-20 justify-center ">
    <div>
     <ProfileCard
     className=""
     name="Megha Panthi"
     title="Software Engineer"
     handle="javicodes"
     status="Online"
     contactText="Contact Me"
     avatarUrl="/port2.jpeg"
     showUserInfo={false}
     enableTilt={true}
     enableMobileTilt={false}
     onContactClick={() => console.log('Contact clicked')}
     behindGlowColor="rgba(200, 200, 200, 0.2)"
     iconUrl="https://www.vhv.rs/dpng/d/433-4334454_svg-source-code-icon-hd-png-download.png"
     behindGlowEnabled
     innerGradient="linear-gradient(145deg,0%, #e0e0e0 100%)"
     />
    </div>
      
      <div className="">

      <MagicBento 
       
       textAutoHide={true}
       enableStars
       enableSpotlight
       enableBorderGlow={true}
       enableTilt={false}
       enableMagnetism={false}
       clickEffect
       spotlightRadius={400}
       particleCount={12}
       glowColor="190, 209, 19"
       disableAnimations={false}
      />
      </div>
      </div>
     
</div>
</>
   )
}
export default About