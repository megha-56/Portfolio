"use client";
import ProfileCard from "@/components/ProfileCard"
import MagicBento from "@/components/MagicBento";
const About=()=>{
   return(
    <>
<div className="min-h-screen w-screen bg-white ">
    <div className="h-12 w-screen bg-[#525251]">
   
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
     avatarUrl="/avatar.jpg"
     showUserInfo={false}
     enableTilt={true}
     enableMobileTilt={false}
     onContactClick={() => console.log('Contact clicked')}
     behindGlowColor="rgba(200, 200, 200, 0.2)"
     iconUrl="https://www.vhv.rs/dpng/d/433-4334454_svg-source-code-icon-hd-png-download.png"
     behindGlowEnabled
     innerGradient="linear-gradient(145deg, #f4fca7 0%, #e0e0e0 100%)"
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