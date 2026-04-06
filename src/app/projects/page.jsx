"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import Beams from '@/components/dotGrid';
import Footer from '@/components/footer';
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Projects = () => {
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
        <div className="relative flex flex-col items-center min-h-screen w-full gap-5">

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

            {/* Header */}
            <div className="flex flex-col font-mono items-center gap-5 px-4 text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-16">
                    Featured Projects
                </h1>
                <h2 className="text-sm sm:text-base lg:text-lg text-white">
                    Some of the things I've built recently
                </h2>
                <div className="rounded-full mx-auto h-[1px] bg-white w-[40%] sm:w-[25%] lg:w-[15%] overflow-hidden">
                    <div className="rounded-full bg-white h-full w-full"></div>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 w-full justify-center mt-10 px-4 pb-20">

                <div className="bg-white shadow shadow-white w-full sm:w-[45%] lg:w-[27%] border border-gray-300 rounded-2xl hover:shadow-2xl transition-shadow duration-300">

                    <div className="flex flex-col items-center gap-3 justify-center h-50 bg-gray-100 rounded-t-2xl">
                        <div className="flex justify-center items-center h-15 w-15 bg-black rounded-2xl text-2xl font-bold text-white">F</div>
                        <h2 className="text-black/25">Ice-cream Website</h2>
                    </div>

                    <div className="flex flex-col w-full px-5 sm:px-7 py-5 gap-5">
                        <h1 className="text-xl font-bold text-black/90">Frozen-Scoops</h1>

                        <p className="text-black/40 text-sm">
                            Frozen Scopps is an Icecream Website, having a range of iceCreams, milkshakes, Yoghurts etc. that are perfect for your fresh Mind.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <button className="px-3 py-2 bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs">React</button>
                            <button className="px-3 py-2 bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs">Tailwind</button>
                            <button className="px-3 py-2 bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs">javascript</button>
                            <button className="px-3 py-2 bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs">html</button>
                            <button className="px-3 py-2 bg-gray-200 text-black/60 border border-gray-400 rounded-3xl text-xs">css</button>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <button
                                className="flex items-center h-10 bg-gray-200 px-4 py-2 rounded gap-2 text-black text-sm"
                                onClick={() => window.open("https://github.com/megha-56/Frozen-Scoops-Icecream", "_blank")}
                            >
                                <FaCode /> Code
                            </button>
                            <button
                                className="flex items-center h-10 bg-black text-white px-4 py-2 rounded gap-2 text-sm"
                                onClick={() => window.open("https://frozen-scoops-icecream.vercel.app", "_blank")}
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <Footer />
        </>
    );
}

export default Projects;