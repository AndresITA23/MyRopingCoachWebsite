import { useState, useRef, useEffect } from 'react';

const HelpTooltip = ({ children, content, position = 'right' }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  // Cerrar tooltip al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Posiciones del tooltip
  const positionClasses = {
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2'
  };

  return (
    <div className="relative inline-block" ref={tooltipRef}>
      <button
        type="button"
        onClick={() => setShowTooltip(!showTooltip)}
        className="text-blue-500 hover:text-blue-700 focus:outline-none"
        aria-label="Mostrar ayuda"
        aria-expanded={showTooltip}
        aria-controls="tooltip-content"
      >
        <i className="bx bx-info-circle text-sm align-middle" />
      </button>
      
      {showTooltip && (
        <div
          id="tooltip-content"
          role="tooltip"
          className={`absolute ${positionClasses[position]} w-48 bg-white border border-gray-200 p-3 rounded-lg shadow-lg text-sm z-50`}
        >
          {content}
          {/* Triángulo indicador */}
          <div className="absolute w-2 h-2 bg-white transform rotate-45 -translate-x-1/2 -translate-y-1/2 border-t border-l border-gray-200" 
               style={{
                 left: position === 'right' ? '-4px' : '50%',
                 top: position === 'bottom' ? '-4px' : position === 'top' ? 'calc(100% + 4px)' : '50%'
               }} />
        </div>
      )}
    </div>
  );
};

export default HelpTooltip;