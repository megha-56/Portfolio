import Image from "next/image";
const Home2=()=>{
    return(
        <>
        <div className="flex h-screen w-screen bg-[#dbdbd5]">
            <div className=" h-screen w-[50%]">
                <div className="mt-35 ml-30 relative h-100 w-100 bg-black">
                    <div className="absolute h-100 w-100 mt-15 ml-15 bg-cover bg-center" style={{backgroundImage:"url('port1.jpeg')"}}>
                    </div>
                </div>
            </div>

            <div className=" font-bold px-50 py-50 flex flex-col gap-8  text-black">
                
                <div  className="flex justify-between ">
                    <div>
                        <div className="ml-20"><h2>who am I</h2></div>
                         <div> <h1 className="text-5xl font-extrabold text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">
                                HELLO</h1>
                          </div> 
                     </div>  
                     <div className="flex flex-col gap-5 mr-10">
                        <div className="w-40 h-2 bg-[repeating-linear-gradient(45deg,black_0_2px,transparent_2px_6px)]"></div>
                        <div className="w-40 h-2 bg-[repeating-linear-gradient(45deg,black_0_2px,transparent_2px_6px)]"></div>
                        <div className="w-40 h-2 bg-[repeating-linear-gradient(45deg,black_0_2px,transparent_2px_6px)]"></div>
                     </div>         
                </div>
                <div ><p>I'm a passionate Full Stack Developer specializing in the MERN stack. I love building scalable web applications with clean code and intuitive user experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through elegant and efficient solutions.</p></div>
                
                <div><p>When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts. I believe in continuous learning and love tackling challenging problems.</p></div>
            </div>


        </div>
        </>

    )
}
export default Home2