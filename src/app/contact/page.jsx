// "use client";
// import { useRouter } from 'next/navigation';
// import { usePathname } from "next/navigation";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
// import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";
// import { toast } from "sonner";
// import { useState } from 'react';
// import Beams from '@/components/dotGrid';
// import Footer from '@/components/footer';

// const Contact = () => {
//   const router = useRouter();
//   const pathname = usePathname();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   return (
//     <>
//       <div className="min-h-screen mb-20 w-screen relative overflow-hidden">

//         {/* PageBackground */}
//         <div className="absolute inset-0 -z-10 ">
//           <Beams
//             beamWidth={3}
//             beamHeight={30}
//             beamNumber={20}
//             lightColor="#ffffff"
//             speed={2}
//             noiseIntensity={1.75}
//             scale={0.2}
//             rotation={30}
//           />
//         </div>

//         {/* Navbar */}
//         <div className="h-12 flex justify-center gap-6 sm:gap-10 text-xs font-bold w-screen bg-[#525251] overflow-x-auto px-2">
//           <button onClick={() => { router.push('/home') }} className={pathname === "/home" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>HOME</button>
//           <button onClick={() => { router.push('/about') }} className={pathname === "/about" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>ABOUT</button>
//           <button onClick={() => (router.push('/skills'))} className={pathname === "/skills" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>SKILLS</button>
//           <button onClick={() => { router.push('/experience') }} className={pathname === "/experience" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>EXPERIENCE</button>
//           <button onClick={() => { router.push('/projects') }} className={pathname === "/projects" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>PROJECTS</button>
//           <button onClick={() => { router.push('/contact') }} className={pathname === "/contact" ? "underline decoration-3 decoration-[#c6fa0a] cursor-pointer" : "cursor-pointer"}>CONTACT</button>
//           <button onClick={() => window.open("/resume.pdf", "_blank")} className='flex border bg-black rounded-2xl h-[50%] px-4 py-1 mt-3 cursor-pointer'>RESUME</button>
//         </div>

//         {/* Heading */}
//         <div className='flex font-mono flex-col items-center gap-5 px-4 text-center'>
//           <h1 className='text-5xl font-extrabold text-white mt-20'>Get in Touch</h1>
//           <h2 className='text-white text-lg'>Have a project in mind? Let's work together</h2>

//           <div className='rounded-full mx-auto h-[1] bg-white w-[5%] overflow-hidden'>
//             <div className='rounded-full bg-white h-full w-full transition-all duration-1000 ease-out'></div>
//           </div>
//         </div>

//         {/* Main Section */}
//         <div className='flex flex-col lg:flex-row mt-20 px-6 sm:px-10 md:px-20 lg:px-40 pb-30'>

//           {/* Left Card */}
//           <div className='h-130 hover:shadow-white/80 w-full lg:w-[40%] bg-white m-5 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300'>
//             <div className='flex flex-col p-10 gap-5'>
//               <h1 className='text-xl text-black font-extrabold'>Let's Connect</h1>
//               <p className='text-black/40'>
//                 I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
//               </p>

//               <div className='flex mt-5'>
//                 <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaEnvelope className="text-black text-lg" /></span>
//                 <span>
//                   <h2 className='text-xs text-black/35'>EMAIL</h2>
//                   <h2 className='text-black'>meghapanthi435@gmail.com</h2>
//                 </span>
//               </div>

//               <div className='flex'>
//                 <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaPhone className="text-black text-lg" /></span>
//                 <span>
//                   <h2 className='text-xs text-black/35'>PHONE</h2>
//                   <h2 className='text-black'>8815991877</h2>
//                 </span>
//               </div>

//               <div className='flex'>
//                 <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaMapMarkerAlt className="text-black text-lg" /></span>
//                 <span>
//                   <h2 className='text-xs text-black/35'>Location</h2>
//                   <h2 className='text-black'>India</h2>
//                 </span>
//               </div>

