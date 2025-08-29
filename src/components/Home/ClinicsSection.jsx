import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { CheckCircle, PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ClinicsSection = () => {
  const { t } = useTranslation();

  const cards = t("clinics.cards", { returnObjects: true });

  return (
    <section className="py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900 drop-shadow-md">
          {t("clinics.section_title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Card 1 */}
          <Link to="/clinics/performance">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group bg-gray-100 border border-transparent rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-blue-400 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-3">
                  <PlayCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 relative">
                  {cards[0].title}
                  <span className="block w-0 h-1 bg-blue-500 transition-all duration-300 group-hover:w-1/2 mt-1"></span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{cards[0].description}</p>
              <span className="text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                {cards[0].button}
              </span>
            </motion.div>
          </Link>

          {/* Card 2 */}
          <Link to="/clinics/fundamentals">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gray-100 border border-transparent rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-green-400 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 rounded-full bg-green-100 text-green-600 mr-3">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 relative">
                  {cards[1].title}
                  <span className="block w-0 h-1 bg-green-500 transition-all duration-300 group-hover:w-1/2 mt-1"></span>
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{cards[1].description}</p>
              <span className="text-green-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                {cards[1].button}
              </span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClinicsSection;