import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const slides = [
  { id: 1, image: 'https://source.unsplash.com/800x400/?nature', title: 'Naturaleza' },
  { id: 2, image: 'https://source.unsplash.com/800x400/?city', title: 'Ciudad' },
  { id: 3, image: 'https://source.unsplash.com/800x400/?technology', title: 'Tecnología' },
  { id: 4, image: 'https://source.unsplash.com/800x400/?ocean', title: 'Océano' },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-4xl mx-auto mt-10 px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        spaceBetween={0}
        slidesPerView={1.5}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="coverflow"
        coverflowEffect={{ rotate: 30, stretch: 50, depth: 150, modifier: 1, slideShadows: true }}
        centeredSlides={true}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-64 md:h-80 lg:h-96">
              <img src={slide.image} alt={slide.title} className="w-full h-full object-cover rounded-xl" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-bold">{slide.title}</h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