//               <hr />

//               <div className='flex flex-col'>
//                 <h2 className='text-gray-400'>Follow me on</h2>
//                 <div className='flex gap-4'>

//                   <button onClick={() => window.open("https://linkedin.com/in/megha-panthi-870304299", "_blank")}
//                     className="p-3 bg-gray-200 rounded-xl text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
//                     <FaLinkedin className="text-lg" />
//                   </button>

//                   <button onClick={() => window.open("https://github.com/megha-56", "_blank")}
//                     className="p-3 bg-gray-200 text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300">
//                     <FaGithub className="text-lg" />
//                   </button>

//                   <button onClick={() => window.open("https://twitter.com/MeghaPanth17153", "_blank")}
//                     className="p-3 bg-gray-200 text-black rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
//                     <FaTwitter className="text-lg" />
//                   </button>

//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Card */}
//           <div className='flex flex-col hover:shadow-white/80 gap-8 h-130 w-full lg:w-[60%] bg-white m-5 p-10 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300'>

//             <div className='flex flex-col sm:flex-row gap-3 w-full'>
//               <span className='w-full'>
//                 <label className='text-black/40 text-sm'>Your Name</label><br />
//                 <input
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className='hover:border-gray-600 h-10 w-full sm:w-70 border pl-3 text-black border-gray-400 rounded-lg bg-black/5'
//                   type='text'
//                   placeholder='Enter Your Full Name'
//                 />
//               </span>

//               <span className='w-full'>
//                 <label className='text-black/40 text-sm'>Your Email</label><br />
//                 <input
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className='hover:border-gray-600 h-10 w-full sm:w-70 border text-black pl-3 border-gray-400 rounded-lg bg-black/5'
//                   type='text'
//                   placeholder='Enter Your E-mail'
//                 />
//               </span>
//             </div>

//             <div>
//               <label className='text-black/40 text-sm'>Subject</label>
//               <input
//                 value={form.subject}
//                 onChange={(e) => setForm({ ...form, subject: e.target.value })}
//                 type='text'
//                 placeholder='Project Inquiry'
//                 className='hover:border-gray-600 h-10 w-full border text-black pl-3 border-gray-300 rounded-lg bg-black/5'
//               />
//             </div>

//             <div>
//               <label className='text-black/40 text-sm'>Message</label>
//               <textarea
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 placeholder='Tell me about your project...'
//                 className='hover:border-gray-600 h-40 w-full border text-black p-3 border-gray-300 rounded-lg bg-black/5 resize-none'
//               ></textarea>
//             </div>

//             <div>
//               <button
//                 className='h-13 w-full rounded-xl text-white bg-black hover:bg-gray-800 shadow hover:shadow-2xl'
//                 onClick={() => {
//                   toast.success("Message sent");
//                   setForm({ name: "", email: "", subject: "", message: "" });
//                 }}
//               >
//                 <div className='flex items-center justify-center gap-3'>
//                   <FaPaperPlane className="text-sm" />
//                   <h1>Send Message</h1>
//                 </div>
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Contact;
"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter, FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";
import { useState } from 'react';
import Beams from '@/components/dotGrid';
import Footer from '@/components/footer';
import { Menu, X } from "lucide-react";

