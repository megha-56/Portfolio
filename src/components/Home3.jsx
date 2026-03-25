const Home3=()=>{
    return(
        <>
        <div className="min-h-screen w-screen bg-white flex flex-col items-center gap-15 pt-25">
           
            <div  >
                <h1 className="font-extrabold text-5xl text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">MY WORK</h1>
                <h1 className="font-extrabold text-sm text-black">awesome projects</h1>
            </div>
            
            <div className="flex gap-10 text-black text-xs font-bold">
                <button>ALL</button>
                <button>GRAPHIC</button>
                <button>VIDEOS</button>
                <button>WEBDESIGN</button>
                <button>BRANDING</button>
            </div>
            {/* <div className="grid h-225 w-full gap-6 bg-pink-500 mx-30 max-w-5xl grid-cols-3">
                 

            </div> */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-5xl mx-auto p-4">
  
  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img1.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img2.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden  shadow-xl">
    <img src="/img3.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img4.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img5.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img6.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img7.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img8.jpg" className="w-full h-full object-cover" />
  </div>

  <div className="bg-gray-200 h-70 overflow-hidden shadow-xl">
    <img src="/img9.jpg" className="w-full h-full object-cover" />
  </div>

</div>



            <div>
                <button className="text-white text-xs font-bold bg-black/90 border rounded-full px-6 py-2 mb-10">LOAD MORE</button>
            </div>

        </div>

        </>
    )
}
export default Home3 