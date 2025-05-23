// Hero.jsx
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ModelCanvas from "./HeroModel";

export default function Hero() {
  const roleRef = useRef();
  const [index, setIndex] = useState(0);

  const roles = [
    "React Developer",
    "Full Stack Developer",
    "Backend Developer",
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
      {/* Background 3D animation */}
      <div className="absolute inset-0 -z-10">
        <ModelCanvas />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row h-full">
        {/* Left content */}
        <div className="md:w-1/2 w-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-16 lg:px-24 flex-grow">
   {" "}
          <h1 className="text-3xl md:text-4xl font-bold leading-snug tracking-tight">
            Hi, I'm <span className="text-teal-400">Shubham</span>
            <br />
            A Passionate Web Developer
            <br />
            Building Fast & Responsive Apps
          </h1>
          <div
            className="mt-6 text-teal-300 text-2xl font-semibold h-10 overflow-hidden"
            aria-live="polite"
          >
            <p ref={roleRef} style={{ position: "relative" }}>
              {roles[index]}
            </p>
          </div>
          <p className="mt-6 max-w-xl text-teal-100 text-lg leading-relaxed">
            Hi, I'm Shubham. I build fast, responsive web apps using React,
            Node.js, and modern web technologies.
          </p>
          <a
            href="#"
            className="relative mt-8 inline-block w-44 px-6 py-3 border-2 rounded-lg text-white font-semibold 
             overflow-hidden group focus:outline-none focus:ring-4 focus:ring-teal-400 focus:ring-opacity-50 shadow-lg"
            aria-label="See my work"
          >
            <span
              className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-600 
               transform -translate-x-full group-hover:translate-x-0 
               transition-transform duration-500 ease-out z-0"
            ></span>
            <span className="relative z-10">SEE MY WORK ↓</span>
          </a>
        </div>

        {/* Right side model - optional since it's already in background */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <div className="w-full h-full max-w-lg">
            {/* Optional: Duplicate if you want a separate cube */}
            <ModelCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
