import { useTranslation } from "react-i18next";
import TestimonialsCard from "../TestimonialsCard";

const TestimonialsSection = () => {
  const { t } = useTranslation();
  const testimonials = t("testimonials", { returnObjects: true });

  return (
    <section className="py-16 px-6 sm:px-8">
      <h2
        className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800"
        data-aos="fade-up"
      >
        {t("testimonialsTitle")}
      </h2>

      <div
        className="grid gap-8 justify-items-center"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {testimonials.map((tItem, index) => (
          <TestimonialsCard
            key={index}
            name={tItem.name}
            role={tItem.role}
            text={tItem.text}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
