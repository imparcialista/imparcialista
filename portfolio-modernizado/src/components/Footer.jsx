import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-links">Contato</h3>
            <div className="space-y-2">
              <p className="flex items-center text-primary">
                <FaEnvelope className="mr-2 text-accent" />
                imparcialista@gmail.com
              </p>
              <p className="flex items-center text-primary">
                <FaPhone className="mr-2 text-accent" />
                (11) 97592-0589
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
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/lucas-araujo-costa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://www.youtube.com/@imparcialista"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors duration-300"
              >
                <FaYoutube size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-links">Links Rápidos</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-primary hover:text-accent transition-colors duration-300">Home</Link>
              <Link to="https://hub.la/g/rzcIwxJl98a3gTblSVEh" className="block text-primary hover:text-accent transition-colors duration-300">Meu curso</Link>
              <Link to="/hostinger-vps" className="block text-primary hover:text-accent transition-colors duration-300">VPS Hostinger</Link>
              <Link to="/imparcialista" className="block text-primary hover:text-accent transition-colors duration-300">Todos links</Link>
              <Link to="/certificados" className="block text-primary hover:text-accent transition-colors duration-300">Certificados</Link>
              

              
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-secondary">&copy; 2025 Lucas Araujo. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;