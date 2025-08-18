import React, { useEffect, useState } from "react";
import { storage, ref, listAll, getDownloadURL } from "../firebase";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCoverflow,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import Loader from "./Loader";

const Galeria = ({ folderName }) => {
  const [imagesByYear, setImagesByYear] = useState({});
  const [loading, setLoading] = useState(true);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      const imagesData = {};

      const rootFolderRef = ref(storage, `galeria/${folderName}/`);
      try {
        const rootRes = await listAll(rootFolderRef);
        const folders = rootRes.prefixes;

        for (const folderRef of folders) {
          const year = folderRef.name;
          try {
            const res = await listAll(folderRef);
            const urls = await Promise.all(
              res.items.map((item) => getDownloadURL(item))
            );
            imagesData[year] = urls;
          } catch (error) {
            console.error(`Error al obtener imágenes del año ${year}:`, error);
            imagesData[year] = [];
          }
        }

        setImagesByYear(imagesData);
        setYears(folders.map((folder) => folder.name).sort((a, b) => b - a));
      } catch (error) {
        console.error("Error al obtener las carpetas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [folderName]);

  return (
    <div>
      {loading ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-center text-lg mb-8">Cargando imágenes...</p>
          <Loader />
        </div>
      ) : (
        years.map((year) => (
          <div key={year} className="mb-20 h-full w-full">
            <h2 className="text-3xl font-semibold mb-8 text-center">{year}</h2>
            <Swiper
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.5}
              breakpoints={{
                640: { slidesPerView: 1.5 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 2.5 },
              }}
              coverflowEffect={{
                rotate: 5,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              loop={true}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet custom-bullet', // Clase personalizada
                bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active'
              }}
              navigation={{
                nextEl: `.custom-next-${year}`,
                prevEl: `.custom-prev-${year}`,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full max-w-6xl mx-auto px-4"
            >
              {imagesByYear[year]?.length > 0 ? (
                imagesByYear[year].map((url, index) => (
                  <SwiperSlide key={index}>
                    {/* Contenedor con relación de aspecto 5:4 */}
                    <div className="relative w-full pt-[70%]">
                      <img
                        src={url}
                        alt={`Imagen ${index} del ${year}`}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <SwiperSlide>
                  <p className="text-center text-gray-500">
                    No hay imágenes disponibles
                  </p>
                </SwiperSlide>
              )}

              <div
                className={`custom-next-${year} absolute top-1/2 right-4 z-10 -translate-y-1/2 transform cursor-pointer p-2 rounded-full 
                  transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:-translate-y-[55%] 
                  active:scale-95 active:shadow-md 
                  max-md:bg-transparent max-md:hover:bg-transparent max-md:shadow-none
                  md:bg-white/30 md:hover:bg-white/50 md:shadow-lg`}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>

              <div
                className={`custom-prev-${year} absolute top-1/2 left-4 z-10 -translate-y-1/2 transform cursor-pointer p-2 rounded-full 
                  transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:-translate-y-[55%] 
                  active:scale-95 active:shadow-md 
                  max-md:bg-transparent max-md:hover:bg-transparent max-md:shadow-none
                  md:bg-white/30 md:hover:bg-white/50 md:shadow-lg`}
              >
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
            </Swiper>
          </div>
        ))
      )}
    </div>
  );
};

export default Galeria;
