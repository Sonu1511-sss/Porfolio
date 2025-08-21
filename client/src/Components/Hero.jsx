import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[auto] min-h-[50rem] bg-black text-white px-4 py-12 md:py-20">
      {/* Round Profile Image */}
      <img
        src="..\assids\Shubham.jpeg"
        alt="Shubham"
        className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full border-2 border-gray-100 shadow-lg mb-6"
      />

      {/* Name with gradient */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 px-2">
        I'm{" "}
        <span className="bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          SHUBHAM UPRADE
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 px-2">
        Full Stack Developer based in{" "}
        <span className="text-teal-400">India</span>.
      </p>

      {/* Short bio */}
      <p className="text-gray-300 max-w-xl sm:max-w-2xl md:max-w-3xl mb-8 px-2 text-sm sm:text-base md:text-lg">
        Full Stack Developer skilled in the MERN stack, React.js, Node.js, and Tailwind CSS. Strong in Java and DSA, with a flair for UI/UX design. Hackathon participant and AI enthusiast, building modern, user-friendly web apps.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Contact Me Button */}
        <a
          href="/Contact"
          className="relative px-8 py-3 text-white font-semibold rounded-full w-fit
            overflow-hidden group border border-white inline-block text-sm sm:text-base md:text-lg"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 
              transform -translate-x-full group-hover:translate-x-0 
              transition-transform duration-500 ease-out z-0"
          ></span>
          <span className="relative z-10">Contact Me</span>
        </a>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1IYNmrUGo6Q_oT9jK9SB8EM_0jar71flb/view?usp=drivesdk"
          className="relative px-8 py-3 text-white font-semibold rounded-full w-fit
            overflow-hidden group border border-white inline-block text-sm sm:text-base md:text-lg"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 
              transform -translate-x-full group-hover:translate-x-0 
              transition-transform duration-500 ease-out z-0"
          ></span>
          <span className="relative z-10">My Resume</span>
        </a>
      </div>
    </section>
  );
}
