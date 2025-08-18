import React, {useEffect} from "react";
import { Outlet, useLocation} from "react-router-dom";
import HeroImage from "../../components/HeroImage";
import Footer from "../../components/Footer";

const LayoutNosotros = () => {
  const location = useLocation();

  let heroTitle = "Sobre Nosotros";
  if (location.pathname.includes("/beneficios")) {
    heroTitle = "Beneficios y Logros";
  } else if (location.pathname.includes("/dudas")) {
    heroTitle = "Preguntas Frecuentes";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen flex flex-col">
      <HeroImage
        imageUrl="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=800"
        title={heroTitle}
        textPosition="center"
      />
      <div className="w-full mx-auto px-4 sm:px-8 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutNosotros;
