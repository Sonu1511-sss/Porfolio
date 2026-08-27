import { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import {
  SiTypescript,
  SiChakraui,
  SiNextdotjs,
  SiJavascript,
  SiGit,
  SiFigma,
  SiLeetcode,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import clsx from "clsx";

// Tool Image Assets / Logos
const vscodeLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg";
const postmanLogo = "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg";
const gitLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg";
const chatgptLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg";
const vercelLogo = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg";
const renderLogo = "https://avatars.githubusercontent.com/u/44745388?s=200&v=4";

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
    title: "TypeScript Developer",
    icon: <SiTypescript size={50} className="text-blue-500" />,
    hoverColor: "hover:bg-blue-900",
  },
  {
    title: "Chakra UI Developer",
    icon: <SiChakraui size={50} className="text-teal-400" />,
    hoverColor: "hover:bg-teal-900",
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
    icon: <img src={vscodeLogo} alt="VS Code" className="w-12 h-12 object-contain" />,
    hoverColor: "hover:bg-blue-900",
  },
  {
    title: "Postman",
    icon: <img src={postmanLogo} alt="Postman" className="w-12 h-12 object-contain" />,
    hoverColor: "hover:bg-orange-900",
  },
  {
    title: "Git",
    icon: <img src={gitLogo} alt="Git" className="w-12 h-12 object-contain" />,
    hoverColor: "hover:bg-red-900",
  },
  {
    title: "ChatGPT",
    icon: <img src={chatgptLogo} alt="ChatGPT" className="w-12 h-12 object-contain bg-white/90 rounded-full p-1" />,
    hoverColor: "hover:bg-emerald-900",
  },
  {
    title: "Vercel",
    icon: <img src={vercelLogo} alt="Vercel" className="w-12 h-12 object-contain bg-white/90 rounded-full p-1" />,
    hoverColor: "hover:bg-neutral-800",
  },
  {
    title: "Render",
    icon: <img src={renderLogo} alt="Render" className="w-12 h-12 object-contain rounded-full" />,
    hoverColor: "hover:bg-indigo-900",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
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
                delay: index * 0.08,
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
              <p className="text-base font-semibold">{skill.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <h2 className="text-3xl font-bold text-white text-center mt-16 mb-12">
        Tools I Use
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto pb-16">
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
              delay: index * 0.08,
            }}
            viewport={{ once: true }}
            className={clsx(
              "bg-[#0b0f19] text-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-800 transition-colors duration-300 cursor-pointer",
              tool.hoverColor
            )}
          >
            <div className="mb-4">{tool.icon}</div>
            <p className="text-base font-semibold">{tool.title}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
