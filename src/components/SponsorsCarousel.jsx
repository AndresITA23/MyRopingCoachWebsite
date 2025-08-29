import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useTranslation } from "react-i18next";

import AmericanHat from "../assets/images/Sponsors/americanHat.png";
import Classic from "../assets/images/Sponsors/classic.png";
import Durango from "../assets/images/Sponsors/durango.png";
import HeelOMatic from "../assets/images/Sponsors/heel-o-matic.png";
import LasTunas from "../assets/images/Sponsors/lasTunas.png";
import PerBuckles from "../assets/images/Sponsors/perBuckles.png";
import Wrangler from "../assets/images/Sponsors/wrangler.png";
import WranglerTeam from "../assets/images/Sponsors/wranglerTeam.png";

const sponsors = [
  { src: AmericanHat, url: "https://americanhat.net/" },
  { src: Classic, url: "https://classicrope.com/" },
  { src: Durango, url: "https://durangoboots.com/" },
  { src: HeelOMatic, url: "https://www.smartysupplyco.com/" },
  { src: LasTunas, url: "https://lastunas.com.mx/" },
  { src: PerBuckles, url: "https://perbuckles.com/" },
  { src: Wrangler, url: "https://wrangler.com/" },
  { src: WranglerTeam, url: "https://wranglernetwork.com/" },
];

const SponsorsCarousel = () => {
  const { t } = useTranslation();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
    speed: 20,
  });

  const autoplayRef = useRef(null);

  useEffect(() => {
    if (!emblaApi) return;

    const play = () => {
      if (emblaApi) emblaApi.scrollNext();
    };

    autoplayRef.current = setInterval(play, 4000);
    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  return (
    <section className="py-12 px-6 sm:px-8 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800">
        {t("sponsors.section_title")}
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="flex-[0_0_20%] flex items-center justify-center p-4"
            >
              <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={sponsor.src}
                  alt={`Sponsor ${i + 1}`}
                  className="w-32 h-auto filter grayscale hover:grayscale-0 transition-transform transition-filter duration-500 ease-in-out cursor-pointer transform hover:-translate-y-2 hover:scale-105"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;
