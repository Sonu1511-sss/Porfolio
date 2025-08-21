import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si'; // Import LeetCode icon

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold mb-4 text-teal-400 md:mb-0">
          Shubham <span className="text-white">'s</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Sonu1511-sss"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-uprade-092542278/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/0kdoIRE2yt/e"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Shubham's. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
