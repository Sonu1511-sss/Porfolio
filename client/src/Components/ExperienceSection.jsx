import { motion } from "framer-motion";

const experiences = [
  {
    company: "Zoro Innovation",
    role: "MERN Stack Intern",
    date: "June 2025 - July 2025",
    responsibilities: [
      "Developed scalable full-stack applications using MongoDB, Express.js, React.js, and Node.js.",
      "Designed RESTful APIs and integrated dynamic frontend components.",
      "Optimized database queries improving application performance.",
      "Followed clean architecture and modular coding practices.",
    ],
    testimonial:
      "Delivered production-ready full-stack solutions with strong backend logic and scalable architecture.",
    logo: "/assids/zoro.png",
  },

  {
  company: "DSA & Hackathons | 300+ LeetCode | National-Level Competitions",
  role: "Problem Solver & Hackathon Achiever",
  date: "2025-2026",
  responsibilities: [
    "Solved 300+ DSA problems focusing on core patterns and optimization.",
    "Participated in national-level hackathons with strong performance.",
    "Built scalable solutions under time constraints.",
    "Applied system design and problem-solving in real-world scenarios.",
  ],
  testimonial:
    "Demonstrates strong analytical thinking, coding consistency, and competitive problem-solving ability.",
  logo: "/assids/leetcode.png",
},
  {
  company: "Nextvanta Innovation Pvt. Ltd",
  role: "Web Developer Intern",
  date: "ul 2024 – Aug 2024",
  responsibilities: [
    "Engineered and deployed full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
    "Designed booking workflows, dynamic data handling, and responsive user interfaces.",
    "Optimized backend APIs to improve performance, reduce errors, and ensure smooth functionality.",
    "Applied strong problem-solving skills through 300+ DSA problems on LeetCode.",
  ],
  testimonial:
    "Delivered scalable full-stack solutions with strong backend optimization and problem-solving expertise.",
  logo: "/assids/nextvanta.png",
}
];

const ExperienceSection = () => {
  return (
    <div className="relative bg-[#0b0f19] text-white py-24 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-20">
        Professional Experience
      </h2>

      <div className="relative flex flex-col gap-32 items-center">
        
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-teal-500 transform -translate-x-1/2" />

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

              <ul className="list-disc ml-5 text-sm space-y-1 text-gray-300">
                {exp.responsibilities.map((res, i) => (
                  <li key={i}>{res}</li>
                ))}
              </ul>
            </motion.div>

            {/* Center Logo */}
            <div className="bg-teal-600 p-4 rounded-full shadow-lg flex items-center justify-center w-[70px] h-[70px]">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-full h-full object-cover rounded-full"
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
              <p className="text-yellow-400">★★★★★</p>
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