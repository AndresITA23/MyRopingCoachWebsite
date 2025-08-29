import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../Button";

import ContactImage from "../../assets/images/contact.webp";
import ContactImage2 from "../../assets/images/contact2.webp";
import ContactImage3 from "../../assets/images/contact3.webp";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white py-8 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-800">
            {t("contact.contactTitle")}
          </h2>
          <div className="space-y-4">
            <a
              href="mailto:nhsra@federacionmexicanaderodeo.org"
              className="text-lg md:text-xl text-gray-700 hover:text-blue-400 transition-colors break-words overflow-hidden"
            >
              <i className="bx bx-envelope text-2xl mr-2 align-middle" />
              {t("contact.contactEmail")}
            </a>
            <a
              href="tel:+15204154799"
              className="text-lg md:text-xl text-gray-700 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              {t("contact.contactPhoneUSA")}
            </a>
            <a
              href="tel:+526371053051"
              className="text-lg md:text-xl text-gray-700 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              {t("contact.contactPhoneMX")}
            </a>
            <div className="mt-4">
              <Link to="/contact">
                <Button title={t("contact.contactButton")} />
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
              <img src={ContactImage3} alt="Imagen 1" className="w-full h-full object-cover" />
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-xl col-span-2"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="400"
            >
              <img src={ContactImage2} alt="Imagen 2" className="w-full h-full object-cover" />
            </div>
            <div
              className="rounded-xl overflow-hidden shadow-2xl col-span-3"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <img src={ContactImage} alt="Imagen 4" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
