import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative pb-1 transition duration-300 hover:text-pink-500 ${
      isActive
        ? "text-black after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-pink-400"
        : "text-black"
    }`;

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white/90 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        
        {/* Logo */}
        <NavLink to="/" className="relative inline-block">
          <span className="absolute -left-3 top-1/2 -z-10 h-12 w-12 -translate-y-1/2 rounded-full bg-pink-300 sm:h-14 sm:w-14"></span>

          <span className="bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 bg-clip-text text-lg font-extrabold text-transparent sm:text-2xl">
            Veronica Brun-pedersen
          </span>
        </NavLink>

        {/* Desktop menu */}
        <ul className="hidden items-center gap-8 text-base font-semibold md:flex">
          <li>
            <NavLink to="/" className={linkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={linkStyle}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className="rounded-full bg-gradient-to-r from-pink-400 to-purple-500 px-5 py-2 text-white shadow-md transition duration-300 hover:scale-105 hover:from-purple-500 hover:to-pink-400"
            >
              Let&apos;s Talk
            </NavLink>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-7 rounded-full bg-black"></span>
          <span className="h-0.5 w-5 rounded-full bg-black"></span>
          <span className="h-0.5 w-7 rounded-full bg-black"></span>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-64 border-t border-gray-100"
            : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-6 px-6 py-6 text-lg font-semibold text-black">
          <li>
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block rounded-full bg-gradient-to-r from-pink-400 to-purple-500 px-5 py-2 text-white"
            >
              Let&apos;s Talk
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;