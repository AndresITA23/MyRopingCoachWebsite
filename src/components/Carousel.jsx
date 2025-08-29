import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import MyRopingLogo from "../assets/MyRopingWhite.png"; // Adjust the path as necessary

const CarouselBase = ({
  images = [],
  navigation = true,
  pagination = true,
  autoplay = true,
  loop = true,
  slideHeight = "h-96",
  slidesPerView = 1,
  spaceBetween = 0,
  customDivStyles = "",
  customSwiperStyles = "",
  customImgSwiperStyles = "",
  customSwiperSlideStyles = "",
  effect = "",
  showOverlay,
  arrowColor = "text-white",
}) => {
  return (
    <div className={`w-full mx-auto relative ${customDivStyles}`}>
      {/* Flecha Anterior */}
      <div
        className={`custom-prev absolute top-1/2 left-4 z-10 -translate-y-1/2 transform cursor-pointer p-2 rounded-full 
          transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:-translate-y-[55%] 
          active:scale-95 active:shadow-md 
          max-md:bg-transparent max-md:hover:bg-transparent max-md:shadow-none
          md:bg-white/30 md:hover:bg-white/50 md:shadow-lg`}
      >
        <svg
          className={`w-10 h-10 ${arrowColor}`}
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

      {/* Flecha Siguiente */}
      <div
        className={`custom-next absolute top-1/2 right-4 z-10 -translate-y-1/2 transform cursor-pointer p-2 rounded-full 
          transition-all duration-300 ease-out hover:scale-110 hover:shadow-xl hover:-translate-y-[55%] 
          active:scale-95 active:shadow-md 
          max-md:bg-transparent max-md:hover:bg-transparent max-md:shadow-none
          md:bg-white/30 md:hover:bg-white/50 md:shadow-lg`}
      >
        <svg
          className={`w-10 h-10 ${arrowColor}`}
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

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: `.custom-next`,
          prevEl: `.custom-prev`,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active",
        }}
        autoplay={autoplay ? { delay: 3000 } : false}
        loop={loop}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        className={customSwiperStyles}
        effect={effect}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className={customSwiperSlideStyles}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className={`${customImgSwiperStyles} ${slideHeight}`}
            />
            {showOverlay && (
              <>
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={MyRopingLogo}
                    alt="My Roping Coach"
                    className="max-h-24 md:max-h-32 lg:max-h-56"
                  />
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselBase;
