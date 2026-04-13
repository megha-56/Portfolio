import Image from "next/image";

const Home2 = () => {
    return (
        <>
        <div className="flex flex-col lg:flex-row min-h-screen w-screen bg-[#dbdbd5]">

            {/* Left section */}
            <div className="h-auto lg:h-screen w-full lg:w-[50%]">
                <div className="mt-10 lg:mt-35 mx-auto lg:ml-30 relative h-64 w-64 sm:h-80 sm:w-80 lg:h-100 lg:w-100 bg-black/90 hover:shadow-2xl">
                    <div className="absolute h-64 w-64 sm:h-80 sm:w-80 lg:h-100 lg:w-100 mt-6 ml-6 lg:mt-15 lg:ml-15 bg-cover bg-center hover:shadow-2xl" style={{backgroundImage:"url('port2.jpeg')"}}>
                    </div>
                </div>
                <div className="h-40 w-full bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
            </div>

            {/* Right section */}
            <div className="font-bold px-6 sm:px-12 lg:px-50 py-10 lg:py-50 flex flex-col gap-8 text-black">

                <div className="flex justify-between">
                    <div>
                        <div className="ml-0 lg:ml-20 font-sans"><h2>who am I</h2></div>
                        <div>
                            <h1 className="text-5xl font-extrabold text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">
                                HELLO
                            </h1>
                        </div>
                    </div>
                    <div className="hidden lg:block h-20 w-[50%] bg-[radial-gradient(circle,_#9ca3af_1px,_transparent_1.5px)] bg-[size:10px_10px]"></div>
                </div>

                <div><p className="font-mono">I'm a passionate Full Stack Developer specializing in the MERN stack. I love building scalable web applications with clean code and intuitive user experiences. With a strong foundation in both frontend and backend technologies, I bring ideas to life through elegant and efficient solutions.</p></div>

                <div><p className="font-mono">When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge through technical blog posts. I believe in continuous learning and love tackling challenging problems.</p></div>
            </div>

        </div>
        </>
    )
}
export default Home2