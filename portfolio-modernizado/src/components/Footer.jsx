import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-links">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center text-gray-300">
                <FaEnvelope className="mr-2 text-accent" />
                lucas.araujo@example.com
              </p>
              <p className="flex items-center text-gray-300">
                <FaPhone className="mr-2 text-accent" />
                (11) 99999-9999
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-links">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/imparcialista"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-araujo-costa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@imparcialista"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-accent transition-colors duration-300"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-links">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-accent transition-colors duration-300">Home</Link>
              <Link to="/portfolio" className="block text-gray-300 hover:text-accent transition-colors duration-300">Portfólio</Link>
              <Link to="/certificados" className="block text-gray-300 hover:text-accent transition-colors duration-300">Certificados</Link>
              <Link to="/tutoriais" className="block text-gray-300 hover:text-accent transition-colors duration-300">Tutoriais</Link>
              <Link to="/links" className="block text-gray-300 hover:text-accent transition-colors duration-300">Links</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Lucas Araujo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;