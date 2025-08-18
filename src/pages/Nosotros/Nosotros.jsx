import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nosotros = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeTab, setActiveTab] = useState("mission");

  const tabs = [
    {
      id: "mission",
      title: "Misión",
      // Icono de Boxicons para misión
      icon: <i className="bx bx-trophy text-3xl mr-2"></i>,
      text: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Promover el deporte del rodeo con ética deportiva</li>
          <li>
            Ofrecer oportunidades educativas mediante becas universitarias
          </li>
          <li>Fortalecer la cohesión familiar y social</li>
        </ul>
      ),
      image:
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Fondo claro en tonos azules
      bgColor: "bg-blue-50",
    },
    {
      id: "vision",
      title: "Visión",
      // Icono de Boxicons para visión
      icon: <i className="bx bxs-binoculars text-3xl mr-2"></i>,
      text: (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Una asociación rectora y promotora del Rodeo, con alto nivel
            deportivo, imagen y reconocimiento a nivel nacional e internacional;
            solvente, atractiva y profesional.
          </li>
        </ul>
      ),
      image: "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Fondo claro en tonos verdes

    },
    {
      id: "values",
      title: "Valores",
      // Icono de Boxicons para valores
      icon: <i className="bx bx-donate-heart text-3xl mr-2"></i>,
      text: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-2">Tradición</h4>
            <p className="text-sm text-gray-700">
              Preservación de técnicas ecuestres históricas
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-2">Educación</h4>
            <p className="text-sm text-gray-700">
              Becas hasta $100,000 USD para universidades
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h4 className="font-bold text-red-700 mb-2">Comunidad</h4>
            <p className="text-sm text-gray-700">
              +1,800 rodeos anuales con enfoque familiar
            </p>
          </div>
        </div>
      ),
      image:
        "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      // Fondo claro en tonos rojos
      bgColor: "bg-red-50",
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-4">
      {/* Encabezado */}
      {/* <h1
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
        data-aos="fade-up"
      >
        Sobre nosotros
      </h1> */}

      {/* Nuestra Historia */}
      <section
        className="mb-12 bg-gray-50 p-6 rounded-lg shadow-md"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-200 pb-2">
          Nuestra Historia
        </h2>
        <p className="text-gray-700 leading-relaxed">
          La NHSRA se estableció en 1947 en Texas como una iniciativa del
          educador Claude Mullins para promover el rodeo juvenil. En México,
          operamos bajo el convenio con la Federación Mexicana de Rodeo (FMR),
          siendo el Ing. Aldo Garibay Olachea nuestro vocal encargado.
        </p>
      </section>

      {/* Tabs: Misión, Visión y Valores */}
      <div className="mb-12" data-aos="fade-up">
        {/* Botones de pestañas */}
        <div className="flex justify-center mb-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-2xl px-6 py-2 mx-2 font-bold rounded-full transition-colors focus:outline-none flex items-center ${
                  isActive
                    ? "bg-blue-800 text-white"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <i
                  className={`${tab.icon.props.className} ${
                    isActive ? "text-white" : "text-gray-400"
                  }`}
                ></i>
                {tab.title}
              </button>
            );
          })}
        </div>
        {/* Contenido de la pestaña activa */}
        <div
          className={`flex flex-col md:flex-row items-center p-6 rounded-lg shadow-md ${currentTab.bgColor}`}
        >
          {/* Texto / Contenido */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4 flex items-center">
              {currentTab.icon}
              {currentTab.title}
            </h2>
            <div className="text-lg">{currentTab.text}</div>
          </div>
          {/* Imagen */}
          <div className="md:w-1/2 mt-6 md:mt-0 md:pl-8">
            <img
              src={currentTab.image}
              alt={currentTab.title}
              className="rounded-lg w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Requisitos de Membresía */}
      <section
        className="bg-orange-50 p-6 rounded-lg shadow-md"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-orange-900 mb-4">
          ¿Cómo Participar?
        </h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Estar matriculado escolarmente</li>
          <li>Afiliación a la FMR mediante tu asociación estatal</li>
          <li>Completar formularios y proceso de membresía NJHRA/NHSRA</li>
          <li>Participar en al menos 2 rodeos estatales por temporada</li>
        </ul>
      </section>
    </div>
  );
};

export default Nosotros;
