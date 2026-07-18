import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
        className="w-16 h-16 border-4 border-t-transparent border-blue-500 rounded-full"
      ></motion.div>
    </div>
  );
}
