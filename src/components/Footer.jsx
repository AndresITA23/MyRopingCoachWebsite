import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import TRJLogo from "../assets/images/TRJ.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black text-gray-200 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        
        {/* As Featured In */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold text-white mb-4">
            {t("footer.featuredIn")}
          </h3>
          <a
            href="https://teamropingjournal.com/ropers-stories/aldo-garibay-el-lazador-el-profesor-el-embajador/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src={TRJLogo}
              alt="Team Roping Journal"
              className="h-10 hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            {t("footer.quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">
                {t("footer.links.home")}
              </Link>
            </li>
            <li>
              <Link to="/about-me" className="hover:text-blue-400">
                {t("footer.links.about")}
              </Link>
            </li>
            <li>
              <Link to="/what-is" className="hover:text-blue-400">
                {t("footer.links.whatIs")}
              </Link>
            </li>
            <li>
              <Link to="/clinics/performance" className="hover:text-blue-400">
                {t("footer.links.clinics")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                {t("footer.links.contact")}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">
            {t("footer.contactTitle")}
          </h2>
          <div className="space-y-4">
            <a
              href="tel:+15204154799"
              className="text-md text-gray-200 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              {t("footer.phoneUSA")}
            </a>
            <a
              href="tel:+526371053051"
              className="text-md text-gray-200 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              {t("footer.phoneMX")}
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* Redes sociales */}
            <a
              href="https://www.instagram.com/aldo.garibay/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="bx bxl-instagram-alt text-4xl"></i>
            </a>
            <a
              href="https://www.facebook.com/aldogaribayolachea/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="bx bxl-facebook-circle text-4xl"></i>
            </a>
            <a
              href="https://www.youtube.com/@aldogaribay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="bx bxl-youtube text-4xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4 mx-4">
        © {new Date().getFullYear()} My Roping Coach. {t("footer.rights")}
      </div>
    </footer>
  );
};

export default Footer;
