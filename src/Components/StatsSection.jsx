import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    {
      label: "Years of Experience",
      value: 2,
      suffix: "+",
    },
    {
      label: "Satisfied Clients",
      value: 9,
      suffix: "+",
    },
    {
      label: "Completed Projects",
      value: 57,
      suffix: "+",
    },
    {
      label: "Certifications",
      value: 6,
      suffix: "+",
    },
  ];

  return (
    <section className="bg-black text-white py-12">
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center w-64 h-28 border-2 border-gray-200 rounded-xl shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(94, 234, 212, 0.4)", // teal-400
            }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-extrabold text-teal-300">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-300 text-center">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
