import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold mb-4 text-teal-400 md:mb-0">Shubham  <span className='text-white'>'s</span></div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} shubham's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
