import React from "react";

const roughstockDisciplines = [
  {
    name: "Jineteo con Pretal",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 8 segundos sobre el torete para recibir puntuación</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el caballo y 50% el jinete</li>
        <li>El jinete tener las espuelas en la punta de la paleta cuando las manos del animal peguen en la tierra en el primer reparo fuera del cajón</li>
        <li>No se puede tocar el torete con la mano libre</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/fPNy4wdeh8w?si=C7DfniUeW4ggt1o2",
    pagina: 81,
  },
  {
    name: "Jineteo con Montura",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 6 segundos sobre el torete para recibir puntuación</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el caballo y 50% el jinete</li>
        <li>El jinete tener las espuelas en la punta de la paleta cuando las manos del animal peguen en la tierra en el primer reparo fuera del cajón</li>
        <li>No se puede tocar el torete con la mano libre</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/MLYU-Aw3dMs?si=41VY6tzaC7ttxdI4",
    pagina: 90,
  },
  {
    name: "Jineteo de Toros",
    description: (
      <ul className="list-disc ml-5">
        <li>El jinete debe de permanecer 8 segundos sobre el lomo del torete sujetado con una sola mano del pretal.</li>
        <li>La puntuación más alta gana</li>
        <li>La puntuación se basa 50% en el toro y 50% el jinete</li>
        <li>No se puede tocar el torete con la mano libre</li>

      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/Jnjxsw_VPd0?si=EMKEpJoCP66Ike4-",
    pagina: 97,
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
    videoUrl: "https://www.youtube.com/embed/i4r9XUsuDf8?si=UF7v7C6cMCyBQf9E",
    pagina: 66,
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
    videoUrl: "https://www.youtube.com/embed/fsPepUcpXxA?si=nMbRLh-7xqIW3YDj",
    pagina: 69,
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
    videoUrl: "https://www.youtube.com/embed/AMIiGXUsJXU?si=f87s913jvTqOJ5HP",
    pagina: 117,
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
    videoUrl: "https://www.youtube.com/embed/RPoo-_Amsy4?si=sHM5vgt-PmVsCce6",
    pagina: 111,
  },
  {
    name: "Achatada de novillos a pie",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>El competidor y novillo inician en el cajon o chute</li>
        <li>El competidor podrá derribar el novillo hasta que la nariz del novillo cruce la línea de arranque</li>
        <li>El tiempo para cuando el novillo está tirado de lado y las cuatro patas están en el aire</li>
        <li>10 segundos de penalización por romper la barrera</li>

      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/sjqV2gGSQFc?si=jb8gklOmCQZ4Z4HT",
    pagina: 103,
  },
  {
    name: "Amarre de chiva (Femenil/Varonil)",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>La chiva estará amarrada a una estaca con una soga de 10 pies</li>
        <li>Competidor y caballo deben pasar la linea de inicio</li>
        <li>El competidor debera desmontarse, derribar y amarrar la chiva de 3 patas</li>
        <li>El tiempo para cuando se levantan las manos</li>
        <li>El competidor se aleja e inicia un tiempo de protección de 6 segundos</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/o8OWtPCYhMU?si=FqKoJ3YZ7tYSUG7C",
    pagina: 77,
  },
  {
    name: "Lazo en falso (Femenil/Varonil)",
    description: (
      <ul className="list-disc ml-5">
        <li>El tiempo más rápido gana</li>
        <li>La soga va amarrada a la cabeza de la montura con un hilo</li>
        <li>La lazada debe entrar por la cabeza y la soga deberá soltarse de la montura estirándose puesta en el cuello del becerro</li>
        <li>El tiempo para cuando la soga se suelta de la montura</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/i6mcwiW-VJY?si=SEFUH90QdiPPCuIt",
    pagina: 74,
  },
  {
    name: "Lazo y listón",
    description: (
      <ul className="list-disc ml-5">
        <li>Disciplina mixta haciendo equipo 1 hombre y una mujer</li>
        <li>Uno sale montado a caballo (lazador), otro estará en la arena (corredor)</li>
        <li>El(la) lazador(a) deberá lazar el becerro, desmontarse y estar en contacto con el becerro en el momento que el(la) corredor(a) retire el listón o la pareja será descalificada</li>
        <li>El tiempo para cuando el(la) corredor(a) cruce la linea de meta con el listón en su mano y entregarlo al juez</li>
        <li>10 segundos de penalización por romper la barrera</li>
      </ul>
    ),
    videoUrl: "https://www.youtube.com/embed/SuBspOx3S7k?si=glPPp1yA0GjCSJdG",
    pagina: 74,
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
