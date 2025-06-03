import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ModelCanvas from "./HeroModel";
import { LuDownload } from "react-icons/lu";

export default function Hero() {
  const roleRef = useRef();
  const [index, setIndex] = useState(0);

  const roles = [
    "Always Learning",
    "Creative Problem Solver",
    "MERN Stack Developer",
    "Freelance Developer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(roleRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % roles.length);
          gsap.fromTo(
            roleRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, ease: "power1.out" }
          );
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <ModelCanvas />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full">
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24 flex-grow">
          {/* New heading */}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-tight">
            Hi, I'm <span className="text-teal-400">Shubham</span>
          </h1>

          {/* Bullet point highlights */}
          <div className="mt-4 text-sm md:text-[1.1rem] text-teal-200 leading-relaxed space-y-1">
            <p>🚀 MERN Stack Developer | ⚛️ React.js Expert</p>
            <p>📚 Learning JavaScript DSA to boost problem-solving</p>
            <p>🏆 Hackathon Enthusiast — thrive under pressure & teamwork</p>
            <p>💼 Ex-Intern @Connect Shiksha — real-world dev skills</p>
          </div>

          {/* Animated roles text - bigger and single line responsive */}
          <div
            className="mt-8 text-teal-300 font-bold h-12 overflow-hidden whitespace-nowrap text-lg sm:text-2xl md:text-2xl lg:text-3xl"
            aria-live="polite"
          >
            <p
              ref={roleRef}
              style={{
                position: "relative",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {roles[index]}
            </p>
          </div>

          {/* Download CV Button */}
          <a
            href="https://drive.google.com/file/d/1Wdu5k5jMtcd0e8V552-p1tG4lkYOLBIH/view?usp=drivesdk" // <-- Change this to your actual CV file path or URL
            download
            className="relative mt-8 inline-block w-44 px-6 py-3 border-2 rounded-lg text-white font-semibold 
             overflow-hidden group focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 shadow-lg
             transition-transform transform hover:scale-105"
            aria-label="Download CV"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 
               transform -translate-x-full group-hover:translate-x-0 
               transition-transform duration-500 ease-out z-0"
            ></span>
            <span className="relative text-[1rem] z-10 flex items-center gap-2 justify-center">
              <LuDownload size={10} /> Download CV
            </span>
          </a>
        </div>

        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <div className="w-full h-full max-w-lg">
            <ModelCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
