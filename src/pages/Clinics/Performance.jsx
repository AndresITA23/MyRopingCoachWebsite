import React from "react";
import { Trophy, Video, BarChart3, Repeat } from "lucide-react";

const Performance = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Clínica Performance
        </h1>
        <p className="text-lg text-gray-600">
          La clínica más popular, dirigida a competidores que buscan elevar su
          rendimiento respetando su estilo único.
        </p>
      </div>

      {/* Secciones con iconos */}
      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Trophy className="w-10 h-10 text-yellow-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Enfoque Competitivo</h2>
          <p className="text-gray-600">
            Fortalece a los lazadores como competidores a través del{" "}
            <strong>horsemanship</strong> y un plan mental para la competencia,
            sin cambiar su esencia.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Video className="w-10 h-10 text-blue-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Análisis en Video</h2>
          <p className="text-gray-600">
            Con videos en diferentes ángulos, incluso con drone, se identifican
            más de <strong>120 variables</strong> en cada carrera.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <BarChart3 className="w-10 h-10 text-green-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Radiografía del Rendimiento</h2>
          <p className="text-gray-600">
            Los datos se procesan en hojas de cálculo y gráficas para detectar
            errores y hábitos, generando resultados en el corto plazo.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <Repeat className="w-10 h-10 text-purple-500 mb-3" />
          <h2 className="text-xl font-semibold mb-2">Reprogramación Muscular</h2>
          <p className="text-gray-600">
            Mediante repetición supervisada y dinámicas de competencia por
            premios, los hábitos negativos se reemplazan de forma efectiva.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Performance;
