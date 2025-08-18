import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import LoaderContent from "../components/LoaderContent";
import AOS from "aos";
import "aos/dist/aos.css";

const Reina = () => {
  const [reinaActual, setReinaActual] = useState([]);
  const [reinasAnteriores, setReinasAnteriores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init(); // Inicializa AOS en este componente también por si acaso
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { reinaActual, reinasAnteriores } = await fetchReinas();
      setReinaActual(reinaActual);
      setReinasAnteriores(reinasAnteriores);
      setLoading(false);
    };

    fetchData();
  }, []);

  const fetchReinas = async () => {
    const querySnapshot = await getDocs(collection(db, "reinas"));
    let reinasArray = [];

    querySnapshot.forEach((doc) => {
      reinasArray.push({ id: doc.id, ...doc.data() });
    });

    reinasArray.sort((a, b) => b.id - a.id);

    const reinaActual = reinasArray[0];
    const reinasAnteriores = reinasArray.slice(1);

    return { reinaActual, reinasAnteriores };
  };

  return (
    <div className="h-screen flex flex-col">
      <HeroImage
        imageUrl="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=800"
        title="Reina"
      />

      {loading ? (
        <div className="flex flex-col items-center justify-center mb-10">
          <p className="text-center text-lg mt-4 mb-4">
            Cargando información...
          </p>
          <LoaderContent />
        </div>
      ) : (
        <div className="w-full mx-auto px-4 sm:px-8 py-8">
          {/* Sección Reina Actual */}
          <div className=" mx-auto mb-16" data-aos="fade-up">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 border-b-2 border-gray-400 pb-2">
              Miss Rodeo México {reinaActual.id}-{parseInt(reinaActual.id) + 1}
            </h1>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <img
                src={reinaActual.foto}
                alt={"Reina actual"}
                className="w-full md:w-1/2 h-auto object-cover rounded-lg shadow-lg border-4 border-blue-900"
                data-aos="fade-right"
              />

              <div
                className="w-full md:w-1/2 space-y-4 text-gray-800"
                data-aos="fade-left"
              >
                <h2 className="text-2xl font-bold text-gray-900">
                  {reinaActual.nombre}
                </h2>
                <p className="text-lg font-semibold text-gray-600">
                  📌 {reinaActual.ciudad}
                </p>


                <div className="space-y-2">
                  <p className="font-medium text-blue-900">Nota personal:</p>
                  <p>{reinaActual.notaPersonal}</p>

                  <p className="font-medium text-blue-900">Dato curioso:</p>
                  <p>✨ {reinaActual.datoCurioso}</p>

                  <p className="font-medium text-blue-900 mt-4">
                    Momento favorito en NHSRA México:
                  </p>
                  <p>🏆 {reinaActual.momentoFavorito}</p>

                  <p className="font-medium text-blue-900 mt-4">
                    Frase favorita:
                  </p>
                  <p className="italic">"{reinaActual.frase}"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección Reinas anteriores */}
          <div className="max-w-4xl mx-auto" data-aos="fade-up">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 border-b-2 border-gray-400 pb-2">
              Miss Rodeo Anteriores
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {reinasAnteriores.map((reina, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={reina.foto}
                    alt={`Reina ${reina.nombre}`}
                    className="w-full h-80 object-cover rounded-lg shadow-md border-2 border-blue-800 mb-2 transition-transform duration-300 ease-in-out hover:transform hover:-translate-y-2 hover:shadow-lg"
                  />
                  <p className="font-semibold text-gray-700">
                    {reina.id}-{parseInt(reina.id) + 1}
                  </p>
                  <p className="text-gray-600">{reina.nombre}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Reina;
