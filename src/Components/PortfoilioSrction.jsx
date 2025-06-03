import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Travel Agency",
    image: "./assids/project 1.png",
    description: "Explore the world with us! We offer unforgettable journeys tailored to your dreams.",
    link: 'https://puruliatravelsfinal.netlify.app/',
  },
  {
    title: "Infinity Jobs",
    image: "./assids/Infinity-Jobs-2.png",
    description: "A MERN stack job portal for posting and applying to jobs with user login and responsive design.",
    link: 'https://job-portel-f-twv1.vercel.app/',
  },
  {
    title: "Lets Falafal",
    image: "./assids/project 3.png",
    description: "Fresh, authentic falafel made daily. Taste the difference!",
    link: 'https://lets-falafel.netlify.app/',
  },
  {
    title: "Traveler website",
    description: "Explore hotels, tours, and palaces for unforgettable journeys!",
    image: "./assids/project 4.png",
    link: 'https://66acc8920e15ab2e97459d74--comforting-cascaron-3f1f3e.netlify.app/',
  },
  {
    title: "E-Cart Ecommerce",
    description: "Your go-to online store for quality products at unbeatable prices!",
    image: "./assids/project 5.png",
    link: 'https://e-cart-project-umber.vercel.app/',
  },
  {
    title: "Dribble clone",
    description: "Explore, showcase, and connect with design inspiration in our Dribbble clone.",
    image: "./assids/project 6.png",
    link: 'https://sonu1511-sss.github.io/landing-page/',
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
