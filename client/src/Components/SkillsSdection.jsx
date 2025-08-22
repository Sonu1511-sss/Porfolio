import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import {
  SiJavascript,
  SiThreedotjs,
  SiGit,
  SiFigma,
  SiLeetcode,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { MdManageAccounts, MdOutlineDeveloperMode } from "react-icons/md";
import clsx from "clsx";

const skills = [
  {
    title: "React Developer",
    icon: <FaReact size={50} className="text-cyan-400" />,
    hoverColor: "hover:bg-cyan-900",
  },
  {
    title: "Node.js Developer",
    icon: <FaNodeJs size={50} className="text-green-400" />,
    hoverColor: "hover:bg-green-900",
  },
  {
    title: "Express.js Developer",
    icon: <SiExpress size={50} className="text-gray-400" />,
    hoverColor: "hover:bg-gray-900",
  },
  {
    title: "MongoDB Expert",
    icon: <SiMongodb size={50} className="text-green-500" />,
    hoverColor: "hover:bg-green-800",
  },
  {
    title: "Next.js Developer",
    icon: <SiNextdotjs size={50} className="text-white" />,
    hoverColor: "hover:bg-neutral-900",
  },
  {
    title: "Java Developer",
    icon: <DiJava size={50} className="text-red-500" />,
    hoverColor: "hover:bg-red-900",
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
  {
    title: "Interactive Developer",
    icon: <MdOutlineDeveloperMode size={50} className="text-indigo-400" />,
    hoverColor: "hover:bg-indigo-900",
  },
];
const tools = [
  {
    title: "VS Code",
    icon: <img src="https://img.icons8.com/color/48/visual-studio-code-2019.png" alt="VS Code" className="w-12 h-12" />,
    hoverColor: "hover:bg-blue-900",
  },
  {
    title: "Postman",
    icon: <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png" alt="Postman" className="w-12 h-12" />,
    hoverColor: "hover:bg-orange-800",
  },
  {
    title: "Git",
    icon: <SiGit size={50} className="text-red-400" />,
    hoverColor: "hover:bg-red-900",
  },
  {
    title: "ChatGPT",
    icon: <img src="https://img.icons8.com/ios-filled/50/26e07f/chatgpt.png" alt="ChatGPT" className="w-12 h-12" />,
    hoverColor: "hover:bg-green-900",
  },
  {
    title: "Vercel",
    icon: <img src="https://img.icons8.com/ios-filled/50/ffffff/vercel.png" alt="Vercel" className="w-12 h-12" />,
    hoverColor: "hover:bg-neutral-800",
  },
  {
    title: "Render",
    icon: <img src="https://avatars.githubusercontent.com/u/44745388?s=200&v=4" alt="Render" className="w-12 h-12 rounded-full" />,
    hoverColor: "hover:bg-indigo-800",
  },
];



export default function SkillsSection() {
  const [rotatingIndex, setRotatingIndex] = useState(null);

  const toggleRotate = (index) => {
    setRotatingIndex(rotatingIndex === index ? null : index);
  };

  return (
    <>
    
    
    <div className="bg-[#0b0f19] text-white py-16 px-4">
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
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className={clsx(
              "bg-[#0b0f19] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-800 transition-colors duration-300 cursor-pointer",
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
    <h2 className="text-3xl font-bold text-center mt-24 mb-12">Tools I Use</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
  {tools.map((tool, index) => (
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
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={clsx(
        "bg-[#0b0f19] rounded-2xl p-6 flex flex-col items-center text-center border border-gray-800 transition-colors duration-300 cursor-pointer",
        tool.hoverColor
      )}
    >
      <div className="mb-4">{tool.icon}</div>
      <p className="text-lg font-semibold">{tool.title}</p>
    </motion.div>
  ))}
</div>

    </>
  );
}
