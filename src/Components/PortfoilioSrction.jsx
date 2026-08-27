import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: "krishimitra",
    title: "KrishiMitra – Smart Farming Platform",
    description:
      "Full-stack smart agriculture platform helping farmers optimize decision making through weather analytics, irrigation guidance, crop recommendations, and market intelligence.",
    image: "/assids/KrishiMiraed.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Sonu1511-sss",
    link: "https://krishimitra2026.vercel.app/",
  },
  {
    id: 10,
<<<<<<< HEAD:src/Components/PortfoilioSrction.jsx
    title: 'Code-Genius',
    description: 'Developed Code-Genius, an AI-powered platform for intelligent code generation, debugging, and real-time suggestions. Implemented secure authentication, a scalable backend, and a responsive UI, enhancing developer productivity through features like code completion and instant bug detection.s.',
    image: './assids/CodeGenius.png',
    link: 'https://code-genius-seven.vercel.app/',
  },
   {
    id: 1,
    title: 'MedFlow',
    description: 'Developed an AI-powered healthcare platform that enables doctor discovery, appointment booking, and patient management. Integrated features like real-time queue tracking, symptom-based doctor recommendations, chat functionality, and secure payment systems, helping reduce patient waiting time and improve overall accessibility and user experience..',
    image: './assids/Medflow.png',
    link: 'https://med-flow-lac-five.vercel.app/',
=======
    title: "Code-Genius – AI Code Generator",
    description:
      "AI-powered development platform featuring intelligent code generation, real-time code completion, and automated bug detection for enhanced developer productivity.",
    image: "/assids/CodeGenius.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://code-genius-seven.vercel.app/",
    github: "https://github.com/Sonu1511-sss",
  },
  {
    id: 1,
    title: "MedFlow – Healthcare Management",
    description:
      "Smart healthcare platform enabling online doctor discovery, automated appointment booking, real-time queue tracking, and AI symptom recommendations.",
    image: "/assids/Medflow.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://med-flow-lac-five.vercel.app/",
    github: "https://github.com/Sonu1511-sss",
  },
  {
    id: 3,
    title: "Codeza – Digital Agency Showcase",
    description:
      "Modern corporate platform built with smooth UI transitions, animated service showcases, interactive portfolio sections, and seamless client contact workflows.",
    image: "/assids/codeza.png",
    techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://codeze-startup.vercel.app/",
    github: "https://github.com/Sonu1511-sss",
  },
  {
    id: 4,
    title: "SkillSwap – Collaborative Skill Exchange",
    description:
      "Peer-to-peer learning platform connecting individuals to swap skills, manage mentor-learner profiles, and foster collaborative community knowledge sharing.",
    image: "/assids/SkillSwap.png",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    link: "https://skill-swap-startup.vercel.app/",
    github: "https://github.com/Sonu1511-sss",
>>>>>>> 6043b62 (all portfoilo updates):client/src/Components/PortfoilioSrction.jsx
  },
  {
  id: 1,
  title: "Codeza",
  description:
    "Designed and developed a responsive business website for Codeza using React.js, Tailwind CSS, Framer Motion, and Vite. Created an interactive UI with smooth animations, service pages, portfolio showcase, and contact section, delivering a fast and modern user experience.",
  image: "./assids/codeza.png",
  link: "https://codeze-startup.vercel.app/",
},
  {
    id: 1,
    title: 'SkillSwap',
    description: 'Developed SkillSwap, a platform that connects individuals who want to learn new skills with those willing to teach. Users can create profiles, showcase their expertise, explore available skills, and request skill exchanges, promoting collaborative learning and community-driven knowledge sharing...',
    image: './assids/SkillSwap.png',
    link: 'https://skill-swap-startup.vercel.app/',
  },
  
  {
    id: 2,
<<<<<<< HEAD:src/Components/PortfoilioSrction.jsx
    title: 'Hangry Food',
    description: 'Developed Hangry Food, a user-friendly food delivery application that allows users to browse meals and place orders seamlessly. Focused on a fast, responsive interface and smooth ordering experience to ensure convenience and an efficient dining solution...',
    image: './assids/project 7.png',
    link: 'https://hangry-frontend-seven.vercel.app/',
=======
    title: "Hangry Food – Food Delivery App",
    description:
      "Fast and responsive food ordering web application with dynamic meal discovery, intuitive cart management, and seamless checkout experience.",
    image: "/assids/project 7.png",
    techStack: ["React.js", "Node.js", "Express.js", "Tailwind CSS"],
    link: "https://hangry-frontend-seven.vercel.app/",
    github: "https://github.com/Sonu1511-sss",
>>>>>>> 6043b62 (all portfoilo updates):client/src/Components/PortfoilioSrction.jsx
  },
  {
    id: 7,
    title: "Travel Agency – Destination Explorer",
    description:
      "Full-featured travel portal providing personalized holiday itineraries, seamless destination booking workflows, and responsive interactive travel guides.",
    image: "/assids/project 1.png",
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
    link: "https://puruliatravelsfinal.netlify.app/",
    github: "https://github.com/Sonu1511-sss",
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
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(20, 184, 166, 0.2)",
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="bg-[#0b0f19] rounded-xl overflow-hidden shadow-lg border border-gray-700 flex flex-col justify-between"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                {project.techStack && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs bg-gray-800/90 text-teal-400 px-2.5 py-0.5 rounded-full border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons: GitHub & Live Demo */}
            <div className="p-5 pt-0 flex items-center gap-4 mt-auto">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                >
                  <FaExternalLinkAlt size={11} />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub size={13} />
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

<<<<<<< HEAD:src/Components/PortfoilioSrction.jsx
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
    className="relative overflow-hidden group px-8 py-3 text-white font-semibold border border-teal-400 rounded-[40px] transition-all duration-300"
  >
    <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

    <span className="relative z-10">
      {showAll ? "Show Less" : "View More Projects"}
    </span>
  </motion.button>
</motion.div>
=======
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
          className="relative overflow-hidden group px-8 py-3 text-white font-semibold border border-teal-400 rounded-[40px] transition-all duration-300 cursor-pointer"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>

          <span className="relative z-10">
            {showAll ? "Show Less" : "View More Projects"}
          </span>
        </motion.button>
      </motion.div>
>>>>>>> 6043b62 (all portfoilo updates):client/src/Components/PortfoilioSrction.jsx
    </div>
  );
}
