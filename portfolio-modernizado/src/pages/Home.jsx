import React from 'react';
import lucasImage from '../assets/eu.jpg';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';
import { PortfolioSections } from './Portfolio';

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 parallax bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)',
          }}
        ></div>
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-black/80"></div>
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full opacity-50 animate-float"></div>
          <div
            className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent-secondary rounded-full opacity-30 animate-float"
            style={{ animationDelay: '1s' }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-500 rounded-full opacity-20 animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-fade-in-left glass p-8 rounded-2xl">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transformando
                <br />
                <span className="gradient-text">ideias</span> em
                <br />
                <span className="gradient-text">soluções</span> digitais
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                Olá! Eu sou o Lucas Araujo, trabalho há mais de 6 anos com marketplaces, e nesse tempo{' '}
                <strong className="text-accent">
                  desenvolvi um aplicativo para facilitar a vida de quem vende no ecommerce.
                </strong>
                <br />
                <br />
                Por atuar na área, vi que tem muitos pontos de melhorias disponíveis, e eu estou disposto a mudar o
                jogo. Se você ficou interessado, não hesite em me procurar, aguardo seu contato.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://github.com/imparcialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-primary text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift"
                >
                  <img src={githubIcon} alt="GitHub" className="w-6 h-6" />
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/lucas-araujo-costa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift"
                >
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                  LinkedIn
                </a>
              </div>

            </div>

            {/* Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300 animate-float"></div>
                <img
                  src={lucasImage}
                  alt="Lucas Araujo"
                  className="relative w-80 h-80 sm:w-96 sm:h-96 object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition duration-300 hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio sections integrated into home */}
      <PortfolioSections />
    </>
  );
};

export default Home;
