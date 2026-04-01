"use client";
import { useRouter } from 'next/navigation';
import { usePathname } from "next/navigation";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaTwitter,FaPaperPlane } from "react-icons/fa";
import {toast} from "sonner";

const Contact=()=>{
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
          <div className='flex flex-col items-center gap-5'>
              <h1 className='text-5xl font-bold text-black mt-20'>Get in Touch</h1>
              <h2 className='text-black/30 text-lg'>Have a project in mind? Let's work together</h2>
          
              <div className='rounded-full mx-auto h-[1] bg-black w-[5%] overflow-hidden '>
                   <div className='rounded-full bg-black h-full w-full  transition-all duration-1000 ease-out'></div>
              </div>
          </div>
          <div className='flex mt-20 px-40 pb-30 '>
            <div className='h-130 w-[40%] bg-white m-5 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300'>
                <div className='flex flex-col p-10 gap-5'>
                    <h1 className='text-xl text-black font-extrabold '>Let's Connect</h1>
                    <p className=' text-black/40'>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
                    </p>
                    <div className='flex mt-5'>
                        <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaEnvelope className="text-black  text-lg" /></span>
                        <span>
                            <h2 className='text-xs text-black/35'>EMAIL</h2>
                            <h2 className='text-black'>megha.panthi@email.com</h2>
                        </span>
                    </div>
                    <div className='flex '>
                        <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaPhone className="text-black  text-lg" /></span>
                        <span>
                            <h2 className='text-xs text-black/35'>PHONE</h2>
                            <h2 className='text-black'>+977-9800000000</h2>
                        </span>
                    </div>
                    <div className='flex '>
                        <span className='mr-4 bg-gray-200 rounded-xl p-3'><FaMapMarkerAlt className="text-black  text-lg" /></span>
                        <span>
                            <h2 className='text-xs text-black/35'>Location</h2>
                            <h2 className='text-black'>Nepal</h2>
                        </span>
                    </div>
                    <hr/>
                    <div className='flex flex-col'>
                        <h2 className='text-gray-400'>Follow me on</h2>
                        <div className='flex gap-4'>
    
                             {/* LinkedIn */}
                             <button
                             onClick={() => window.open("https://linkedin.com/in/megha-panthi-870304299", "_blank")}
                              className="p-3 bg-gray-200 rounded-xl text-black hover:bg-blue-500 hover:text-white transition-all duration-300"
                              >
                             <FaLinkedin className="text-lg" />
                             </button>

                             {/* GitHub */}
                             <button
                               onClick={() => window.open("https://github.com/megha-56", "_blank")}
                                   className="p-3 bg-gray-200 text-black rounded-xl hover:bg-black hover:text-white transition-all duration-300"
                              >
                                <FaGithub className="text-lg" />
                             </button>

                              {/* Twitter */}
                             <button
                              onClick={() => window.open("https://twitter.com/MeghaPanth17153", "_blank")}
                              className="p-3 bg-gray-200 text-black rounded-xl hover:bg-sky-500 hover:text-white transition-all duration-300"
                               >
                              <FaTwitter className="text-lg" />
                             </button>

                        </div>
                    </div>                  
                </div>
            </div>


            <div className='flex flex-col gap-8 h-130 w-[60%] bg-white m-5 p-10 border border-gray-250 rounded-2xl transition shadow-xl hover:shadow-2xl hover:border-gray-300 '>
                   <div className='flex gap-3 h-10 w-full '> 
                        <span>
                            <label className='text-black/40 text-sm' htmlFor="name">Your Name</label><br/>
                            <input className='hover:border-gray-600  h-10 w-70 border pl-3 text-gray-300 border-gray-400 rounded-lg  bg-black/5' type='text' placeholder='Enter Your Full Name' id='name'/>
                        </span>
                         <span>
                            <label className='text-black/40 text-sm' htmlFor="mail">Your Email</label><br/>
                            <input className='hover:border-gray-600  h-10 w-70 border text-gray-300  pl-3 border-gray-400 rounded-lg  bg-black/5' type='text' placeholder='Enter Your E-mail' id='mail'/>
                        </span>
                 
                   </div>
                   <div className=''>
                        <label htmlFor="Subject" className='text-black/40 text-sm'>Subject</label>
                        <input  type='text' placeholder='Project Inquiry' id="Subject" className='hover:border-gray-600 h-10 w-full border text-gray-400  pl-3 border-gray-300 rounded-lg bg-black/5'/>
                   </div>
                   <div className=''>
                        <label htmlFor="Msg" className='text-black/40 text-sm'>Message</label>
                        <textarea type='text' placeholder='Tell me about your project...' id='Msg' className='hover:border-gray-600  text-start h-40 w-full border text-gray-400  p-3 border-gray-300 rounded-lg  bg-black/5 resize-none'></textarea>
                   </div>
                   <div>
                    <button className='h-13 w-full rounded-xl text-white bg-black hover:bg-gray-800 shadow hover:shadow-2xl' onClick={()=>{toast.success("Messsage sent")}}>
                        <div className='flex items-center justify-center gap-3'>
                        <FaPaperPlane className="text-sm" />
                         <h1>Send Message</h1>
                        </div></button>
                   </div>
            </div>


           </div>
       </div>
        </>
    
    )
}
export default Contact