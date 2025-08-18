import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-8">
        
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">My Roping Coach</h2>
          <p className="text-sm leading-relaxed">
            Coaching en Team Roping con más de 30 años de experiencia. Clínicas
            diseñadas para mejorar tu rendimiento, técnica y mentalidad en la
            competencia.
          </p>
        </div>

        {/* Links rápidos */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">
            Enlaces Rápidos
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/aboutme" className="hover:text-blue-400">
                ¿Quién es Aldo?
              </Link>
            </li>
            <li>
              <Link to="/whatis" className="hover:text-blue-400">
                ¿Qué es My Roping Coach?
              </Link>
            </li>
            <li>
              <Link to="/why" className="hover:text-blue-400">
                ¿Por qué elegirnos?
              </Link>
            </li>
            <li>
              <Link to="/clinics/performance" className="hover:text-blue-400">
                Nuestras Clínicas
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">Contáctanos</h2>
          <div className="space-y-4">
            <a
              href="tel:+15204154799"
              className="text-md text-gray-200 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              USA: +1 (520) 415-4799
            </a>
            <a
              href="tel:+526371053051"
              className="text-md text-gray-200 hover:text-blue-400 flex items-center transition-colors"
            >
              <i className="bx bx-phone text-2xl mr-2" />
              México: +52 (637) 105-3051
            </a>
          </div>
          <div className="flex space-x-4 mt-4">
            {/* Redes sociales */}
            <a
              href="https://www.instagram.com/myropingcoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="bx bxl-instagram-alt text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/myropingcoach/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="bx bxl-facebook-circle text-2xl"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyrigth */}
      <div className="text-center text-sm text-gray-400 mt-4 mx-4">
        © {new Date().getFullYear()} My Roping Coach. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
