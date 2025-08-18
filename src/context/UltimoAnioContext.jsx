// Implementar un contexto global o estado compartido
import { createContext, useContext, useEffect, useState } from 'react';
import { storage } from '../firebase';
import { ref, listAll } from 'firebase/storage';

const UltimoAnioContext = createContext();

export const UltimoAnioProvider = ({ children }) => {
  const [ultimoAnio, setUltimoAnio] = useState(null);

  useEffect(() => {
    const fetchUltimoAnio = async () => {
      try {
        const resultadosRef = ref(storage, 'documentos/nhsra/resultados');
        const anios = await listAll(resultadosRef);
        const aniosNumericos = anios.prefixes.map(p => parseInt(p.name));
        setUltimoAnio(Math.max(...aniosNumericos));
      } catch (error) {
        console.error("Error obteniendo último año:", error);
      }
    };
    
    fetchUltimoAnio();
  }, []);

  return (
    <UltimoAnioContext.Provider value={ultimoAnio}>
      {children}
    </UltimoAnioContext.Provider>
  );
};

export const useUltimoAnio = () => useContext(UltimoAnioContext);