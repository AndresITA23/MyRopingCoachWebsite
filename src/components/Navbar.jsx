import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import LanguageSwitch from "./SwitchEnEs";

const Navbar = () => {
  const location = useLocation();

  // Funciones para determinar si una ruta o dropdown está activo
  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (basePath) => location.pathname.startsWith(basePath);

  // Función auxiliar para las clases del underline animado.
  const getUnderlineClasses = (active) =>
    `absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left ${
      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = {
    nosotros: [
      { name: "Sobre nosotros", path: "/nosotros" },
      { name: "Beneficios", path: "/nosotros/beneficios" },
      { name: "PyR", path: "/nosotros/dudas" },
    ],
    nhsra: [
      { name: "Afiliacion", path: "/nhsra/afiliacion" },
      { name: "Galeria", path: "/nhsra/galeria" },
      { name: "Resultados 2024", path: "nhsra/resultados2024" },
      { name: "Informacion", path: "/nhsra/info" },
    ],
    njhra: [
      { name: "Afiliacion", path: "/njhra/afiliacion" },
      { name: "Galeria", path: "/njhra/galeria" },
      { name: "Resultados 2024", path: "njhra/resultados2024" },
      { name: "Informacion", path: "/njhra/info" },
    ],
    contacta: [
      { name: "Vocal por estado", path: "/contacta" },
      { name: "Nuestro equipo", path: "/contacta/equipo" },
    ],
    clinics: [
      { name: "Performance", path: "/clinics/performance" },
      { name: "Fundamentals", path: "/clinics/fundamentals" },
    ],
  };

  // Manejo del scroll para mostrar/ocultar la navbar
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 50) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header>
      <nav
        className={`${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } fixed bg-black bg-opacity-30 backdrop-blur-sm text-white shadow-md top-0 left-0 w-full z-50 transition-transform duration-300`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo y título */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-14 h-14" />
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl font-bold relative group inline-block"
            >
              My Roping Coach
            </Link>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="text-white text-2xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <i className="bx bx-x text-4xl" />
            ) : (
              <i className="bx bx-menu text-4xl" />
            )}
          </button>

          {/* Menú de escritorio */}
          <ul className="hidden md:flex space-x-6 font-bold items-center">
            {/* Acerca de */}
            <li className="relative">
              <Link
                to="/aboutme"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                Acerca
                <span className={getUnderlineClasses(isActive("/aboutme"))} />
              </Link>
            </li>

            {/* Qué es */}
            <li className="relative">
              <Link
                to="/whatis"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                ¿Qué es?
                <span className={getUnderlineClasses(isActive("/whatis"))} />
              </Link>
            </li>

            {/*Clinics */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("clinics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 relative">
                <span className="relative group inline-block py-2">
                  Clinicas
                  <span
                    className={getUnderlineClasses(
                      isDropdownActive("/clinics")
                    )}
                  />
                </span>
                <i
                  className={`bx bx-chevron-down transition-transform ${
                    activeDropdown === "clinics" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 bg-black bg-opacity-30 min-w-[200px] rounded-lg py-2 transition-all duration-300 ${
                  activeDropdown === "clinics"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {dropdownItems.clinics.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeMenu}
                    className="relative group block px-4 py-2 transition-colors hover:bg-white/10"
                  >
                    {item.name}
                    <span
                      className={isActive(item.path) ? "active-class" : ""}
                    />
                  </Link>
                ))}
              </div>
            </li>

            {/* Galeria */}
            {/* <li className="relative">
              <Link
                to="/galeria"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                Galeria
                <span className={getUnderlineClasses(isActive("/galeria"))} />
              </Link>
            </li> */}

            {/* Contacta Dropdown */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("contacta")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 relative">
                <span className="relative group inline-block py-2">
                  Contacta
                  <span
                    className={getUnderlineClasses(
                      isDropdownActive("/contacta")
                    )}
                  />
                </span>
                <i
                  className={`bx bx-chevron-down transition-transform ${
                    activeDropdown === "contacta" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 bg-black bg-opacity-30 min-w-[200px] rounded-lg py-2 transition-all duration-300 ${
                  activeDropdown === "contacta"
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
              >
                {dropdownItems.contacta.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={closeMenu}
                    className="relative group block px-4 py-2 transition-colors hover:bg-white/10"
                  >
                    {item.name}
                    <span
                      className={isActive(item.path) ? "active-class" : ""}
                    />
                  </Link>
                ))}
              </div>
            </li>

            {/* Iconos Sociales */}
            <li>
              <a
                href="https://www.instagram.com/aldo.garibay/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="bx bxl-instagram-alt text-xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/aldogaribayolachea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <i className="bx bxl-facebook-circle text-xl" />
              </a>
            </li>

            {/* Language Switch */}
            <li>
              <LanguageSwitch
                onToggle={(lang) => console.log(`Language changed to: ${lang}`)}
              />
            </li>
          </ul>

          {/* Menú móvil */}
          <div
            className={`md:hidden absolute top-full left-0 w-full bg-black bg-opacity-40 shadow-md overflow-hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col items-center space-y-4 py-4 font-bold">
              {/* Acerca */}
              <li className="relative group inline-block">
                <Link to="/aboutme" onClick={closeMenu} className="py-2">
                  Acerca
                  <span className={getUnderlineClasses(isActive("/aboutme"))} />
                </Link>
              </li>

              {/* Qué es */}
              <li className="relative group inline-block">
                <Link to="/whatis" onClick={closeMenu} className="py-2">
                  ¿Qué es?
                  <span className={getUnderlineClasses(isActive("/whatis"))} />
                </Link>
              </li>

              {/* Clinics Dropdown */}
              <li className="w-full text-center">
                <button
                  onClick={() => toggleDropdown("clinics")}
                  className="flex items-center justify-center gap-1 w-full relative group py-2"
                >
                  Clínicas
                  <span
                    className={getUnderlineClasses(
                      isDropdownActive("/clinics")
                    )}
                  />
                  <i
                    className={`bx bx-chevron-down transition-transform ${
                      activeDropdown === "clinics" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "clinics" ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {dropdownItems.clinics.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeMenu}
                      className="relative group block py-2 text-sm"
                    >
                      {item.name}
                      <span
                        className={getUnderlineClasses(isActive(item.path))}
                      />
                    </Link>
                  ))}
                </div>
              </li>

              {/* Contacta Dropdown */}
              <li className="w-full text-center">
                <button
                  onClick={() => toggleDropdown("contacta")}
                  className="flex items-center justify-center gap-1 w-full relative group py-2"
                >
                  Contacta
                  <span
                    className={getUnderlineClasses(
                      isDropdownActive("/contacta")
                    )}
                  />
                  <i
                    className={`bx bx-chevron-down transition-transform ${
                      activeDropdown === "contacta" ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeDropdown === "contacta" ? "max-h-40" : "max-h-0"
                  }`}
                >
                  {dropdownItems.contacta.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={closeMenu}
                      className="relative group block py-2 text-sm"
                    >
                      {item.name}
                      <span
                        className={getUnderlineClasses(isActive(item.path))}
                      />
                    </Link>
                  ))}
                </div>
              </li>

              {/* Redes Sociales */}
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.instagram.com/aldo.garibay/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <i className="bx bxl-instagram-alt text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/aldogaribayolachea/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition-colors"
                >
                  <i className="bx bxl-facebook-circle text-2xl" />
                </a>
              </div>

              {/* Language Switch */}
              <li>
                <LanguageSwitch
                  onToggle={(lang) =>
                    console.log(`Language changed to: ${lang}`)
                  }
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
