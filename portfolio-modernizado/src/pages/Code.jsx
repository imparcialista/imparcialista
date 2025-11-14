import React, { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Code = () => {
  const [code, setCode] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get('code');
    if (codeFromUrl) {
      setCode(decodeURIComponent(codeFromUrl));
    }
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Aqui está seu código
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
          <p className="text-lg text-gray-300 mb-4">
            Esse é o primeiro passo para obter o <strong className="text-accent">Access Token do Mercado Livre</strong>
          </p>
          <p className="text-gray-300 mb-6">
            Copie a URL do site e utilize no parâmetro <strong className="text-accent">Redirect URI</strong>
          </p>

          {code ? (
            <div className="bg-accent bg-opacity-20 p-4 rounded-lg mb-6">
              <p className="text-xl font-bold text-accent mb-2">Seu Code:</p>
              <code className="block text-secondary bg-gray-900 p-3 rounded text-sm overflow-x-auto">
                {code}
              </code>
            </div>
          ) : (
            <p className="text-gray-400 mb-6">Clique no botão abaixo para gerar um novo code.</p>
          )}

          <a
            href="https://auth.mercadolivre.com.br/authorization?response_type=code&client_id=2797479857020913&redirect_uri=http://localhost:5174/code"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent-hover transition-all duration-300 transform hover:scale-105 shadow-lg hover-lift"
          >
            <FaExternalLinkAlt className="mr-2" />
            Gerar novo code
          </a>

          <p className="text-gray-400 mt-6 text-center">
            Se você chegou até aqui por conta de um tutorial, por favor, considere se inscrever e comentar, seu feedback é muito importante
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;