const Contact = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
      <div className="min-h-screen mb-20 w-screen relative overflow-hidden">

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

        {/* Heading */}
        <div className="flex font-mono flex-col items-center gap-5 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-20">Get in Touch</h1>
          <h2 className="text-white text-base sm:text-lg">Have a project in mind? Let's work together</h2>
          <div className="rounded-full mx-auto h-[1px] bg-white w-[10%] sm:w-[7%] lg:w-[5%] overflow-hidden">
            <div className="rounded-full bg-white h-full w-full transition-all duration-1000 ease-out"></div>
          </div>
        </div>

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row mt-20 px-4 sm:px-10 md:px-20 lg:px-40 pb-30 gap-0 lg:gap-0">

          {/* Left Card */}
          <div className="hover:shadow-white/80 w-full lg:w-[40%] bg-white m-3 sm:m-5 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300">
            <div className="flex flex-col p-6 sm:p-10 gap-5">
              <h1 className="text-xl text-black font-extrabold">Let's Connect</h1>
              <p className="text-black/40">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>

              <div className="flex mt-5">
                <span className="mr-4 bg-gray-200 rounded-xl p-3"><FaEnvelope className="text-black text-lg" /></span>
                <span>
                  <h2 className="text-xs text-black/35">EMAIL</h2>
                  <h2 className="text-black text-sm sm:text-base break-all">meghapanthi435@gmail.com</h2>
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 bg-gray-200 rounded-xl p-3"><FaPhone className="text-black text-lg" /></span>
                <span>
                  <h2 className="text-xs text-black/35">PHONE</h2>
                  <h2 className="text-black">8815991877</h2>
                </span>
              </div>

              <div className="flex">
                <span className="mr-4 bg-gray-200 rounded-xl p-3"><FaMapMarkerAlt className="text-black text-lg" /></span>
                <span>
                  <h2 className="text-xs text-black/35">Location</h2>
                  <h2 className="text-black">India</h2>
                </span>
              </div>

              <hr />

              <div className="flex flex-col">
                <h2 className="text-gray-400">Follow me on</h2>
                <div className="flex gap-4 mt-2">
                  <button onClick={() => window.open("https://linkedin.com/in/megha-panthi-870304299", "_blank")}
                    className="p-3 bg-gray-200 rounded-xl text-black hover:bg-blue-500 hover:text-white transition-all duration-300">
                    <FaLinkedin className="text-lg" />
                  </button>
                  <button onClick={() => window.open("https://github.com/megha-56", "_blank")}
                    className="p-3 bg-gray-200 text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300">
                    <FaGithub className="text-lg" />
                  </button>
                  <button onClick={() => window.open("https://twitter.com/MeghaPanth17153", "_blank")}
                    className="p-3 bg-gray-200 text-black rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300">
                    <FaTwitter className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col hover:shadow-white/80 gap-6 sm:gap-8 w-full lg:w-[60%] bg-white m-3 sm:m-5 p-6 sm:p-10 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300">

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <span className="w-full">
                <label className="text-black/40 text-sm">Your Name</label><br />
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="hover:border-gray-600 h-10 w-full border pl-3 text-black border-gray-400 rounded-lg bg-black/5"
                  type="text"
                  placeholder="Enter Your Full Name"
                />
              </span>
              <span className="w-full">
                <label className="text-black/40 text-sm">Your Email</label><br />
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="hover:border-gray-600 h-10 w-full border text-black pl-3 border-gray-400 rounded-lg bg-black/5"
                  type="text"
                  placeholder="Enter Your E-mail"
                />
              </span>
            </div>

            <div>
              <label className="text-black/40 text-sm">Subject</label>
              <input
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                type="text"
                placeholder="Project Inquiry"
                className="hover:border-gray-600 h-10 w-full border text-black pl-3 border-gray-300 rounded-lg bg-black/5"
              />
            </div>

            <div>
              <label className="text-black/40 text-sm">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="hover:border-gray-600 h-36 sm:h-40 w-full border text-black p-3 border-gray-300 rounded-lg bg-black/5 resize-none"
              ></textarea>
            </div>

            <div>
              <button
                className="h-13 w-full rounded-xl text-white bg-black hover:bg-gray-800 shadow hover:shadow-2xl"
                onClick={() => {
                  toast.success("Message sent");
                  setForm({ name: "", email: "", subject: "", message: "" });
                }}
              >
                <div className="flex items-center justify-center gap-3">
                  <FaPaperPlane className="text-sm" />
                  <h1>Send Message</h1>
                </div>
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;