import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ transparent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`transition-transform duration-300 fixed top-0 left-0 w-full z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${transparent ? "absolute text-white" : "bg-white shadow-md"}`}
    >
      <div className="flex items-center justify-between flex-wrap p-6">
        {/* LOGO */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <Link to="/" className="font-bold text-2xl tracking-tight">
            Archi<span className="text-green-500">Vision</span>
          </Link>
        </div>

        {/* MENU BUTTON (MOBILE) */}
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        {/* MENU LINKS */}
        <div
          className={`w-full ${
            isOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:justify-between lg:w-auto`}
        >
          {/* Links a la izquierda */}
          <div
            className={`text-sm flex flex-col lg:flex-row lg:items-center ${
              transparent ? "text-white" : "text-gray-800"
            }`}
          >
            <Link
              to="/about"
              className="block mt-4 lg:mt-0 lg:mr-6 hover:text-green-500"
            >
              Nosotros
            </Link>
            <Link
              to="/services"
              className="block mt-4 lg:mt-0 hover:text-green-500"
            >
              Servicios
            </Link>
          </div>

          {/* Links a la derecha */}
          <div
            className={`text-sm flex flex-col lg:flex-row lg:items-center mt-4 lg:mt-0 ${
              transparent ? "text-white" : "text-gray-800"
            }`}
          >
            <Link
              to="/projects"
              className="block mt-4 lg:mt-0 lg:mr-6 hover:text-green-500"
            >
               &nbsp; &nbsp;Proyectos
            </Link>
            <Link
              to="/contact"
              className="block mt-4 lg:mt-0 hover:text-green-500"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
