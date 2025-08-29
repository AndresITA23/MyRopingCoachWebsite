import React from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../assets/logo.svg"; // Logo en blanco
import LogoBlack from "../assets/logoNegro.svg"; // Logo en negro

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-6">
      {/* Logo */}
      <img
        src={LogoBlack}
        alt="Logo"
        className="h-20 w-auto mb-8"
      />

      {/* Mensaje */}
      <h1 className="text-6xl font-extrabold mb-4 animate-bounce">404</h1>
      <p className="text-xl text-gray-800 mb-6 text-center">
        Oops... La página que buscas no existe o fue movida.
      </p>

      {/* Botón */}
      <Link
        to="/"
        className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
