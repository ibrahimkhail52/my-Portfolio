import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Ibrahimkhail — Built with React + Tailwind
    </footer>
  );
}
