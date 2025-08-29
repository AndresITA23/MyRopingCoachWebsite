
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../Button";

import AldoImage from "../../assets/images/aboutAldo.webp"; // Ensure you have the correct path to the image

const AboutAldoSection = () => {
      const { t, i18n } = useTranslation();

    return (
        <section className="py-16 px-6 sm:px-8 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
              {t("about.coach_name")}
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              {t("about.coach_description")}
            </p>
            <Link to="/about-me">
              <Button title={t("about.know_me")} />
            </Link>
          </div>
          <div data-aos="fade-up" className="flex justify-center">
            <img
              src={AldoImage}
              alt="Aldo Garibay entrenando"
              className="rounded-xl shadow-xl object-cover h-96 w-full"
            />
          </div>
        </div>
      </section>
    );
};

export default AboutAldoSection;