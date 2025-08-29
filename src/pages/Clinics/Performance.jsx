import React from "react";
import { Trophy, Video, BarChart3, Repeat } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import PerformanceImage from "../../assets/images/hero3.webp";

const Performance = () => {
  const { t } = useTranslation();

  const imageSrc = PerformanceImage;
  const imageAlt = t("performance.image_alt");

  const features = [
    {
      icon: Trophy,
      title: t("performance.features.competitive.title"),
      description: t("performance.features.competitive.description"),
      color: "text-western-gold",
    },
    {
      icon: Video,
      title: t("performance.features.video.title"),
      description: t("performance.features.video.description"),
      color: "text-accent",
    },
    {
      icon: BarChart3,
      title: t("performance.features.analysis.title"),
      description: t("performance.features.analysis.description"),
      color: "text-western-sage",
    },
    {
      icon: Repeat,
      title: t("performance.features.reprogram.title"),
      description: t("performance.features.reprogram.description"),
      color: "text-western-copper",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-western-cream to-secondary py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          {/* Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4 hero-text">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {t("performance.hero.title")}
              </h1>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-stats rounded-full text-sm font-medium border border-border/20">
                <Trophy className="w-4 h-4 text-western-gold" />
                {t("performance.hero.badge")}
              </div>
            </div>

            <motion.div
              className="space-y-6 hero-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                {t("performance.hero.description1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("performance.hero.description2")}
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20 animate-float"></div>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="relative rounded-3xl shadow-elegant w-full max-w-lg mx-auto lg:max-w-none object-cover hero-text"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="stats-card border-0 shadow-warm rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-elegant transition-all duration-300"
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              >
                <div className="p-8 space-y-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-stats ${feature.color}`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-base">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-stats border-0 shadow-elegant rounded-lg border bg-card text-card-foreground shadow-sm max-w-4xl mx-auto">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">{t("performance.cta.title")}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">{t("performance.cta.description")}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hidden image for preloading */}
      <img src={imageSrc} alt="" style={{ display: "none" }} />
    </section>
  );
};

export default Performance;
