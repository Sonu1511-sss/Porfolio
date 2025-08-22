import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/work", label: "Work" },
    { href: "/experience", label: "Experience" },
    { href: "/Testimonal", label: "Testimonials" },
    { href: "/skills", label: "Skills" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0b0f19] z-50 text-white px-6 md:px-16 py-4 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Brand */}
        <h1 className="text-2xl font-bold text-teal-400">
        <a href="/">Shubham<span className="text-white">'s</span></a>  
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-lg font-light">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setIsOpen(false)}
                className="relative group transition text-white"
              >
                {label}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Me Button */}
        <a
          href="/Contact"
          className="relative mt-2 px-4 py-2 text-white font-semibold rounded-full w-fit
            overflow-hidden group border border-white hidden md:inline-block"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 
              transform -translate-x-full group-hover:translate-x-0 
              transition-transform duration-500 ease-out z-0"
          ></span>
          <span className="relative z-10">Contact Me</span>
        </a>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col items-center text-center gap-4 text-lg font-light">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={toggleMenu}
              className="relative group transition text-white"
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-teal-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Contact Me Button (Mobile) */}
          <a
            href="#contact"
            onClick={toggleMenu}
            className="relative mt-2 px-4 py-2 text-white font-semibold rounded-md w-fit
              overflow-hidden group border border-white"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 
                transform -translate-x-full group-hover:translate-x-0 
                transition-transform duration-500 ease-out z-0"
            ></span>
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>
      )}
    </nav>
  );
}
