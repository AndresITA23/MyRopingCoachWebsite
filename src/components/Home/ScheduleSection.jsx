import { useTranslation } from "react-i18next";
import Button from "../Button";
import { Link } from "react-router-dom";
import { MapPin, Calendar, Globe } from "lucide-react";
import ScheduleImage from "../../assets/images/schedule.webp";

const ScheduleSection = () => {
  const { t } = useTranslation();

  const locations = t("schedule.locations", { returnObjects: true });

  return (
    <section className="py-12 px-6 sm:px-8 bg-gray-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full blur-2xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Imagen horizontal tipo banner */}
        

        <div className="text-center mb-6" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-foreground">
            {t("schedule.section_title")}
          </h2>
          <img
          src={ScheduleImage}
          alt="Schedule banner"
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
        />
          <div className="w-24 h-1 bg-primary mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t("schedule.section_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-10">
          {/* Duration & Schedule */}
          <div
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:bg-card/70 transition-all duration-300"
            data-aos="fade-right"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl mr-4">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t("schedule.duration_title")}
              </h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <span className="text-muted-foreground">
                  {t("schedule.duration_weekend")}
                </span>
                <span className="font-semibold text-foreground">
                  {t("schedule.duration_weekend_value")}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <span className="text-muted-foreground">
                  {t("schedule.duration_weekday")}
                </span>
                <span className="font-semibold text-foreground">
                  {t("schedule.duration_weekday_value")}
                </span>
              </div>
              <div className="flex items-center justify-between p-4 bg-secondary/30 rounded-lg">
                <span className="text-muted-foreground">
                  {t("schedule.languages")}
                </span>
                <span className="font-semibold text-foreground">
                  {t("schedule.languages_value")}
                </span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div
            className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:bg-card/70 transition-all duration-300"
            data-aos="fade-left"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-xl mr-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {t("schedule.locations_title")}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {locations.map((location, index) => (
                <div
                  key={location}
                  className="p-3 bg-secondary/30 rounded-lg text-center hover:bg-primary/10 transition-all duration-200 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {location}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-center">
              <Globe className="w-4 h-4 text-primary mr-2" />
              <span className="text-sm text-muted-foreground">
                {t("schedule.coverage")}
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="text-center bg-gradient-card rounded-3xl p-12 border border-border/50 shadow-card"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            {t("schedule.cta_title")}
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("schedule.cta_description")}
          </p>

          {/* Botón centrado */}
          <div className="flex justify-center">
            <Link to="/contact">
              <Button title={t("schedule.cta_button")} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
