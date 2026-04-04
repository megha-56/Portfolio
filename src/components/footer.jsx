"use client";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const links = [
    { name: "Home", path: "/home" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="w-full bg-black text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Logo / Name */}
          <div className="text-2xl font-bold tracking-wide">
            Megha.dev
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            {links.map((link, i) => (
              <button
                key={i}
                onClick={() => router.push(link.path)}
                className="text-gray-400 hover:text-white transition duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-3">
          <p>© {new Date().getFullYear()} Megha Panthi. All rights reserved.</p>

          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition">LinkedIn</span>
            <span className="hover:text-white cursor-pointer transition">GitHub</span>
            <span className="hover:text-white cursor-pointer transition">Email</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

