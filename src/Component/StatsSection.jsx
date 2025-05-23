import React from "react";
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    {
      label: "Years of Experience",
      value: 5,
      suffix: "+",
    },
    {
      label: "Satisfied Clients",
      value: 120,
      suffix: "+",
    },
    {
      label: "Completed Projects",
      value: 85,
      suffix: "+",
    },
    {
      label: "Certifications",
      value: 10,
      suffix: "+",
    },
  ];

  return (
    <section className="bg-black text-white   ">
      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-64 h-28 border-2 border-gray-200 rounded-xl shadow-md hover:shadow-teal-400/50 transition-shadow duration-300"
          >
            <h3 className="text-4xl font-extrabold text-teal-300">
              <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
            </h3>
            <p className="mt-2 text-lg font-medium text-gray-300 text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
