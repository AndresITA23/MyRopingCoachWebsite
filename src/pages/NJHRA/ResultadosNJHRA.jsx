import { useState, useEffect } from "react";
import { storage } from "../../firebase";
import { ref, listAll, getDownloadURL } from "firebase/storage";

const ResultadosActualesNJHRA = () => {
  const [ultimoResultado, setUltimoResultado] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResultados = async () => {
      try {
        const resultadosRef = ref(storage, "documentos/njhra/resultados");
        const años = await listAll(resultadosRef);

        const añosOrdenados = años.prefixes
          .map((item) => parseInt(item.name))
          .sort((a, b) => b - a);

        if (añosOrdenados.length > 0) {
          const ultimoAño = añosOrdenados[0];
          const resultadoRef = ref(
            storage,
            `documentos/njhra/resultados/${ultimoAño}/resultados.pdf`
          );
          const url = await getDownloadURL(resultadoRef);

          setUltimoResultado({
            año: ultimoAño,
            url: url,
          });
        }
      } catch (error) {
        console.error("Error cargando resultados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResultados();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">
        Resultados {ultimoResultado?.año || "Actuales"}
      </h1>

      {loading ? (
        <p>Cargando resultados...</p>
      ) : ultimoResultado ? (
        <div className="max-w-4xl mx-auto">
          <iframe
            src={ultimoResultado.url}
            className="w-full h-screen rounded-lg shadow-lg border"
            title={`Resultados ${ultimoResultado.año}`}
          />
        </div>
      ) : (
        <p>No hay resultados disponibles</p>
      )}
    </div>
  );
};

export default ResultadosActualesNJHRA;
