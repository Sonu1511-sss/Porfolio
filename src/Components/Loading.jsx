import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0f19] text-white">
      {/* Outer Pulse Glow */}
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 blur-xl"
        />

        {/* Dual Spinner Rings */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="w-24 h-24 border-4 border-t-teal-400 border-r-transparent border-b-blue-500 border-l-transparent rounded-full shadow-2xl"
        />

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="absolute w-16 h-16 border-2 border-t-purple-500 border-r-transparent border-b-teal-300 border-l-transparent rounded-full"
        />

        {/* Inner Logo Initial */}
        <div className="absolute font-extrabold text-xl tracking-tighter bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
          SU
        </div>
      </div>

      {/* Brand Text & Pulse Loading */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 text-center"
      >
        <h2 className="text-xl font-bold tracking-wide">
          Shubham <span className="text-teal-400">Uprade</span>
        </h2>
        <p className="text-xs text-gray-400 tracking-widest uppercase mt-1 animate-pulse">
          Loading Portfolio...
        </p>
      </motion.div>
    </div>
  );
}
