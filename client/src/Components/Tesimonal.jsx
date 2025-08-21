import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Kuldeep Kawre",
    feedback: "Fantastic UI/UX and React developer creative, efficient, and user-focused!.",
    rating: 5,
    image: "./assids/kulseep.jpg",
  },
  {
    name: "Connect Shiksha",
    feedback: "Fantastic UI/UX and React developer creative, efficient, and user-focused!.",
    rating: 4,
    image: "https://yt3.ggpht.com/0q_LVnVkDCA_OwPmn8dzYNdBB1e7tWZnY5YzNVMqYM8kwvPyhWNGK5Qx1URZd4Jl6IK2MHd7ZQ=s88-c-k-c0x00ffffff-no-rj",
  },
  {
    name: "Bansal College, Bhopal",
    feedback: "Fantastic UI/UX and React developer creative, efficient, and user-focused",
    rating: 5,
    image: "./assids/bgi.jpg",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-black py-12 px-4 sm:px-6 lg:px-8 text-white">
      <h2 className="text-4xl font-bold text-center text-white pt-[4rem] mb-12">
        What People Say
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {testimonials.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-black border-2 border-gray-200 p-6 rounded-xl shadow-lg text-center transform transition duration-500 hover:scale-105"
          >
            <img
              src={review.image}
              alt={review.name}
              className="mx-auto rounded-full w-24 h-24 object-cover mb-4 border-4 border-white"
            />
            <h3 className="text-xl font-semibold">{review.name}</h3>
            <div className="flex justify-center mt-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`h-5 w-5 ${
                    i < review.rating ? 'text-yellow-400' : 'text-gray-600'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-300 italic">"{review.feedback}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
