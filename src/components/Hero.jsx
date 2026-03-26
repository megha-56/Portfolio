"use client";
import { useRouter } from 'next/navigation'
const Hero=()=>{
    const router = useRouter()

    return(
        <>
        <div className="relative flex w-screen h-screen bg-gray-400">
              <div className=" w-[35%] bg-no-repeat bg-cover opacity-110" style={{backgroundImage:"url('pbg.jpeg')"}}>
                <div className="h-15 bg-black/10">
                    <h1 className="text-center pt-5 text-white font-extrabold text-3xl ">PORTFOLIO.</h1>
                </div>
                  
              </div>
              <div className="h-screen w-[65%] bg-cover bg-center  bg-no-repeat " style={{backgroundImage:"url('port.jpeg')"}}>
                  <div className="flex gap-10 text-sm font-bold justify-center h-15 bg-[#525251]">
                     <button >HOME</button>
                     <button onClick={()=>{router.push('/about')}}>ABOUT</button>
                     <button onClick={()=>(router.push('/'))}>SKILLS</button>
                     <button>EXPERIENCE</button>
                     <button>PROJECTS</button>
                     <button>CONTACT</button>
                     <button>RESUME</button>
                  </div>
              </div>
              <div className="ml-60 mt-50 absolute inset-0 flex flex-col  justify-center pointer-events-none">
                <h2 className="text-white text-5xl font-extrabold">MY NAME IS</h2>               
                <h1 className="text-white  text-7xl font-extrabold ">
                MEGHA PANTHI
                </h1>
                <h1 className="font-extrabold text-xl text-center py-3 text-black border h-15 w-90 bg-[#ffff00]">I'M A FULL STACK DEVELOPER</h1>
              </div>

       </div>
        </>
    )

}
export default Hero