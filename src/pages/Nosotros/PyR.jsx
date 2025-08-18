import { useState } from "react";

const PyR = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
  {
    id: 1,
    question: "¿Quién es Aldo Garibay?",
    answer: `
      <p>Aldo Garibay es un coach internacional de Team Roping certificado por la AQHA (ID 4363499) y creador del método <strong>My Roping Coach</strong>.</p>
      <p>Con más de 30 años de experiencia como competidor y 20 como entrenador, ha ayudado a más de 5,000 alumnos en 8 países y en 2 idiomas, impartiendo alrededor de 40 clínicas por año.</p>
    `,
  },
  {
    id: 2,
    question: "¿Qué es My Roping Coach?",
    answer: `
      <p>Es un método único para competir mejor, sin cambiar tu esencia, enfocado en dos ejes:</p>
      <ul class="list-disc pl-5">
        <li><strong>Monta:</strong> Maniobras de cabeceros y pateros divididas en 4 bases por lado para identificar y reemplazar hábitos que limitan tu velocidad o efectividad.</li>
        <li><strong>Mente:</strong> Plan mental personalizado para mantener la constancia en práctica y competencia.</li>
      </ul>
    `,
  },
  {
    id: 3,
    question: "¿Cuándo y dónde se realizan las clínicas?",
    answer: `
      <p>Las clínicas tienen una duración de 2 o 3 días, normalmente en fines de semana, aunque también pueden realizarse entre semana si es necesario.</p>
      <p>Se han impartido en Estados Unidos, Puerto Rico, Panamá, Costa Rica, República Dominicana, Colombia, Ecuador y México, en inglés y español.</p>
    `,
  },
  {
    id: 4,
    question: "¿Por qué funciona este método?",
    answer: `
      <p>Aldo no nació con facilidad para el deporte, pero encontró un método técnico y mental que lo llevó de ser hándicap 3 a lograr 11 campeonatos nacionales, 3 camionetas, 6 remolques, más de 30 monturas y 150+ hebillas.</p>
      <p>Ahora su misión es acortar el camino para que los alumnos alcancen sus metas mucho antes.</p>
    `,
  },
  {
    id: 5,
    question: "¿Qué tipos de clínicas ofrecen?",
    answer: `
      <ul class="list-disc pl-5">
        <li><strong>Performance:</strong> Para competidores activos que quieren mejorar sin cambiar su estilo. Resultados rápidos, análisis en video y drone, y medición de más de 120 variables.</li>
        <li><strong>Fundamentals:</strong> Para quienes quieren fortalecer la técnica antes de competir. Uso de espejos y grabaciones, postura correcta y pasos sencillos para un lazo sólido.</li>
      </ul>
    `,
  },
];


  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Título estilo FAQ */}
      <h2 className="text-3xl font-bold mb-6">PREGUNTAS FRECUENTES</h2>

      {/* Subtítulo PRODUCT INFO */}
      <h3 className="text-lg font-bold text-yellow-600 mb-2">PRODUCT INFO</h3>

      <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
        {faqs.map((faq, index) => (
          <div key={faq.id}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-4 flex justify-between items-center"
            >
              <span className="text-base font-bold uppercase text-left">
                {faq.question}
              </span>
              <span className="text-2xl font-light">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 text-gray-700 ${
                activeIndex === index ? "max-h-96 pb-4" : "max-h-0"
              }`}
            >
              <div
                className="text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PyR;
