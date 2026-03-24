import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
   {
    id: 10,
    title: 'Code-Genius',
    description: 'Developed Code-Genius, an AI-powered platform for intelligent code generation, debugging, and real-time suggestions. Implemented secure authentication, a scalable backend, and a responsive UI, enhancing developer productivity through features like code completion and instant bug detection.s.',
    image: './assids/Code-Genius.png',
    link: 'https://github.com/Sonu1511-sss/Code-Genisis-fullstack',
  },
  {
    id: 1,
    title: 'SkillSwap',
    description: 'Developed SkillSwap, a platform that connects individuals who want to learn new skills with those willing to teach. Users can create profiles, showcase their expertise, explore available skills, and request skill exchanges, promoting collaborative learning and community-driven knowledge sharing...',
    image: './assids/skillswap.png',
    link: 'https://github.com/Sonu1511-sss/SkillSwapStartup',
  },
   {
    id: 1,
    title: 'MedFlow',
    description: 'Developed an AI-powered healthcare platform that enables doctor discovery, appointment booking, and patient management. Integrated features like real-time queue tracking, symptom-based doctor recommendations, chat functionality, and secure payment systems, helping reduce patient waiting time and improve overall accessibility and user experience..',
    image: './assids/MedFlow.png',
    link: 'https://github.com/harshitsingh4321/Appointy.git',
  },
  {
    id: 2,
    title: 'Hangry Food',
    description: 'Developed Hangry Food, a user-friendly food delivery application that allows users to browse meals and place orders seamlessly. Focused on a fast, responsive interface and smooth ordering experience to ensure convenience and an efficient dining solution...',
    image: './assids/project 7.png',
    link: 'https://hangry-frontend-seven.vercel.app/',
  },
    {
    id: 1,
    title: 'PUMA Shoes E-commerce',
    description: 'Developed a sleek e-commerce web application for PUMA footwear featuring product listings, detailed product pages, cart functionality, and a streamlined checkout process, delivering a smooth and user-friendly shopping experience.s...',
    image: './assids/puma-.png',
    link: 'https://mern-puma-f.vercel.app/',
  },
  {
    id: 7,
    title: 'Travel Agency',
    description: 'Explore the world with us through carefully curated travel experiences designed around your dreams. We provide personalized itineraries, seamless bookings, and memorable adventures across top destinations. Our goal is to make every journey comfortable, exciting, and truly unforgettable...',
    image: './assids/project 1.png',
    link: 'https://puruliatravelsfinal.netlify.app/',
  },
  
 
];

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white py-16 px-6">
      <motion.h2
        className="text-3xl font-bold text-center pt-[4rem] mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        💼 My Portfolio Highlights
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayedProjects.map((project, index) => (
          <motion.a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(255, 255, 255, 0.15)",
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="bg-[##0b0f19] rounded-xl overflow-hidden shadow-lg border border-gray-700 cursor-pointer block"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-400">{project.description}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => setShowAll(!showAll)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-2 text-white border border-gray-600 rounded hover:bg-white hover:text-black transition duration-300"
        >
          {showAll ? "Show Less" : "View More Projects"}
        </motion.button>
      </motion.div>
    </div>
  );
}
