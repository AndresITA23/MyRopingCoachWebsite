import React, { useState } from "react";
import Modal from "../../components/Modal";
import MinorsReleaseForm from "../../components/forms/MinorsReleaseForm";
import HSMembershipForm from "../../components/forms/HSMembershipForm";

const AfiliacionNhsra = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [selectedForm, setSelectedForm] = useState(null);

  const minorsReleasePDF = 'https://firebasestorage.googleapis.com/v0/b/mxhsra.firebasestorage.app/o/documentos%2Fnhsra%2Fformatos%2FMinorsRelease2025.pdf?alt=media&token=ed15242c-8a45-4bf0-9649-210b819a74f7'
 

  const openModal = (formName) => {
    switch (formName) {
      case "minors":
        setModalTitle("Formato de permiso para menores");
        setSelectedForm(
          <MinorsReleaseForm onClose={() => setIsModalOpen(false)} />
        );
        break;
      case "hs":
        setModalTitle("Membresía High School (juvenil mayor)");
        setSelectedForm(
          <HSMembershipForm onClose={() => setIsModalOpen(false)} />
        );
        break;
      default:
        return;
    }
    setIsModalOpen(true);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Proceso de afiliación NHSRA (Juvenil mayor)
      </h1>

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-calendar-alt text-red-600 text-2xl"></i>
          Criterios de edad
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600 mb-4">
            Consulta la categoría correspondiente según tu edad:
          </p>

          {/* Contenedor de la imagen de la tabla */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <img
              src="/src/assets/images/tablaEdad.jpg"
              alt="Tabla de categorías por edad"
              className="w-full md:w-1/2 h-auto mx-auto max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* Paso 1 - Formato de Afiliación */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-file text-blue-600 text-2xl"></i>
          Paso 1: Llenar formato de afiliación
        </h2>

        <div className="space-y-4">
        <p className="text-gray-600">
            Descarga, llena y firma este formato <strong>correspondiente a NHSRA (juvenil mayor)</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-blue-100 text-blue-800 px-6 py-3 rounded-md hover:bg-blue-200 transition flex items-center gap-2"
              onClick={() => openModal("hs")}
            >
              <i className="bx bx-cloud-download text-xl"></i>
              NHSRA (Auto-llenado)
            </button>

            <a
              href="/pdf/afiliacion-vacio.pdf"
              download
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition flex items-center gap-2"
            >
              <i className="bx bx-file-blank text-xl"></i>
              O descargar y llenar manualmente
            </a>
          </div>
        </div>
      </section>

      {/* Paso 2 - Formato para Menores */}

      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-file text-purple-600 text-2xl"></i>
          Paso 2: LLenar formato para menores
        </h2>

        <div className="space-y-4">
          <p className="text-gray-600">
            Descarga, llena y firma este formato <strong>aunque seas mayor de edad</strong>:
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="bg-green-100 text-green-800 px-6 py-3 rounded-md hover:bg-green-200 transition flex items-center gap-2"
              onClick={() => openModal("minors")}
            >
              <i className="bx bx-cloud-download text-xl"></i>
              Llenar automaticamente
            </button>
            
            <a
              href={minorsReleasePDF}
              download
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition flex items-center gap-2"
            >
              <i className="bx bx-file-blank text-xl"></i>
              O descargar y llenar manualmente
            </a>
          </div>
        </div>
      </section>

      {/* Documentos Personales */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-id-card text-orange-600 text-2xl"></i>
          Paso 3: Recopilar Documentos Requeridos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* CURP */}
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <i className="bx bx-link-external text-blue-500"></i>
              CURP
            </h3>
            <a
              href="https://www.gob.mx/curp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline flex items-center gap-1"
            >
              Obtén tu CURP aquí
              <i className="bx bx-up-arrow-alt text-sm"></i>
            </a>
          </div>

          {/* Comprobante de Estudios */}
          <div className="space-y-2">
            <h3 className="font-semibold flex items-center gap-2">
              <i className="bx bx-image-alt text-green-500"></i>
              Comprobante de estudios
            </h3>
            <button
              className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
              onClick={() => {
                /* Lógica para mostrar modal con ejemplo */
              }}
            >
              Ver ejemplo requerido
              <i className="bx bx-image-add text-xl"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Paso 4 - Pago */}
      <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-credit-card text-green-600 text-2xl"></i>
          Paso 4: Realizar pago a través de tu asociación
        </h2>

        <div className="bg-yellow-50 p-4 rounded-md">
          <p className="text-yellow-800">
            <i className="bx bx-time-five mr-2"></i>
            🚧 Sección en construcción
          </p>
        </div>
      </section>

      {/* Paso Final - Subir documentacion */}
            <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <i className="bx bx-cloud-upload text-blue-600 text-2xl"></i>
          Paso Final: Subir la documentación
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
          Se deberá subir los documentos <strong>ESCANEADOS, FIRMADOS Y EN PDF</strong> (No se reciben imágenes o PDF no escaneados correctamente).
          </p>
        </div>
      
      </section>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {selectedForm}
      </Modal>
    </div>
  );
};

export default AfiliacionNhsra;
