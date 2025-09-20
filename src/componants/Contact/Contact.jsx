import React from "react";
import { motion as Motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative mt-20 py-16 bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      {/* Background floating circles */}
      <Motion.div
        className="absolute w-40 h-40 bg-indigo-200 dark:bg-indigo-700 rounded-full top-0 -left-10 opacity-30"
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
      <Motion.div
        className="absolute w-32 h-32 bg-pink-200 dark:bg-pink-700 rounded-full bottom-10 -right-5 opacity-25"
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />

      <Motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Heading */}
        <Motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 dark:text-white"
          variants={itemVariants}
        >
          Let’s Build Something Together
        </Motion.h2>

        {/* Paragraph */}
        <Motion.p
          className="mt-4 text-center text-gray-600 dark:text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I’m always open to new projects and opportunities. Send me a message
          or connect via my socials.
        </Motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Motion.form
            variants={itemVariants}
            className="space-y-4 p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — message simulated (no backend in this demo).");
            }}
          >
            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                required
                placeholder="Your Name"
                className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900/40 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                required
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900/40 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                required
                rows={5}
                placeholder="Write your message..."
                className="w-full mt-1 p-3 rounded-lg border dark:bg-gray-900/40 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 outline-none transition"
              ></textarea>
            </div>
            <Motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition"
            >
              Send Message
            </Motion.button>
          </Motion.form>

          {/* Contact Info */}
          <Motion.div
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition-shadow flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Let’s Connect
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                Prefer email? Send a message to{" "}
                <a
                  href="mailto:ibrahimkhail237@gmail.com"
                  className="text-indigo-600 underline"
                >
                  ibrahimkhail237@gmail.com
                </a>
              </p>

              <div className="mt-6 flex items-center gap-4">
                {[
                  // social links
                  {
                    href: "https://github.com/ibrahimkhail52",
                    icon: <FiGithub className="text-xl" />,
                  },
                  {
                    href: "https://www.linkedin.com/in/murtaza-ibrahimkhail-a302b0347",
                    icon: <FiLinkedin className="text-xl" />,
                  },
                  {
                    href: "mailto:ibrahimkhail237@gmail.com",
                    icon: <FiMail className="text-xl" />,
                  },
                ].map((social, i) => (
                  <Motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition shadow-md"
                  >
                    {social.icon}
                  </Motion.a>
                ))}
              </div>
            </div>

            <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
              Available for freelance and full-time roles.
            </div>
          </Motion.div>
        </div>
      </Motion.div>
    </section>
  );
}
