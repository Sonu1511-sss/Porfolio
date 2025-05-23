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
  date: "2023",
  responsibilities: [
    "Collaborated with Shryansh Coding Class on a MERN stack project..",
    "Participated in college hackathon and secured a top 10 position..",
    "Worked effectively in a team to deliver innovative solutions.",
  ],
  testimonial:
    "Demonstrated strong teamwork and full-stack development skills, contributing significantly to project success.",
  logo: "data:image/jpeg;base64,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", // replace with actual logo URL or import icon
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
