import React from "react";
import { Award, Globe, Users, Calendar, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imageSrc from "../assets/images/aboutAldo.webp";
import Footer from "../components/Footer";

const AboutMe = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: Award,
      number: "30+",
      label: t("about.coach_description_stats.years"),
      color: "text-western-gold",
      delay: 0.1,
    },
    {
      icon: Users,
      number: "5,000+",
      label: t("about.coach_description_stats.students"),
      color: "text-western-sage",
      delay: 0.2,
    },
    {
      icon: Globe,
      number: "8",
      label: t("about.coach_description_stats.countries"),
      color: "text-accent",
      delay: 0.3,
    },
    {
      icon: Calendar,
      number: "40",
      label: t("about.coach_description_stats.clinics"),
      color: "text-western-copper",
      delay: 0.4,
    },
  ];

  const achievements = [
    t("about.achievements.certified"),
    t("about.achievements.creator"),
    t("about.achievements.international"),
  ];

  return (
    <div>
      <section className="min-h-screen bg-gradient-to-br from-background via-western-cream to-secondary py-20 px-6 mt-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Imagen */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl blur-2xl opacity-20 animate-float"></div>
              <img
                src={imageSrc}
                alt={t("about.coach_name")}
                className="relative rounded-3xl shadow-elegant w-full max-w-lg mx-auto lg:max-w-none object-cover hero-text"
              />
            </motion.div>

            {/* Texto */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-4 hero-text">
                <p className="text-sm uppercase tracking-wide text-accent">
                  {t("about.know_me")}
                </p>
                <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  {t("about.coach_name")}
                </h1>

                <div className="flex flex-wrap gap-2">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="achievement-badge inline-flex items-center gap-2 px-3 py-1 bg-gradient-stats rounded-full text-sm font-medium border border-border/20"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <CheckCircle className="w-4 h-4" />
                      {achievement}
                    </motion.div>
                  ))}
                </div>

                <p className="text-xl lg:text-2xl text-foreground leading-relaxed">
                  {t("about.coach_description")}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="stats-card border-0 shadow-warm rounded-lg border bg-card text-card-foreground shadow-sm"
                  variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                >
                  <div className="p-6 text-center space-y-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-stats ${stat.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-3xl lg:text-4xl font-bold text-foreground">{stat.number}</p>
                      <p className="text-sm text-muted-foreground font-medium leading-tight">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMe;
