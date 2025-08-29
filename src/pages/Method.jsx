import React from "react";
import MethodImage from "../assets/images/method3.webp";

const Method = () => {
  return (
    <section className="py-6 px-6 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          El método está diseñado para transformar a los competidores de Team Roping, 
          trabajando en dos áreas clave: <span className="font-semibold">la monta </span> 
          y <span className="font-semibold">la mente</span>.  
          Con fundamentos sólidos, estrategia y mentalidad competitiva, 
          los alumnos logran mejoras constantes en su rendimiento.
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src={MethodImage}
            alt="Método My Roping Coach"
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="text-left">
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            ¿Qué lo hace diferente?
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
            <li>Más de 30 años de experiencia internacional.</li>
            <li>Método probado con miles de alumnos en distintos países.</li>
            <li>Entrenamiento bilingüe: español e inglés.</li>
            <li>Enfoque en fundamentos técnicos y preparación mental.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Method;
