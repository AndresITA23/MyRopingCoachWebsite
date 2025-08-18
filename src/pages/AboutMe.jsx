import React, { useState } from "react";
import { Award, Globe, Users, Calendar } from "lucide-react";

const AboutMe = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="w-full bg-white px-6">
      {!imageLoaded && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-700 text-lg">Cargando...</p>
        </div>
      )}

      <div className={`max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 ${!imageLoaded ? "hidden" : ""}`}>
        {/* Imagen del coach */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/myropingcoachweb.firebasestorage.app/o/fotos%2FDSC08975.webp?alt=media&token=7b529605-c45a-44b4-8b0b-da409cd4a4be"
            alt="Aldo Garibay - Coach Internacional"
            className="rounded-2xl shadow-xl max-w-sm md:max-w-md"
            onLoad={() => setImageLoaded(true)}
          />
        </div>

        {/* Texto */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Aldo Garibay
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Coach internacional de <span className="font-semibold">Team Roping</span>, certificado por la{" "}
            <span className="font-semibold">AQHA (ID 4363499)</span> y creador
            del método <span className="font-semibold">My Roping Coach</span>.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Con más de <span className="font-semibold">30 años de experiencia</span> como competidor y{" "}
            <span className="font-semibold">20 años como coach</span>, he trabajado con más de <span className="font-semibold">5,000 alumnos</span> en{" "}
            <span className="font-semibold">8 países</span> y en <span className="font-semibold">2 idiomas</span>, impartiendo un
            promedio de <span className="font-semibold">40 clínicas al año</span>.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center md:items-start">
              <Award className="w-8 h-8 text-blue-600 mb-2" />
              <p className="font-bold text-gray-800">30+ años</p>
              <span className="text-sm text-gray-600">de experiencia</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Users className="w-8 h-8 text-green-600 mb-2" />
              <p className="font-bold text-gray-800">5,000+</p>
              <span className="text-sm text-gray-600">alumnos apoyados</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Globe className="w-8 h-8 text-purple-600 mb-2" />
              <p className="font-bold text-gray-800">8 países</p>
              <span className="text-sm text-gray-600">y 2 idiomas</span>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <Calendar className="w-8 h-8 text-red-600 mb-2" />
              <p className="font-bold text-gray-800">40 clínicas</p>
              <span className="text-sm text-gray-600">cada año</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
