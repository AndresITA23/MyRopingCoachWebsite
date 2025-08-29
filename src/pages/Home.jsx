import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../components/Button";

import AboutAldoSection from "../components/Home/AboutAldoSection";

import MethodSection from "../components/Home/MethodSection";

import ClinicsSection from "../components/Home/ClinicsSection";

import ScheduleSection from "../components/Home/ScheduleSection";

import TestimonialsSection from "../components/Home/TestimonialsSection";

import InstagramSection from "../components/InstagramSection";

import ContactSection from "../components/Home/ContactSection";

import SponsorsCarousel from "../components/SponsorsCarousel";

//Hero Images
import Hero1 from "../assets/images/hero1.webp";
import Hero2 from "../assets/images/hero2.jpg";
import Hero3 from "../assets/images/hero3.webp";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const carouselImages = [Hero1, Hero2, Hero3];

  return (
    <div>
      {/* Section 1: Carousel */}
      <div
        className="bg-white"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        data-aos-delay="300"
      >
        <ImageCarousel
          images={carouselImages}
          slideHeight="h-screen"
          customSwiperStyles="rounded-lg"
          customImgSwiperStyles="w-full object-cover rounded-lg filter brightness-75"
          effect="fade"
          showOverlay={true}
        />
      </div>

      {/* Section2: AboutAldo */}
      <AboutAldoSection />

      {/* Section 3: Method Section */}
      <MethodSection />

      {/* Section 4: Clinics */}
      <ClinicsSection />

      {/* Section 5: ScheduleSection */}
      <ScheduleSection />

      {/* Section 6: Testimonials */}
      <TestimonialsSection />

      {/* Sectiom 7: Instagram */}
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-md">
          Instagram
        </h2>
        <InstagramSection />
      </div>

      {/* Section 8: Contact */}
      <ContactSection />

      {/* Section 9: Sponsors section */}
      <SponsorsCarousel />

      <Footer />
    </div>
  );
};

export default Home;
