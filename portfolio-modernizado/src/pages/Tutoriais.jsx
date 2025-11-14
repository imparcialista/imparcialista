import React from 'react';
import { FaVideo, FaYoutube } from 'react-icons/fa';

const Tutoriais = () => {
  const tutoriaisBling = [
    {
      titulo: 'Como gerar e utilizar o Token do Bling ERP V3',
      link: 'https://youtu.be/SBQPVT2N5os'
    }
  ];

  const tutoriaisMercadoLivre = [
    {
      titulo: 'Como obter o Access Token em menos de 3 minutos',
      link: 'https://youtu.be/l4qpOFXlCmA'
    },
    {
      titulo: 'Como obter o Access Token? Vídeo explicativo',
      link: 'https://youtu.be/y_Bo9dzVmv0'
    },
    {
      titulo: 'Como pegar seus anúncios do Mercado Livre com Python',
      link: 'https://youtu.be/hBztnbjf0-I'
    },
    {
      titulo: 'Como GERAR o Refresh Token automaticamente',
      link: 'https://youtu.be/B8XP-5wwmBs'
    },
    {
      titulo: 'Erros mais comuns ao gerar o Access Token',
      link: 'https://youtu.be/prFxQjHxDb0'
    },
    {
      titulo: 'Gerenciando estoque e preços de anúncios',
      link: 'https://youtu.be/o8xLIPg0Wqk'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Tutoriais
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Bling ERP */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaVideo className="inline mr-2" />
              API do Bling ERP
            </h2>
            <div className="space-y-4">
              {tutoriaisBling.map((tutorial, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-xl font-semibold text-accent">{tutorial.titulo}</p>
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <FaYoutube className="mr-2" />
                    Assistir vídeo
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Mercado Livre */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaVideo className="inline mr-2" />
              API do Mercado Livre
            </h2>
            <div className="space-y-4">
              {tutoriaisMercadoLivre.map((tutorial, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-xl font-semibold text-accent">{tutorial.titulo}</p>
                  <a
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <FaYoutube className="mr-2" />
                    Assistir vídeo
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Tutoriais;