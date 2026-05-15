import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white px-6 py-14">
      
      {/* Background circles */}
      <div className="absolute left-0 top-0 h-32 w-32 rounded-full bg-pink-100"></div>

      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-purple-100"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 border-t border-pink-100 pt-10 md:flex-row">
        
        {/* Logo / Name */}
        <div className="text-center md:text-left">
          <h2 className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 bg-clip-text text-2xl font-extrabold text-transparent">
            Veronica Brun-pedersen
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Frontend Developer & UI Enthusiast
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          
          <a
            href="https://github.com/Veronicabrun"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg transition duration-300 hover:scale-110"
          >
            <FaGithub size={20} />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-purple-500 text-purple-700 transition duration-300 hover:bg-purple-600 hover:text-white"
          >
            <FaLinkedinIn size={18} />
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative z-10 mt-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Veronica Brun-pedersen. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;