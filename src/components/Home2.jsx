// import Image from "next/image";

// const Home2=()=>{
//     return(
//         <>
//         <div className="flex h-screen w-screen bg-[#dbdbd5]">
//             <div className=" h-screen w-[50%]">
//                 <div className="mt-35 ml-30 relative h-100 w-100 bg-black/90 hover:shadow-2xl">
//                     <div className="absolute h-100 w-100 mt-15 ml-15 bg-cover bg-center hover:shadow-2xl" style={{backgroundImage:"url('port2.jpeg')"}}>
//                     </div>
//                 </div>
//                 <div className="h-40 w-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
//             </div>

//             <div className=" font-bold px-50 py-50 flex flex-col gap-8  text-black">
                
//                 <div  className="flex justify-between ">
//                     <div>
//                         <div className="ml-20 font-sans"><h2>who am I</h2></div>
//                          <div> <h1 className="text-5xl font-extrabold text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">
//                                 HELLO</h1>
//                           </div> 
//                      </div>             
//                      <div className="h-20 w-[50%] bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
                    
//                 </div>
//                 <div ><p className="font-mono">I'm a passionate Full Stack Developer specializing in the MERN stack. I love building scalable web applications with clean code and intuitive user experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through elegant and efficient solutions.</p></div>
                
//                 <div><p className="font-mono">When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts. I believe in continuous learning and love tackling challenging problems.</p></div>
//             </div>


//         </div>
//         </>

//     )
// }
// export default Home2
import Image from "next/image";

const Home2 = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row h-auto lg:h-screen w-screen bg-[#dbdbd5]">

            {/* LEFT PANEL */}
            <div className="h-auto lg:h-screen w-full lg:w-[50%] flex flex-col items-center lg:items-start">
                <div className="mt-10 lg:mt-35 ml-0 lg:ml-30 relative h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-100 lg:w-100 bg-black/90 hover:shadow-2xl">
                    <div className="absolute h-72 w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 lg:h-100 lg:w-100 mt-8 ml-8 lg:mt-15 lg:ml-15 bg-cover bg-center hover:shadow-2xl" style={{ backgroundImage: "url('port2.jpeg')" }}>
                    </div>
                </div>
                <div className="h-20 lg:h-40 w-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
            </div>

            {/* RIGHT PANEL */}
            <div className="font-bold px-6 sm:px-10 md:px-16 lg:px-50 py-10 lg:py-50 flex flex-col gap-6 lg:gap-8 text-black w-full lg:w-[50%]">

                <div className="flex justify-between items-start">
                    <div>
                        <div className="ml-0 sm:ml-5 lg:ml-20 font-sans"><h2>who am I</h2></div>
                        <div>
                            <h1 className="text-4xl sm:text-5xl font-extrabold text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">
                                HELLO
                            </h1>
                        </div>
                    </div>
                    <div className="hidden sm:block h-20 w-[50%] bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
                </div>

                <div>
                    <p className="font-mono text-sm sm:text-base">I'm a passionate Full Stack Developer specializing in the MERN stack. I love building scalable web applications with clean code and intuitive user experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through elegant and efficient solutions.</p>
                </div>

                <div>
                    <p className="font-mono text-sm sm:text-base">When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts. I believe in continuous learning and love tackling challenging problems.</p>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home2