import React from "react";

const roughstockDisciplines = [
  {
    name: "Caballos con Pretal",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 8 segundos sobre el caballo para recibir puntuación</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el caballo y 50% el jinete</li>
        <li>El jinete tener las espuelas en la punta de la paleta cuando las manos del animal peguen en la tierra en el primer reparo fuera del cajón</li>
        <li>No se puede tocar el caballo con la mano libre</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/L1y6F77pt8U?si=vlZMLhdaytKV_K94",
    pagina: 77,
  },
  {
    name: "Caballos con montura",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 8 segundos sobre el caballo para recibir puntuación</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el caballo y 50% el jinete</li>
        <li>El jinete tener las espuelas en la punta de la paleta cuando las manos del animal peguen en la tierra en el primer reparo fuera del cajón</li>
        <li>No se puede tocar el caballo con la mano libre</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/Pk0TxC6E8PI?si=nFL_qg9OqeQ86WGb",
    pagina: 86,
  },
  {
    name: "Jineteo de Toros",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 8 segundos sobre el lomo del toro sujetado con una sola mano del pretal.</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el toro y 50% el jinete</li>
        <li>No se puede tocar el toro con la mano libre</li>

      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/ZcR2vO7X3wA?si=CyzDdbovSXHCi9eV",
    pagina: 94,
  },
];

const timedDisciplines = [
  {
    name: "Carrera de barriles",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>Conformado por un binomio jinete/caballo</li>
        <li>Se debe formar un patrón en forma de trebol empezando con cualquier barril</li>
        <li>5 segundos de penalización por barril derribado</li>
        <li>El tiempo inicia y termina cuando el caballo cruza la linea del timer</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/r5WHTECmphE?si=SvMrzOeX2OsNsV3c",
    pagina: 63,
  },
  {
    name: "Carrera entre polos",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>Conformado por un binomio jinete/caballo</li>
        <li>Se debe hacer un zig zag a través de los 6 polos</li>
        <li>5 segundos de penalización por polo derribado</li>
        <li>El tiempo inicia y termina cuando el caballo cruza la linea del timer</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/IWtpyDhnbM8?si=zxqchb4mVSumKqeO",
    pagina: 66,
  },
  {
    name: "Lazo por parejas",
    description: (
      <ul className="list-disc ml-5">
        <li>La pareja puede estar conformada por ambos generos</li>
        <li>El tiempo más rápido gana</li>
        <li>El tiempo para cuando el cabecero y pialador tienen caballos de punta y sogas tensas</li>
        <li>5 segundos de penalización por lazar 1 pata</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/EYiAjE9s6WY?si=SvYRYsstCXTVjkFY",
    pagina: 111,
  },
  {
    name: "Lazo de becerros",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>El vaquero debe lazar el becerro, desmontarse, derribar y amarrar el becerro de 3 patas</li>
        <li>El tiempo para cuando el vaquero levanta las manos</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/F6-J9FJZOMU?si=Z57z66cOWC8U4K8p",
    pagina: 106,
  },
  {
    name: "Achatada de novillos",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>El hazer (ayudante) mantiene al novillo en una linea recta</li>
        <li>El vaquero debe desmontarse, tomar al novillo, detenerlo y/o voltearlo de dirección antes de derribarlo</li>
        <li>El tiempo para cuando el novillo está tirado de lado y las cuatro patas están en el aire.</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/o69JKzWSCL8?si=KXCO7dgbGIFiDcoD",
    pagina: 97,
  },
  {
    name: "Amarre de chiva",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>La chiva esta amarrada a una estaca con una soga de 10 pies</li>
        <li>Vaquera y caballo deben pasar la linea de inicio</li>
        <li>La vaquera debera desmontarse, derribar y amarrar la chiva de 3 patas</li>
        <li>El tiempo para cuando se levantan las manos</li>
        <li>La vaquera se aleja e inicia un tiempo de protección de 6 segundos</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/zk4LNVYOBus?si=hq_g0GWgrpBSw6Y7",
    pagina: 74,
  },
  {
    name: "Lazo en falso",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>La soga va amarrada a la cabeza de la montura con un hilo</li>
        <li>La lazada debe entrar por la cabeza y la soga deberá soltarse de la montura estirándose puesta en el cuello del becerro</li>
        <li>El tiempo para cuando la soga se suelta de la montura</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/xDANqQnh2UQ?si=w22KcTI8nMwzJMrY",
    pagina: 69,
  },
];

const DisciplinasSection = () => {
  return (
    <section>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Disciplinas de jineteo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {roughstockDisciplines.map((disciplina, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {disciplina.name}
                </h3>
                <div className="text-gray-600 mb-4">
                  {disciplina.description}
                </div>
                <p className="text-blue-400 mb-4 hover:text-blue-700">
                  <a href={'https://nhsra.com/wp-content/uploads/2024/08/2024-26-NHSRA-Rulebook.pdf'} target="_blank" rel="noopener noreferrer">
                    Para la lista completa de las reglas, ver el reglamento, (pág. {disciplina.pagina})
                  </a>
                </p>
                <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
                  <iframe
                    src={disciplina.videoUrl}
                    title={disciplina.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
      </div>
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6 mt-8">
          Disciplinas de tiempo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {timedDisciplines.map((disciplina, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  {disciplina.name}
                </h3>
                <div className="text-gray-600 mb-4">
                  {disciplina.description}
                </div>
                <p className="text-blue-400 mb-4 hover:text-blue-700">
                  <a href={'https://nhsra.com/wp-content/uploads/2024/08/2024-26-NHSRA-Rulebook.pdf'} target="_blank" rel="noopener noreferrer">
                    Para la lista completa de las reglas, ver el reglamento, (pág. {disciplina.pagina})
                  </a>
                </p>
                <div className="relative pb-[56.25%] overflow-hidden rounded-lg">
                  <iframe
                    src={disciplina.videoUrl}
                    title={disciplina.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
    
  );
};

export default DisciplinasSection;
