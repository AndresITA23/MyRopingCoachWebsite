import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Asegúrate de que esta ruta sea correcta

const BeneficiosLogros = () => {
  const [logros, setLogros] = useState([]);

  useEffect(() => {
    const fetchLogros = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'logros'));
        const logrosData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLogros(logrosData);
      } catch (error) {
        console.error('Error al obtener los logros:', error);
      }
    };

    fetchLogros();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Lista de logros */}
      <div className="flex flex-col space-y-8">
        {logros.map((logro) => (
          <div
            key={logro.id}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col md:flex-row"
          >
            <img
              src={logro.imagenUrl}
              alt={logro.titulo}
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <div className="p-4 flex flex-col justify-between">
              {/* Contenedor para título y descripción */}
              <div className="mb-4">
                <h2 className="text-2xl font-semibold text-gray-800">{logro.titulo}</h2>
                <p className="text-gray-600 mt-2">{logro.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeneficiosLogros;
