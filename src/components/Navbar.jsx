import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.svg";
import LanguageSwitch from "./SwitchEnEs";

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isDropdownActive = (basePath) => location.pathname.startsWith(basePath);

  const getUnderlineClasses = (active) =>
    `absolute left-0 bottom-0 w-full h-0.5 bg-white transition-transform duration-300 origin-left ${
      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
    }`;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isAtTop, setIsAtTop] = useState(true);

  const dropdownItems = {
    clinics: [
      { name: t("navbar.performance"), path: "/clinics/performance" },
      { name: t("navbar.fundamentals"), path: "/clinics/fundamentals" },
    ],
    contacta: [
      { name: t("navbar.stateRep"), path: "/contacta" },
      { name: t("navbar.team"), path: "/contacta/equipo" },
    ],
  };

  // Scroll behavior
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

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        setIsAtTop(window.scrollY < 50);
        if (window.scrollY > lastScrollY && window.scrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setIsAtTop(false);
    }
  }, [location.pathname, lastScrollY]);

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
        className={`
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          fixed top-0 left-0 w-full z-50
          transition-transform duration-300 
          transition-colors duration-500 
          ease-in-out
          ${
            isAtTop && location.pathname === "/"
              ? "bg-black/40 backdrop-blur-sm"
              : "bg-black"
          }
          text-white shadow-md
        `}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={Logo} alt="Logo" className="w-14 h-14" />
            <Link
              to="/"
              onClick={closeMenu}
              className="text-xl font-bold relative group inline-block"
            >
              {t("navbar.brand")}
            </Link>
          </div>

          {/* Botón menú móvil */}
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

          {/* Menú escritorio */}
          <ul className="hidden md:flex space-x-6 font-bold items-center">
            <li className="relative">
              <Link
                to="/about-me"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                {t("navbar.about")}
                <span className={getUnderlineClasses(isActive("/about-me"))} />
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/what-is"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                {t("navbar.method")}
                <span className={getUnderlineClasses(isActive("/what-is"))} />
              </Link>
            </li>

            {/* Dropdown Clínicas */}
            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("clinics")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 relative">
                <span className="relative group inline-block py-2">
                  {t("navbar.clinics")}
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
                    className="relative group block px-4 py-2 hover:bg-white/10"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>

            {/* Contacta */}
            <li className="relative">
              <Link
                to="/contact"
                onClick={closeMenu}
                className="relative group inline-block py-2"
              >
                {t("navbar.contact")}
                <span className={getUnderlineClasses(isActive("/contact"))} />
              </Link>
            </li>

            {/* Redes Sociales */}
            <li>
              <a
                href="https://www.instagram.com/aldo.garibay/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-instagram-alt text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/aldogaribayolachea/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-facebook-circle text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300"
              >
                <i className="bx bxl-youtube text-3xl" />
              </a>
            </li>

            {/* Switch idioma */}
            <li className="relative top-1">
              <LanguageSwitch
                onToggle={(lang) =>
                  console.log(`Language changed to: ${lang}`)
                }
              />
            </li>
          </ul>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-black md:hidden shadow-md">
              <ul className="flex flex-col items-center space-y-4 py-6 font-bold">
                <li>
                  <Link to="/about-me" onClick={closeMenu}>
                    {t("navbar.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/what-is" onClick={closeMenu}>
                    {t("navbar.method")}
                  </Link>
                </li>
                {/* Dropdown Clínicas móvil */}
                <li>
                  <button
                    className="flex items-center gap-1"
                    onClick={() => toggleDropdown("clinics")}
                  >
                    {t("navbar.clinics")}
                    <i
                      className={`bx bx-chevron-down transition-transform ${
                        activeDropdown === "clinics" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === "clinics" && (
                    <ul className="flex flex-col items-center space-y-2 mt-2">
                      {dropdownItems.clinics.map((item, index) => (
                        <li key={index}>
                          <Link to={item.path} onClick={closeMenu}>
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>
                  <Link to="/contact" onClick={closeMenu}>
                    {t("navbar.contact")}
                  </Link>
                </li>

                {/* Switch idioma */}
                <li>
                  <LanguageSwitch
                    onToggle={(lang) =>
                      console.log(`Language changed to: ${lang}`)
                    }
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
