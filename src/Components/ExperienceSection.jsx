import { motion } from "framer-motion";

import cloudwentLogo from "../../public/assids/cloudwent.png";
import leetcodeLogo from "../../public/assids/leetcode.png";
import nextvantaLogo from "../../public/assids/nextvanta.png";

const experiences = [
  {
    company: "CloudWent Solutions",
    role: "Frontend Developer Intern",
    date: "July 2026 - Present",
    responsibilities: [
      "Developing responsive web applications using React.js and TypeScript.",
      "Building reusable UI components with Chakra UI and modern frontend practices.",
      "Integrating REST APIs and improving application performance.",
      "Collaborating with the team using Git and following clean coding standards.",
    ],
    testimonial:
      "Contributed to real-world production projects by building responsive, user-friendly, and scalable frontend applications.",
    logo: cloudwentLogo,
  },

  {
    company: "DSA & Hackathons | 300+ LeetCode | National-Level Competitions",
    role: "Problem Solver & Hackathon Achiever",
    date: "2025 - 2026",
    responsibilities: [
      "Solved 300+ DSA problems focusing on core patterns and optimization.",
      "Participated in national-level hackathons with strong performance.",
      "Built scalable solutions under time constraints.",
      "Applied system design and problem-solving in real-world scenarios.",
    ],
    testimonial:
      "Demonstrates strong analytical thinking, coding consistency, and competitive problem-solving ability.",
    logo: leetcodeLogo,
  },

  {
    company: "Nextvanta Innovation Pvt. Ltd",
    role: "Web Developer Intern",
    date: "Jul 2024 - Aug 2024",
    responsibilities: [
      "Engineered and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed booking workflows, dynamic data handling, and responsive user interfaces.",
      "Optimized backend APIs to improve performance, reduce errors, and ensure smooth functionality.",
      "Applied strong problem-solving skills through 300+ DSA problems on LeetCode.",
    ],
    testimonial:
      "Delivered scalable full-stack solutions with strong backend optimization and problem-solving expertise.",
    logo: nextvantaLogo,
  },
];

const ExperienceSection = () => {
  return (
    <div className="relative bg-[#0b0f19] text-white py-24 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-20">
        Professional Experience
      </h2>

      <div className="relative flex flex-col gap-32 items-center">
        {/* Timeline */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-teal-500 -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <div
            key={index}
            className="relative flex flex-col md:flex-row items-center justify-center gap-8 w-full"
          >
            {/* Left Card */}
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full md:w-[40%]"
            >
              <h3 className="text-xl font-semibold text-teal-400">
                {exp.role}
              </h3>

              <p className="text-sm text-gray-400 mb-3">{exp.date}</p>

              <ul className="list-disc ml-5 space-y-2 text-sm text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </motion.div>

            {/* Center Logo */}
            <div className="bg-teal-600 p-3 rounded-full shadow-lg flex items-center justify-center w-20 h-20">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            {/* Right Card */}
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full md:w-[40%]"
            >
              <p className="text-yellow-400 text-lg">★★★★★</p>

              <p className="mt-3 text-sm italic text-gray-300">
                {exp.testimonial}
              </p>

              <p className="mt-4 font-semibold text-purple-400">
                {exp.company}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;