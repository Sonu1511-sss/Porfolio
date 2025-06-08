import { motion } from "framer-motion";
import { FaBuilding } from "react-icons/fa";
import { SiFrontendmentor, SiFigma } from "react-icons/si";

const experiences = [
    {
  company: "Connect Shiksha",
  role: "React Developer & Fullstack Coach",
  date: "January 2024 - March 2024",
  responsibilities: [
    "Built responsive UI for Connect Shiksha using React & Tailwind CSS.",
    "Turned Figma designs into seamless web experiences.",
    "Improved load times and mobile performance.",
    "Completed fullstack coaching at Connect Shiksha Coaching Class, Balaghat.",
    "Provided UI design expertise, showcasing strong React skills.",
  ],
  testimonial:
    "One of the best UI developers we've worked with. Delivered sleek, responsive interfaces and demonstrated deep fullstack knowledge and coaching capabilities.",
  logo:
    "https://yt3.ggpht.com/0q_LVnVkDCA_OwPmn8dzYNdBB1e7tWZnY5YzNVMqYM8kwvPyhWNGK5Qx1URZd4Jl6IK2MHd7ZQ=s88-c-k-c0x00ffffff-no-rj",
},
  {
  company: "Connect Shiksha",
  role: "Frontend Developer (Internship)",
  date: "April 2024 - June 2024",
  responsibilities: [
    "Built responsive UI for Connect Shiksha using React & Tailwind CSS.",
    "Turned Figma designs into seamless web experiences.",
    "Improved load times and mobile performance.",
  ],
  testimonial:
    "One of the best UI developers we've worked with. Delivered sleek, responsive interfaces and showcased strong React skills throughout the project.",
  logo:
    "https://yt3.ggpht.com/0q_LVnVkDCA_OwPmn8dzYNdBB1e7tWZnY5YzNVMqYM8kwvPyhWNGK5Qx1URZd4Jl6IK2MHd7ZQ=s88-c-k-c0x00ffffff-no-rj",
  notes:
    "Completed internship at Connect Shiksha Balaghat and received certification as a React Developer.",
},
  {
  company: "Bansal College, Bhopal",
  role: "MERN Stack Developer & Hackathon Participant",
  date: "2025",
  responsibilities: [
    "Collaborated with Shryansh Coding Class on a MERN stack project..",
    "Participated in college hackathon and secured a top 10 position..",
    "Worked effectively in a team to deliver innovative solutions.",
  ],
  testimonial:
    "Demonstrated strong teamwork and full-stack development skills, contributing significantly to project success.",
  logo: "./assids/bgi.jpg", // replace with actual logo URL or import icon
},

];

const ExperienceSection = () => {
  return (
    <div className="relative bg-black text-white py-24 px-4 md:px-16">
      <h2 className="text-4xl font-bold text-center mb-20 z-10 relative">
        Professional Work Experience
      </h2>

      <div className="relative flex flex-col gap-32 items-center">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1.5px] bg-teal-600 transform -translate-x-1/2 z-0" />

        {/* Experience Loop */}
        {experiences.map((exp, index) => {
          const isImage = typeof exp.logo === "string";

          return (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-center gap-8 z-10"
            >
              {/* Left Card */}
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-900 p-6 rounded-2xl shadow-xl w-full md:w-[40%]"
              >
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-gray-400">{exp.date}</p>
                <ul className="list-disc ml-5 text-sm mt-2 space-y-1">
                  {exp.responsibilities.map((res, i) => (
                    <li key={i}>{res}</li>
                  ))}
                </ul>
              </motion.div>

              {/* Center Icon or Image */}
              <div className="bg-teal-600 p-4 rounded-full z-10 text-white shadow-md flex items-center justify-center w-[60px] h-[60px]">
                {isImage ? (
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-full h-full object-cover rounded-full"
                  />
                ) : (
                  <exp.logo size={24} />
                )}
              </div>

              {/* Right Card */}
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full md:w-[40%] text-sm italic text-gray-300"
              >
                <p>★★★★★</p>
                <p className="mt-2">{exp.testimonial}</p>
                <p className="mt-2 font-semibold text-purple-400">
                  {exp.company}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceSection;
