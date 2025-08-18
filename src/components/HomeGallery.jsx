import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const HomeGallery = () => {
  const [imagesRow1, setImagesRow1] = useState([]);
  const [imagesRow2, setImagesRow2] = useState([]);

  useEffect(() => {
    const fetchImages = async (folder, setImages) => {
      const storage = getStorage();
      const baseRef = ref(storage, `galeria/${folder}`);
      let imageUrls = [];

      try {
        const years = await listAll(baseRef);
        for (const yearFolder of years.prefixes) {
          const imagesList = await listAll(yearFolder);
          const urls = await Promise.all(imagesList.items.map(item => getDownloadURL(item)));
          imageUrls = [...imageUrls, ...urls];
        }
        setImages(imageUrls.sort(() => 0.5 - Math.random()));
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages("nhsra", setImagesRow1);
    fetchImages("njhra", setImagesRow2);
  }, []);

  const breakpointsConfig = {
    320: { slidesPerView: 1, spaceBetween: 10 },
    640: { slidesPerView: 2, spaceBetween: 15 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  };

  return (
    <div>
      <div className="mb-8">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false }}
          speed={5000}
          breakpoints={breakpointsConfig}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {imagesRow1.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-64 object-cover rounded-xl" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: false, reverseDirection: true }}
          speed={5000}
          breakpoints={breakpointsConfig}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {imagesRow2.map((src, index) => (
            <SwiperSlide key={index}>
              <img src={src} alt={`Imagen ${index + 1}`} className="w-full h-64 object-cover rounded-lg" loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeGallery;
