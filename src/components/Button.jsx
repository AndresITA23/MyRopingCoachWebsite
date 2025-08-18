import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg 
      before:absolute before:top-0 before:-left-full before:w-full before:h-full 
      before:bg-gradient-to-r before:from-[#FFD700] before:to-[#FFA500]  /* dorado → anaranjado */
      before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl 
      hover:before:left-0 text-[#fff]"
    >
      {title}
    </button>
  );
};

export default Button;
