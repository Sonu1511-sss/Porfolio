import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
   {
    id: 10,
    title: 'Code-Genius',
    description: 'Code-Genisis is a MERN application powered by Google’s Gemini AI that helps developers explain, analyze, convert, review, and optimize code, while also generating comments, quizzes, and CS concept explanations for smarter development...',
    image: './assids/Code-Genius.png',
    link: 'https://code-gen-eight.vercel.app/',
  },
  {
    id: 1,
    title: 'SkillSwap',
    description: 'SkillSwap: A platform that connects people looking to learn new skills with those willing to teach. Users can create profiles, showcase their skills, browse others’ skills, and request skill exchanges, fostering community learning and collaboration...',
    image: './assids/skillswap.png',
    link: '#',
  },
   {
    id: 1,
    title: 'eDocConnect-AI',
    description: 'An AI-powered healthcare platform for patients, doctors, and admins. Features role-based dashboards, secure login, smart appointment booking, AI symptom triage, and medication tracking. Built with React, Node.js, Express, and MongoDB...',
    image: './assids/edoctConnect.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Hangry Food',
    description: 'FoodExpress: A sleek food delivery app that lets users browse delicious meals and place orders quickly and effortlessly, ensuring fast, convenient, and satisfying dining experiences..',
    image: './assids/project 7.png',
    link: 'https://hangry-frontend-seven.vercel.app/',
  },
    {
    id: 1,
    title: 'PUMA Shoes E-commerce',
    description: 'A sleek online store for PUMA footwear with product pages, cart, and checkout features...',
    image: './assids/puma-.png',
    link: 'https://mern-puma-f.vercel.app/',
  },
  {
    id: 3,
    title: 'Social Media Web App',
    description: 'A full-featured MERN-based platform to share posts, connect, chat, and grow your network',
    image: './assids/Socail-media.png',
    link: 'https://socail-media-frontend-hv6r.vercel.app/auth/login',
  },
  {
    id: 4,
    title: 'Real-Time Chat App',
    description: 'Modern chat app with real-time messaging, user auth, and Socket.io integration.',
    image: './assids/Realtime-Chat-App.png',
    link: 'real-time-chat122.netlify.app',
  },
  {
    id: 5,
    title: 'iPhone Landing Page',
    description: 'A sleek replica of the official iPhone product page with smooth animations and responsive design..',
    image: './assids/apple.png',
    link: 'https://iphoneweb-psi.vercel.app/',
  },
  {
    id: 6,
    title: 'E-Cart Ecommerce',
    description: 'Modern e-commerce site for browsing, cart management, and secure checkout..',
    image: './assids/project 5.png',
    link: 'https://e-cart-project-umber.vercel.app/',
  },
  {
    id: 7,
    title: 'Travel Agency',
    description: 'Explore the world with us! We offer unforgettable journeys tailored to your dreams..',
    image: './assids/project 1.png',
    link: 'https://puruliatravelsfinal.netlify.app/',
  },
  {
    id: 8,
    title: 'Traveler website',
    description: 'Explore hotels, tours, and palaces for unforgettable journeys!',
    image: './assids/project 4.png',
    link: 'https://66acc8920e15ab2e97459d74--comforting-cascaron-3f1f3e.netlify.app/',
  },
  {
    id: 9,
    title: 'Infinity Jobs',
    description: 'A MERN stack job portal for posting and applying to jobs with user login and responsive design.',
    image: './assids/Infinity-Jobs-2.png',
    link: 'https://job-portel-f-twv1.vercel.app/',
  },
];

export default function PortfolioSection() {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-black text-white py-16 px-6">
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
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg border border-gray-700 cursor-pointer block"
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
