"use client";
import { useRouter } from 'next/navigation'
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Hero = () => {
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
        <div className="relative flex w-screen h-screen bg-gray-400">

            {/* LEFT PANEL */}
            <div className="hidden lg:block w-[35%] bg-no-repeat bg-cover opacity-110" style={{ backgroundImage: "url('pbg.jpeg')" }}>
                <div className="h-15 bg-black/10">
                    <h1 className="text-center pt-5 text-white font-extrabold text-3xl">PORTFOLIO.</h1>
                </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="w-full lg:w-[65%] h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('port.jpeg')" }}>

                {/* NAV BAR */}
                <div className="flex items-center justify-between px-4 lg:px-0 lg:gap-10 lg:justify-center text-sm font-bold h-14 lg:h-15 bg-[#525251]">

                    {/* Mobile: PORTFOLIO title */}
                    <span className="block lg:hidden text-white font-extrabold text-lg">PORTFOLIO.</span>

                    {/* Desktop nav links */}
                    <div className="hidden lg:flex items-center gap-10">
                        {navLinks.map(({ label, path }) => (
                            <button
                                key={path}
                                onClick={() => router.push(path)}
                                className={pathname === path ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer text-white" : "cursor-pointer text-white"}
                            >
                                {label}
                            </button>
                        ))}
                        <button
                            onClick={() => window.open("/resume.pdf", "_blank")}
                            className="flex border bg-black text-white rounded-2xl px-4 py-1 cursor-pointer"
                        >
                            RESUME
                        </button>
                    </div>

                    {/* Mobile hamburger icon */}
                    <button
                        className="block lg:hidden text-white z-50"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown Menu */}
                {menuOpen && (
                    <div className="lg:hidden absolute top-14 right-0 w-56 bg-[#525251]/95 backdrop-blur-sm z-40 flex flex-col py-3 shadow-xl rounded-bl-xl">
                        {navLinks.map(({ label, path }) => (
                            <button
                                key={path}
                                onClick={() => { router.push(path); setMenuOpen(false); }}
                                className={`text-left px-6 py-3 text-sm font-bold text-white hover:bg-[#c6fa0a]/20 transition-colors ${
                                    pathname === path ? "underline decoration-2 decoration-[#c6fa0a]" : ""
                                }`}
                            >
                                {label}
                            </button>
                        ))}
                        <div className="border-t border-white/20 mt-2 pt-2 px-6">
                            <button
                                onClick={() => { window.open("/resume.pdf", "_blank"); setMenuOpen(false); }}
                                className="w-full border bg-black text-white rounded-2xl px-4 py-2 cursor-pointer text-sm font-bold"
                            >
                                RESUME
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* HERO TEXT */}
            <div className="
                absolute inset-0 flex flex-col justify-center pointer-events-none
                ml-5 sm:ml-16 md:ml-24 lg:ml-60
                mt-10 sm:mt-0 lg:mt-50
            ">
                <h2 className="text-white text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-extrabold">MY NAME IS</h2>
                <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
                    MEGHA PANTHI
                </h1>
                <h1 className="font-extrabold text-sm sm:text-base lg:text-xl text-center py-3 text-black border h-15 w-60 sm:w-72 lg:w-90 bg-[#ffff00]">
                    I'M A FULL STACK DEVELOPER
                </h1>
            </div>

        </div>
        </>
    )
}

export default Hero