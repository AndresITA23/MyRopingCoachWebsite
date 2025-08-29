import React from "react";

const TestimonialsCard = ({ name, role, text }) => {
  return (
    <div className="relative flex flex-col justify-between w-full max-w-sm p-8 rounded-2xl border border-gray-300 overflow-hidden leading-relaxed transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[8px_8px_0px_#FFD700] hover:border-[#FFD700] hover:-translate-x-2 hover:-translate-y-2">
      <div className="flex flex-col justify-between h-full gap-4 text-black transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
        
        {/* Header */}
        <div className="header">
          <strong className="text-lg">{name}</strong>
          <p className="opacity-80 text-base">{role}</p>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-start gap-4">
          {/* Icon */}
          <svg viewBox="0 0 24 24" className="w-16 h-16">
            <path
              fill="#FFD700"
              d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
            />
          </svg>

          {/* Texto */}
          <p className="opacity-80 text-base break-words">{text}</p>

          {/* Botón */}
          <button className="relative font-bold text-base text-black overflow-hidden group">
            <span className="relative z-10">Ver más</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#FFD700] scale-x-0 origin-right transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
