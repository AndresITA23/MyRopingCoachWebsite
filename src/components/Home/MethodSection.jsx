import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../Button";
import Cards from "../Cards";

import Method1 from "../../assets/images/method1.webp";
import Method2 from "../../assets/images/method2.webp";
import Method3 from "../../assets/images/method3.webp";
import Method4 from "../../assets/images/method4.webp";

const MethodSection = () => {
  const { t } = useTranslation();

  const cardImages = [Method1, Method2, Method3, Method4];

  const renderWithBold = (arr) =>
    arr.map((part, i) =>
      typeof part === "string" ? (
        part + " "
      ) : (
        <span key={i} className="font-semibold">
          {part.bold}{" "}
        </span>
      )
    );

  return (
    <section className="py-16 px-6 sm:px-8 bg-gray-100">
      {/* Encabezado */}
      <div className="max-w-5xl mx-auto text-center mb-16" data-aos="fade-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          {t("method.section_title")}
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          {renderWithBold(t("method.section_description", { returnObjects: true }))}
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="w-9/12 mx-auto" data-aos="fade-right">
          <Cards images={cardImages} cardHeight="h-48 sm:h-80 md:h-96 lg:h-80" />
        </div>

        <div data-aos="fade-up">
          <h3 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            {t("method.train_title")}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {renderWithBold(t("method.train_description", { returnObjects: true }))}
          </p>
          <Link to="/what-is">
            <Button title={t("method.button")} />
          </Link>
        </div>
      </div>

      {/* Beneficios */}
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800" data-aos="fade-up">
          {t("method.benefits_title")}
        </h3>
        <ul className="max-w-4xl mx-auto text-lg list-disc list-inside space-y-3 text-gray-700">
          {t("method.benefits", { returnObjects: true }).map((item, index) => (
            <li key={index} data-aos="fade-up" data-aos-delay={200 * (index + 1)}>
              {renderWithBold(item)}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MethodSection;
