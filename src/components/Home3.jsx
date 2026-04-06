// "use client";
// import { useState } from "react";
// const Home3=()=>{

// const [visibleCount, setVisibleCount] = useState(6);

// const projects = [
//   { img: "/img1.jpg", link: "https://weather-app-chi-brown-46.vercel.app" },
//   { img: "/img2.jpg", link: "https://frozen-scoops-icecream.vercel.app" },
//   { img: "/img3.jpg", link: "https://cat-api-lac.vercel.app" },
//   { img: "/img4.jpg", link: "https://01-hero-ui.vercel.app" },
//   { img: "/img5.jpg", link: "https://react-router-five-azure.vercel.app" },
//   { img: "/img6.jpg", link: "https://portfolio-six-red-59.vercel.app" },
//   { img: "/img7.jpg", link: "https://bg-changer-beta-ten.vercel.app" },
//   { img: "/img8.jpg", link: "https://password-generator-six-umber-10.vercel.app" },
//   { img: "/img9.jpg", link: "https://02-health-ui.vercel.app" },
// ];

//     return(
//         <>
//         <div className="min-h-screen w-screen bg-white flex flex-col items-center gap-15 pt-25">
           
//             <div  >
//                 <h1 className="font-extrabold text-5xl text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">MY WORK</h1>
//                 <h1 className="font-extrabold text-sm text-black">awesome projects</h1>
//             </div>
            
//             <div className="flex gap-10  text-black text-xs font-bold">
//                 <button>ALL</button>
//                 <button>GRAPHIC</button>
//                 <button>VIDEOS</button>
//                 <button>WEBDESIGN</button>
//                 <button>BRANDING</button>
//             </div>
//             {/* <div className="grid h-225 w-full gap-6 bg-pink-500 mx-30 max-w-5xl grid-cols-3">
                 

//             </div> */}
//             {/* <div className="grid grid-cols-3 gap-3 w-full max-w-5xl mx-auto p-4">
  
//                 <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://weather-app-chi-brown-46.vercel.app", "_blank")}>
//                      <img src="/img1.jpg" className="w-full h-full object-cover" />
//                 </div>
//                 <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://frozen-scoops-icecream.vercel.app", "_blank")}>
//                      <img src="/img2.jpg" className="w-full h-full object-cover" />
//                 </div>

//                 <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://cat-api-lac.vercel.app", "_blank")}>
//                     <img src="/img3.jpg" className="w-full h-full object-cover" />
//                 </div>
  
//                 <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://01-hero-ui.vercel.app", "_blank")}>
//                      <img src="/img4.jpg" className="w-full h-full object-cover" />
//                 </div>

//                 <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://react-router-five-azure.vercel.app", "_blank")}>
//                      <img src="/img5.jpg" className="w-full h-full object-cover" />
//                 </div>

//                <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                    onClick={() => window.open("https://portfolio-six-red-59.vercel.app", "_blank")}>
//                    <img src="/img6.jpg" className="w-full h-full object-cover" />
//                 </div>

//                <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                     onClick={() => window.open("https://bg-changer-beta-ten.vercel.app", "_blank")}>
//                     <img src="/img7.jpg" className="w-full h-full object-cover" />
//                 </div>

//                <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                     onClick={() => window.open("https://password-generator-six-umber-10.vercel.app", "_blank")}>
//                     <img src="/img8.jpg" className="w-full h-full object-cover" />
//                </div>

//                <div className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                      onClick={() => window.open("https://02-health-ui.vercel.app", "_blank")}>
//                      <img src="/img9.jpg" className="w-full h-full object-cover" />
//                </div>



//           </div> */}
//         <div className="grid grid-cols-3 gap-3 w-full max-w-5xl mx-auto p-4">
//              {projects.slice(0, visibleCount).map((proj, index) => (
//              <div
//                key={index}
//                className="bg-gray-200 h-70 overflow-hidden shadow-xl cursor-pointer"
//                onClick={() => window.open(proj.link, "_blank")}
//              >
//             <img src={proj.img} className="w-full h-full object-cover" />
//           </div>
//          ))}
//         </div>



//             <div>
//                 {visibleCount < projects.length && (
//                <button
//                onClick={() => setVisibleCount((prev) => prev + 3)}
//                className="text-white text-xs font-bold bg-black/90 border rounded-full px-6 py-2 mb-30 mt-5 cursor-pointer"
//                >
//                LOAD MORE
//               </button>
//                )}
//            </div>

//         </div>

//         </>
//     )
// }
// export default Home3 
"use client";
import { useState } from "react";

const Home3 = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const projects = [
    { img: "/img1.jpg", link: "https://weather-app-chi-brown-46.vercel.app" },
    { img: "/img2.jpg", link: "https://frozen-scoops-icecream.vercel.app" },
    { img: "/img3.jpg", link: "https://cat-api-lac.vercel.app" },
    { img: "/img4.jpg", link: "https://01-hero-ui.vercel.app" },
    { img: "/img5.jpg", link: "https://react-router-five-azure.vercel.app" },
    { img: "/img6.jpg", link: "https://portfolio-six-red-59.vercel.app" },
    { img: "/img7.jpg", link: "https://bg-changer-beta-ten.vercel.app" },
    { img: "/img8.jpg", link: "https://password-generator-six-umber-10.vercel.app" },
    { img: "/img9.jpg", link: "https://02-health-ui.vercel.app" },
  ];

  return (
    <>
      <div className="min-h-screen w-screen bg-white flex flex-col items-center gap-15 pt-25">

        {/* Title */}
        <div>
          <h1 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-black bg-gradient-to-r from-[#ffff00] to-[#ffff00] bg-[length:100%_40%] bg-no-repeat bg-bottom">
            MY WORK
          </h1>
          <h1 className="font-extrabold text-sm text-black">awesome projects</h1>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-5 sm:gap-8 lg:gap-10 text-black text-xs font-bold justify-center px-4">
          <button>ALL</button>
          <button>GRAPHIC</button>
          <button>VIDEOS</button>
          <button>WEBDESIGN</button>
          <button>BRANDING</button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-5xl mx-auto px-4">
          {projects.slice(0, visibleCount).map((proj, index) => (
            <div
              key={index}
              className="bg-gray-200 h-52 sm:h-60 lg:h-70 overflow-hidden shadow-xl cursor-pointer"
              onClick={() => window.open(proj.link, "_blank")}
            >
              <img src={proj.img} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div>
          {visibleCount < projects.length && (
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="text-white text-xs font-bold bg-black/90 border rounded-full px-6 py-2 mb-30 mt-5 cursor-pointer"
            >
              LOAD MORE
            </button>
          )}
        </div>

      </div>
    </>
  );
};

export default Home3;