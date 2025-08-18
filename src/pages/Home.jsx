import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageCarousel from "../components/Carousel";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import HomeGallery from "../components/HomeGallery";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import InstagramSection from "../components/InstagramSection";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const carouselImages = [
    "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const cardImages = [
    "https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/707915/pexels-photo-707915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const ligasLogos = [
    "https://prorodeo.sidearmsports.com/images/2019/6/21//new_logo_square.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Logo_de_la_CONADE_%28sin_texto%29.svg/1084px-Logo_de_la_CONADE_%28sin_texto%29.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHgjaMx8Xpo7qw7adEwLWRyZvUQTsG-SwAUg&s",
    "https://nbha.com/wp-content/uploads/2019/03/NBHA_Logo_2018_Horizontal-v1.png",
  ];

  return (
    <div>
      {/* Sección 1: Carrusel */}
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

      {/* Sección 2: Introducción */}
      <div className="container mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-12">
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              ¿Quién soy?
            </h2>
            <p className="text-gray-700">
              Aldo Garibay — Coach internacional de Team Roping certificado por
              la AQHA y creador del método My Roping Coach.
            </p>
            <Link to="/aboutme">
              <Button title="Conóceme" /> {/* en lugar de "Más info" */}
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              ¿Qué es My Roping Coach?
            </h2>
            <p className="text-gray-700">
              Un método único para competir mejor, sin cambiar tu esencia.
              Enfocado en dos ejes: la monta y la mente.
            </p>
            <Link to="/whatis">
              <Button title="Descúbrelo" /> {/* más dinámico */}
            </Link>
          </div>

          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800">
              ¿Dónde?
            </h2>
            <p className="text-gray-700">
              He impartido clínicas en Estados Unidos, Puerto Rico, Panamá,
              Costa Rica, República Dominicana, Colombia, Ecuador y México, en
              inglés y español.
            </p>
            <Link to="/nhsra">
              <Button title="Ver lugares" /> {/* más orientado a la acción */}
            </Link>
          </div>
        </div>
      </div>

      {/* Sección 3: Why */}
      <div className="bg-gray-100 py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Cards con imágenes de entrenamientos */}
          <div className="w-3/4 mx-auto" data-aos="fade-right">
            <Cards images={cardImages} cardHeight="h-64 sm:h-80 md:h-96" />
          </div>

          {/* Texto de experiencia */}
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              Entrena con un método probado
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Con más de{" "}
              <span className="font-semibold">
                30 años de experiencia internacional{" "}
              </span>
              y más de{" "}
              <span className="font-semibold">
                20 años como coach certificado
              </span>
              , Aldo Garibay ha desarrollado el método
              <span className="font-semibold"> My Roping Coach</span>, diseñado
              para llevar tu rendimiento al siguiente nivel. Clínicas en{" "}
              <span className="font-semibold">dos idiomas</span>, con enfoque en
              fundamentos, estrategia y mentalidad competitiva.
            </p>
            <Link to="/whatis">
              <Button title="Descubre el método" />
            </Link>
          </div>
        </div>

        {/* Beneficios */}
        <div className="mt-16 text-center">
          <h2
            className="text-3xl font-semibold mb-6 text-gray-800"
            data-aos="fade-up"
          >
            Beneficios de Entrenar con My Roping Coach
          </h2>
          <ul className="max-w-4xl mx-auto text-lg list-disc list-inside space-y-3 text-gray-700">
            <li data-aos="fade-up" data-aos-delay="200">
              Aprendizaje con un{" "}
              <span className="font-semibold">coach certificado AQHA</span> (ID
              4363499).
            </li>
            <li data-aos="fade-up" data-aos-delay="300">
              Método probado con más de{" "}
              <span className="font-semibold">5,000 alumnos</span> en 8 países.
            </li>
            <li data-aos="fade-up" data-aos-delay="500">
              Enfoque integral en{" "}
              <span className="font-semibold">performance y fundamentals</span>.
            </li>
            <li data-aos="fade-up" data-aos-delay="600">
              Entrenamiento disponible en{" "}
              <span className="font-semibold">español e inglés</span>.
            </li>
          </ul>
        </div>
      </div>

      {/* Sección 4: Galeria */}
      {/* <div className="bg-white py-8 px-6 sm:px-8">
        <h2
          className="text-4xl md:text-5xl font-bold mb-2 text-gray-800"
          data-aos="fade-up"
        >
          Galeria
        </h2>
        <div data-aos="fade-in">
          <HomeGallery />
        </div>
      </div> */}

      {/* Sección 5: Contacta */}
      <div className="bg-white py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
          <div data-aos="fade-up" data-aos-duration="800">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
              Contacta
            </h2>
            <div className="space-y-4">
              <a
                href="mailto:nhsra@federacionmexicanaderodeo.org"
                className="text-lg md:text-xl text-gray-700 hover:text-blue-400 transition-colors break-words overflow-hidden"
              >
                <i className="bx bx-envelope text-2xl mr-2 align-middle" />
                myroping@
              </a>
              <a
                href="tel:+524423600333"
                className="text-lg md:text-xl text-gray-700 hover:text-blue-400 flex items-center transition-colors"
              >
                <i className="bx bx-phone text-2xl mr-2" />
                +52 442 360 0333
              </a>
              <div className="mt-4">
                <Link to="/contacta">
                  <Button title="Más info" />
                </Link>
              </div>
            </div>
          </div>
          <div
            className="flex justify-center items-center"
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="grid grid-cols-3 gap-4 max-w-5xl">
              <div
                className="rounded-xl overflow-hidden shadow-xl"
                data-aos="fade-up"
                data-aos-duration="600"
                data-aos-delay="300"
              >
                <img
                  src={cardImages[0]}
                  alt="Imagen 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden shadow-xl col-span-2"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                <img
                  src={cardImages[1]}
                  alt="Imagen 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="rounded-xl overflow-hidden shadow-2xl col-span-3"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="500"
              >
                <img
                  src={cardImages[0]}
                  alt="Imagen 4"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección 6: Testimonios */}
      {/* <div className="bg-white py-16 px-8">
        <h2 className="text-4xl font-semibold mb-4 text-center">Testimonios</h2>
        <blockquote className="max-w-3xl mx-auto text-lg italic text-gray-700">
          "La experiencia con la MXHSRA cambió mi vida. Aprendí mucho sobre mí
          mismo y encontré una comunidad que comparte mi pasión por el rodeo."
        </blockquote>
        <p className="text-right text-gray-500 mt-4">
          - Participante destacado
        </p>
      </div> */}

      {/* Sección 7: Instagram */}
      <div className="bg-gray-100 py-16 px-8">
        <h2 className="text-4xl font-semibold text-center mb-8">Instagram</h2>
        <InstagramSection />
      </div>

      {/* Sección 8: Próximos Eventos */}
      <div className="bg-white py-16 px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4" data-aos="fade-up">
            Próximos Eventos
          </h2>
          <p
            className="text-lg max-w-4xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            ¡No te pierdas la proxima clinica! "No cambies todo. Solo lo
            necesario para llegar a tu mejor versión."
          </p>
          <div
            className="flex justify-center items-center"
            data-aos="fade-in"
            data-aos-delay="300"
          >
            <Button
              onClick={() =>
                window.open(
                  "https://federacionmexicanaderodeo.org/convocatorias/",
                  "_blank"
                )
              }
              title="Ver calendario"
            />
          </div>
        </div>

        {/* <div className="mt-8">
          <h2
            className="text-2xl font-bold text-center mb-4"
            data-aos="fade-up"
          >
            Ligas de Interés
          </h2>
          <div data-aos="zoom-in">
            <ImageCarousel
              images={ligasLogos}
              navigation={true}
              pagination={false}
              autoplay={true}
              loop={true}
              slideHeight="h-32"
              slidesPerView={3}
              spaceBetween={40}
              customSwiperSlideStyles="flex justify-center"
              customImgSwiperStyles="w-32 h-32 object-contain rounded-lg"
              arrowColor="text-black"
            />
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
