import React from "react";
import { motion as Motion } from "framer-motion";

export default function Projects({ projects }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8 },
    }),
  };

  return (
    <section id="projects" className="mt-20 max-w-6xl mx-auto px-6">
      {/* Section Heading */}
      <Motion.h2
        className="text-3xl sm:text-4xl font-semibold text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </Motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <Motion.article
            key={p.id}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              translateY: -6,
              boxShadow: "0 10px 30px rgba(2,6,23,0.08)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800 overflow-hidden"
          >
            {/* Project Image */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">{p.title}</h3>
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                {p.desc}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 border rounded-full text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  See project
                </a>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  2025
                </div>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  );
}
