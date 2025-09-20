import React from "react";
import { motion as Motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export default function Hero() {
  const skills = [
    {
      name: "HTML",
      icon: <SiHtml5 className="inline-block mr-2 text-orange-600" />,
    },
    {
      name: "CSS",
      icon: <SiCss3 className="inline-block mr-2 text-blue-600" />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="inline-block mr-2 text-yellow-500" />,
    },
    {
      name: "Bootstrap",
      icon: <SiBootstrap className="inline-block mr-2 text-purple-600" />,
    },
    {
      name: "React",
      icon: <SiReact className="inline-block mr-2 text-blue-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="inline-block mr-2 text-teal-400" />,
    },
    { name: "GitHub", icon: <SiGithub className="inline-block mr-2" /> },
    {
      name: "Figma",
      icon: <SiFigma className="inline-block mr-2 text-pink-500" />,
    },
  ];

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center pt-20 min-h-[80vh]"
    >
      {/* Hero Heading */}
      <Motion.h1
        className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Ibrahimkhail — a Frontend Developer
      </Motion.h1>

      {/* Intro Paragraph */}
      <Motion.p
        className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl text-center max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I build accessible, performant, and delightful web experiences using
        React and Tailwind CSS.
      </Motion.p>

      {/* Buttons */}
      <Motion.div
        className="mt-10 w-full flex justify-center gap-4 max-w-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a
          href="#projects"
          className="px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:scale-105 transform transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          Get in touch
        </a>
      </Motion.div>

      {/* Skills Heading */}
      <Motion.h2
        className="mt-16 text-2xl sm:text-3xl font-semibold text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        My Skills
      </Motion.h2>

      {/* Skills List */}
      <div className="relative overflow-hidden w-full mt-6">
        {/* Left/Right fade using mask */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        ></div>

        <Motion.div
          className="flex gap-6 w-max mx-auto"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          }}
        >
          {skills.concat(skills).map((skill, index) => (
            <Motion.div
              key={index}
              className="flex items-center px-4 py-2 bg-indigo-100/30 dark:bg-indigo-700/30 rounded-full text-sm sm:text-base whitespace-nowrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              {skill.icon}
              {skill.name}
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
