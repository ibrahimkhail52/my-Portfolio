import React from "react";
import { motion as Motion } from "framer-motion";
import profileimg from "../../assets/Portfolio img/my-img.jpeg";

export default function WelcomePage() {
  return (
    <div
      className="w-full min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-indigo-200 to-pink-200 
                    dark:from-indigo-600 dark:to-pink-500 
                    text-gray-900 dark:text-white transition-colors duration-500"
    >
      <Motion.div
        initial={{ opacity: 0, y: -50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center"
      >
        {/* Profile Image */}
        <Motion.img
          src={profileimg}
          alt="Profile"
          className="mx-auto mb-6 w-32 h-32 rounded-full shadow-xl border-4 border-white/30 dark:border-gray-300/30"
          initial={{ rotate: -15 }}
          animate={{ rotate: 0 }}
          transition={{ duration: 1 }}
        />

        {/* Name + Role */}
        <Motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Welcome to My Portfolio
        </Motion.h1>
        <Motion.p
          className="text-lg sm:text-xl opacity-90 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Murtaza Ibrahimkhail — Frontend Developer
        </Motion.p>
      </Motion.div>
    </div>
  );
}
