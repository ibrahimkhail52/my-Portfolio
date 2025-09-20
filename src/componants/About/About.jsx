import React from "react";
import { motion as Motion } from "framer-motion";

export default function About() {
  const listVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  const factVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section id="about" className="mt-20">
      {/* Section Heading */}
      <Motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        About
      </Motion.h2>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* About Text */}
        <Motion.div
          className="md:col-span-2 text-gray-700 dark:text-gray-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.p
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            I'm a frontend developer specializing in building responsive,
            accessible interfaces using modern tools.
          </Motion.p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[
              "Building SPAs with React",
              "Styling with Tailwind CSS",
              "Small interactions with Framer Motion",
              "Optimizing for accessibility",
            ].map((item, index) => (
              <Motion.li
                key={index}
                custom={index}
                variants={listVariants}
                className=""
              >
                • {item}
              </Motion.li>
            ))}
          </ul>
        </Motion.div>

        {/* Quick Facts */}
        <Motion.div
          className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700 shadow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Motion.p
            className="text-sm text-gray-500 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Quick facts
          </Motion.p>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { label: "Location", value: "Kabul, Afghanistan", green: false },
              { label: "Experience", value: "Internship", green: false },
              { label: "Availability", value: "Open to work", green: true },
            ].map((fact, index) => (
              <Motion.div
                key={index}
                className="flex items-center justify-between"
                custom={index}
                variants={factVariants}
              >
                <span>{fact.label}</span>
                <span
                  className={`text-sm ${
                    fact.green
                      ? "text-green-500"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                >
                  {fact.value}
                </span>
              </Motion.div>
            ))}
          </div>
        </Motion.div>
      </div>
    </section>
  );
}
