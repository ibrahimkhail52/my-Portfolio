import React, { useState, useEffect, useRef } from "react";
import { motion as Motion } from "framer-motion";
import {
  FiMoon,
  FiSun,
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import profileImg from "../../assets/Portfolio img/my-img.jpeg";

export default function Navbar({ dark, setDark }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 0);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Home",
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
    },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex items-center gap-2 z-50"
        >
          <img
            src={profileImg}
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-white/30 dark:border-gray-300/30"
          />
          <span className="hidden sm:inline font-bold text-lg">
            Ibrahimkhail
          </span>
        </Motion.div>

        {/* Menu + Actions (with blur) */}
        <div
          className={`hidden md:flex items-center gap-6 px-4 py-2 rounded-md transition-all duration-300 backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-md`}
        >
          {/* Desktop Menu */}
          <nav className="flex gap-6">
            {menuItems.map((item, idx) =>
              item.action ? (
                <button
                  key={idx}
                  onClick={item.action}
                  className="relative px-3 py-2 text-sm font-medium text-black dark:text-white
                    hover:text-blue-700 dark:hover:text-indigo-400
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative px-3 py-2 text-sm font-medium text-black dark:text-white
                    hover:text-blue-700 dark:hover:text-indigo-400
                    after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-blue-600
                    after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.name}
                </a>
              )
            )}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setDark((s) => !s)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
            <a
              href="https://github.com/ibrahimkhail52"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/murtaza-ibrahimkhail-a302b0347"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <FiLinkedin />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-3 py-2 bg-indigo-600 text-white rounded-md hover:scale-105 transform transition"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition backdrop-blur-md bg-white/70 dark:bg-gray-800/70"
          onClick={() => setMobileOpen((s) => !s)}
        >
          {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <Motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="md:hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-md shadow-md"
        >
          <div className="flex flex-col px-4 py-4 gap-3">
            {menuItems.map((item, idx) =>
              item.action ? (
                <button
                  key={idx}
                  onClick={() => {
                    item.action();
                    setMobileOpen(false);
                  }}
                  className="py-2 text-left text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 rounded-md transition transform hover:scale-105"
                >
                  {item.name}
                </button>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2 text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 px-3 rounded-md transition transform hover:scale-105"
                >
                  {item.name}
                </a>
              )
            )}
          </div>
        </Motion.nav>
      )}
    </header>
  );
}
