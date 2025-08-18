import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

import LayoutNosotros from "./pages/layouts/LayoutNosotros";
import Nosotros from "./pages/Nosotros/Nosotros";
import BeneficiosLogros from "./pages/Nosotros/BeneficiosLogros";
import PyR from "./pages/Nosotros/PyR";
import FAQ from "./pages/FAQ";

import Reina from "./pages/Reina";

import LayoutContacta from "./pages/layouts/LayoutContacta";
import Contacta from "./pages/Contacta/Contacta";
import Equipo from "./pages/Contacta/Equipo";

import LayoutAboutMe from "./pages/layouts/LayoutAboutMe";
import AboutMe from "./pages/AboutMe";

import LayoutClinics from "./pages/layouts/LayoutClinics";
import Performance from "./pages/Clinics/Performance";
import Fundamentals from "./pages/Clinics/Fundamentals";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/nosotros" element={<LayoutNosotros />}>
              <Route index element={<Nosotros />} />
              <Route path="/nosotros/beneficios" element={<BeneficiosLogros />} />
              <Route path="/nosotros/dudas" element={<PyR />} />
            </Route>

            <Route path="/reina" element={<Reina />} />
            <Route path="/faq" element={<FAQ />} />
            
            <Route path="/contacta" element={<LayoutContacta />}>
              <Route index element={<Contacta />} />
              <Route path="/contacta/equipo" element={<Equipo />} />
            </Route>

            <Route path="/aboutme" element={<LayoutAboutMe />}>
              <Route index element={<AboutMe />} />
              <Route path="/aboutme/equipo" element={<Equipo />} />
            </Route>

            <Route path="/clinics" element={<LayoutClinics />}>
              <Route path="/clinics/performance" element={<Performance />} />
              <Route path="/clinics/fundamentals" element={<Fundamentals />} />
            </Route>
            
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
