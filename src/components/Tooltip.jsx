import React, { useEffect, useRef } from "react";

const Tooltip = ({ 
  content, 
  isVisible, 
  title,
  x = 0, 
  y = 0,
  onClose,
  children
}) => {
  const tooltipRef = useRef(null);

  // Manejar clics fuera del tooltip
  useEffect(() => {
    if (!isVisible) return;

    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        onClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  // Detectar si es un dispositivo móvil
  const isMobile = /iPad|iPhone|iPod/.test(navigator.userAgent) || window.innerWidth <= 1024;

  // Ajustar posición para evitar que se salga en móviles
  const adjustedX = isMobile ? "50%" : `${x}px`;
  const adjustedY = isMobile ? "50%" : `${y}px`;

  return (
    <div 
      ref={tooltipRef}
      className={`${
        isMobile ? "fixed" : "absolute"
      } z-50 transition-all bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 p-4 max-w-xs`} 
      style={{
        left: adjustedX,
        top: adjustedY,
        transform: isMobile ? "translate(-50%, -50%)" : "translate(-50%, -100%)"
      }}
    >
      <button 
        onClick={onClose}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        aria-label="Cerrar tooltip"
      >
        ×
      </button>
      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="text-gray-600">{content}</div>
        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

export default Tooltip;
