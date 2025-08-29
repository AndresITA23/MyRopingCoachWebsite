import React, {useEffect} from "react";
import { Outlet, useLocation} from "react-router-dom";
import HeroImage from "../../components/HeroImage";
import Footer from "../../components/Footer";

const LayoutClinics = () => {
  const location = useLocation();

  let heroTitle = "Clinicas";
  if (location.pathname.includes("/performance")) {
    heroTitle = "Performance – Mejora tu técnica";
  } else if (location.pathname.includes("/fundamentals")) {
    heroTitle = "Fundamentals – Construye bases sólidas";
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-screen flex flex-col">
      {/* <HeroImage
        imageUrl="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=800"
        title={heroTitle}
        textPosition="center"
      /> */}
      <div className="w-full mx-auto px-4 sm:px-8 py-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutClinics;
