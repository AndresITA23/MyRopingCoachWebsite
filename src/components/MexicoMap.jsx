import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import mexicoTopoJson from "../data/mexicoHigh.json";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Tooltip from "./Tooltip";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const MexicoMap = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [hoveredState, setHoveredState] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const [stateData, setStateData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const vocalesRef = collection(db, "vocales"); 
      const snapshot = await getDocs(vocalesRef);

      const data = {};
      snapshot.docs.forEach((doc) => {
        data[doc.id] = doc.data();
      });

      setStateData(data);
    };

    fetchData();
  }, []);

  // Colores personalizados
  const colorPalette = {
    default: "#E2E8F0",
    hover: "#63B3ED",
    selected: "#4299E1",
    border: "#1A365D",
  };

  const handleStateHover = (geo, event) => {
    const rect = containerRef.current.getBoundingClientRect();
    setHoveredState(geo.properties.name);
    setTooltipPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleStateClick = (geo, event) => {
    const rect = containerRef.current.getBoundingClientRect();
    setSelectedState(geo.properties.name);
    setTooltipPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  // Memoize geography styles para mejor rendimiento
  const getGeographyStyle = (geo) => {
    const isSelected = geo.properties.name === selectedState;
    const isHovered = geo.properties.name === hoveredState;

    return {
      default: {
        fill: isSelected ? colorPalette.selected : colorPalette.default,
        stroke: colorPalette.border,
        strokeWidth: 0.5,
        outline: "none",
        transition: "all 250ms",
      },
      hover: {
        fill: colorPalette.hover,
        stroke: colorPalette.border,
        strokeWidth: 1,
        outline: "none",
      },
      pressed: {
        fill: colorPalette.selected,
        stroke: colorPalette.border,
        strokeWidth: 1,
        outline: "none",
      },
    };
  };

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white rounded-xl shadow-xl">
      <div className="mb-4 text-center">
        {selectedState ? (
          <h2 className="text-2xl font-bold text-gray-800">
            Estado:{" "}
            <span className="text-blue-600">{selectedState}</span>
          </h2>
        ) : (
          <p className="text-xl text-gray-600">Selecciona un estado en el mapa</p>
        )}
      </div>

      <div
        ref={containerRef}
        className="relative  rounded-lg overflow-hidden"
      >
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1000,
            center: [-102, 23],
            rotate: [4, 0, 0],
          }}
          width={800}
          height={600}
          viewBox="0 0 800 600"
        >
          <ZoomableGroup center={[-102, 23]} zoom={1.4}>
            <Geographies geography={mexicoTopoJson}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseMove={(e) => handleStateHover(geo, e)}
                    onMouseLeave={() => setHoveredState(null)}
                    onClick={(e) => handleStateClick(geo, e)}
                    style={getGeographyStyle(geo)}
                    tabIndex="0"
                    role="button"
                    aria-label={`Estado de ${geo.properties.name}`}
                    className="focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>

        {hoveredState && !selectedState && (
          <div
            className="absolute px-3 py-2 bg-white rounded-lg shadow-md text-sm border border-gray-200 pointer-events-none"
            style={{
              left: `${tooltipPosition.x + 15}px`,
              top: `${tooltipPosition.y - 15}px`,
            }}
          >
            {hoveredState}
          </div>
        )}

        <Tooltip
          isVisible={!!selectedState}
          title={selectedState}
          x={tooltipPosition.x}
          y={tooltipPosition.y}
          onClose={() => setSelectedState(null)}
          content={
            selectedState && stateData[selectedState] ? (
              <div className="space-y-1">
                <p>
                  <strong>Responsable:</strong>{" "}
                  {stateData[selectedState].nombreVocal}
                </p>
                <p>
                  <strong>Teléfono:</strong>{" "}
                  <a
                    href={`tel:${stateData[selectedState].telefono}`}
                    className="text-blue-500 underline"
                  >
                    {stateData[selectedState].telefono}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${stateData[selectedState].email}`}
                    className="text-blue-500 underline"
                  >
                    {stateData[selectedState].email}
                  </a>
                </p>
              </div>
            ) : (
              <p>Cargando información...</p>
            )
          }
        >
          <div className="flex gap-2 mt-3">
            <button
              className="px-3 py-1.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => console.log("Contactar a", selectedState)}
            >
              Contactar
            </button>
            <button
              className="px-3 py-1.5 text-sm bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => setSelectedState(null)}
            >
              Cerrar
            </button>
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default MexicoMap;
