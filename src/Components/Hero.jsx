import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../public/assids/shubham.jpeg";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-[#0b0f19] text-white px-6 py-28">
      {/* Profile Image */}
      <img
        src={profileImg}
        alt="Shubham Uprade"
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-1 border-teal-400 shadow-2xl mb-8 object-cover"
      />

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
        I'm{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
          SHUBHAM UPRADE
        </span>
      </h1>

      {/* Role */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 mb-6">
        Full Stack Developer based in{" "}
        <span className="text-teal-400">India</span>
      </h2>

    {/* About */}
<p
  className="
    max-w-xs
    sm:max-w-xl
    md:max-w-2xl
    lg:max-w-3xl
    xl:max-w-4xl
    text-gray-400
    text-sm
    sm:text-base
    md:text-lg
    lg:text-xl
    leading-7
    sm:leading-8
    md:leading-9
    px-2
    sm:px-6
    mb-10
  "
>
  Full Stack Developer (MERN) with experience in React.js, Node.js,
  Express.js, MongoDB, and Tailwind CSS. Currently working as a{" "}
  <span className="text-white font-semibold">
    Frontend Developer Intern at CloudWent Solutions
  </span>
  . Strong in Java and DSA (300+ problems solved), passionate about clean
  code, AI, and building user-friendly web applications.
</p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-5">
        {/* Contact */}
        <Link
          to="/contact"
          className="px-8 py-3 rounded-full border border-white font-semibold relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">Contact Me</span>
        </Link>

        {/* Resume */}
        <a
          href="https://drive.google.com/file/d/1QMSAsnLLvoOsp0gB1cx7qpWKA9Nj1HL7/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 rounded-full border border-white font-semibold relative overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="relative z-10">My Resume</span>
        </a>
      </div>
    </section>
  );
}