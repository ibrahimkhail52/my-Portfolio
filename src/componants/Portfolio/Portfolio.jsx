import React, { useEffect, useState } from "react";
import { motion as Motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import WelcomePage from "../WelcomePage/WelcomePage";
import WhatsAppButton from "../WhatsAppButton/WhatsAppButton";
import watanPaint from "../../assets/Portfolio img/watan-paint.png";
import sunTower from "../../assets/Portfolio img/sun-tower.png";
import adieHospital from "../../assets/Portfolio img/adie-hospital.png";
import elearna from "../../assets/Portfolio img/elearna.png";

import comingSoon from "../../assets/Portfolio img/coming-soon.jpeg";


export default function Portfolio() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        (localStorage.getItem("theme") ||
          (window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches &&
            "dark") ||
          "light") === "dark"
      );
    }
    return false;
  });

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const projects = [
    {
      id: 1,
      title: "WatanPaint",
      tags: ["React", "Tailwind", "Vercel"],
      link: "https://watan-paint.vercel.app",
      img: watanPaint,
    },
    {
      id: 2,
      title: "Adei Hospital",
      tags: ["React", "Tailwind", "Vercel"],
      link: "https://adei-hospital-cyan.vercel.app",
      img: adieHospital,
    },
    {
      id: 3,
      title: "Sun Tower",
      tags: ["React", "Tailwind", "Vercel"],
      link: "https://sun-tower-mocha.vercel.app",
      img: sunTower,
    },
    {
      id: 4,
      title: "Elearna",
      tags: ["React", "Tailwind", "Vercel"],
      link: "http://elearna-eight.vercel.app",
      img: elearna,
    },
    {
      id: 5,
      title: "Coming Soon",
      tags: ["React", "Tailwind", "Vercel"],
      link: "#",
      img: comingSoon,
    },
    {
      id: 6,
      title: "Coming Soon",
      tags: ["React", "Tailwind", "Vercel"],
      link: "#",
      img: comingSoon,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100">
      {/* Navbar */}
      <Navbar
        dark={dark}
        setDark={setDark}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="max-w-6xl mx-auto px-6 py-12">
       <WelcomePage/>
        <Hero />
        <Projects projects={projects} />
        <About />
        <Contact />
      </main>
      <WhatsAppButton />

      {/* Footer */}
      <footer className="mt-20 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Ibrahimkhail — Built with React + Tailwind
      </footer>
    </div>
  );
}
