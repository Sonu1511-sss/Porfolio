import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiThreedotjs, SiGit, SiFigma, SiLeetcode } from "react-icons/si";
import clsx from "clsx";

const skills = [
  {
    title: "React Developer",
    icon: <FaReact size={50} className="text-cyan-400" />,
    hoverColor: "hover:bg-cyan-900",
  },
  {
    title: "Backend Developer",
    icon: <FaNodeJs size={50} className="text-green-400" />,
    hoverColor: "hover:bg-green-900",
  },
  {
    title: "JavaScript Developer",
    icon: <SiJavascript size={50} className="text-yellow-400" />,
    hoverColor: "hover:bg-yellow-800",
  },
  {
    title: "DSA Problem Solver",
    icon: <SiLeetcode size={50} className="text-orange-400" />,
    hoverColor: "hover:bg-orange-900",
  },
  {
    title: "UI/UX Designer",
    icon: <SiFigma size={50} className="text-pink-400" />,
    hoverColor: "hover:bg-pink-900",
  },
  
];

export default function SkillsSection() {
  const [rotatingIndex, setRotatingIndex] = useState(null);

  const toggleRotate = (index) => {
    setRotatingIndex(rotatingIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center pt-[4rem] mb-12">
        How I Can Contribute & My Key Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={clsx(
              "bg-[#111] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-800 transition-colors duration-300 cursor-pointer",
              skill.hoverColor
            )}
            onClick={() => toggleRotate(index)}
          >
            <motion.div
              animate={
                rotatingIndex === index ? { rotate: 360 } : { rotate: 0 }
              }
              transition={
                rotatingIndex === index
                  ? { repeat: Infinity, duration: 2, ease: "linear" }
                  : { duration: 0.3 }
              }
              className="mb-4"
            >
              {skill.icon}
            </motion.div>
            <p className="text-lg font-semibold">{skill.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
