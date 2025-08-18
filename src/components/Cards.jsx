import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const Cards = ({ images = [], className = "", cardHeight = "h-96" }) => {
  return (
    <Swiper
      effect="cards"
      grabCursor={true}
      modules={[EffectCards]}
      cardsEffect={{
        slideShadows: true,
        rotate: true,
        perSlideOffset: 8,
        perSlideRotate: 2,
      }}
      className={`mySwiper ${className}`}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            className={`w-full object-cover rounded-lg ${cardHeight}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Cards;
