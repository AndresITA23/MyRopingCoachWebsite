import React, { useState } from "react";

const LanguageSwitch = () => {
  const [isEnglish, setIsEnglish] = useState(false);

  return (
    <label className="inline-flex items-center relative cursor-pointer">
      <input
        type="checkbox"
        checked={isEnglish}
        onChange={() => setIsEnglish(!isEnglish)}
        className="peer hidden"
      />
      {/* Contenedor del switch - más pequeño */}
      <div className="relative w-[70px] h-[25px] bg-gray-200 rounded-full shadow-inner">
        {/* Texto ES */}
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-black peer-checked:text-gray-400">
          ES
        </span>
        {/* Texto EN */}
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] font-semibold text-gray-400 peer-checked:text-black">
          EN
        </span>

        {/* Círculo con bandera - más pequeño */}
        <div
          className={`absolute top-[1.5px] left-[1.5px] w-[22px] h-[22px] rounded-full bg-cover bg-center shadow-md transition-all duration-300 ${
            isEnglish ? "translate-x-[45px]" : "translate-x-0"
          }`}
          style={{
            backgroundImage: isEnglish
              ? "url('https://flagcdn.com/us.svg')"
              : "url('https://flagcdn.com/mx.svg')",
          }}
        ></div>
      </div>
    </label>
  );
};

export default LanguageSwitch;