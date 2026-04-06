"use client";
import ProfileCard from "@/components/ProfileCard"
import MagicBento from "@/components/MagicBento";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import Beams from "@/components/dotGrid";
import Footer from "@/components/footer";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const About = () => {
  const router = useRouter()
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/home" },
    { label: "ABOUT", path: "/about" },
    { label: "SKILLS", path: "/skills" },
    { label: "EXPERIENCE", path: "/experience" },
    { label: "PROJECTS", path: "/projects" },
    { label: "CONTACT", path: "/contact" },
  ];

  return (
    <>
      <div className="min-h-screen w-screen relative overflow-hidden">

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

          {/* Mobile: page title */}
          <span className="block lg:hidden text-white font-extrabold text-base">PORTFOLIO.</span>

          {/* Desktop nav links */}
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

          {/* Mobile hamburger */}
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
        <div className="pt-16 sm:pt-20 lg:pt-25 text-white font-extrabold flex flex-col lg:flex-row items-center gap-10 lg:gap-20 justify-center px-4 pb-10">

          {/* Profile Card */}
          <div className="w-full flex justify-center lg:w-auto">
            <ProfileCard
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

          {/* Magic Bento */}
          <div className="font-mono w-full lg:w-auto flex justify-center">
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
      <Footer />
    </>
  );
}

export default About;