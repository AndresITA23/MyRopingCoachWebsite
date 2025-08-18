import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Página no encontrada</h1>
      <p className="text-gray-600 mb-8">Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="text-blue-500 hover:underline">
        Volver a la página principal
      </Link>
    </div>
  );
};

export default NotFound;