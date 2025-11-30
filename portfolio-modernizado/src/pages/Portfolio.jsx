import React from 'react';
import { Link } from 'react-router-dom';
import {
  FunnelIcon,
  BriefcaseIcon,
  CodeBracketIcon,
  AcademicCapIcon,
  LightBulbIcon,
  LinkIcon,
} from '@heroicons/react/24/outline';

const sites = [
  {
    nome: 'Luarco App',
    url: 'https://luarco.com/',
    descricao:
      'Em desenvolvimento, site para divulgação do meu aplicativo de automações para vendedores e comerciantes',
  },
  {
    nome: 'Lufin',
    url: 'https://lufin.com.br/',
    descricao: 'Em desenvolvimento, site para finanças pessoais e controle de gastos',
  },
  {
    nome: 'CHA - codehealthanalyzer',
    url: 'https://github.com/imparcialista/codehealthanalyzer',
    descricao: 'Em desenvolvimento, ferramenta em Python para análise de qualidade de código',
  },
];

const conhecimentosIntermediarios = [
  'Python',
  'Bling',
  'Figma',
  'AppSheet',
  'Apps Script',
  'Google Sheets',
  'Google Ads',
  'Google Analytics',
  'Ecommerce',
  'Marketplaces',
];

const conhecimentosBasicos = ['DaVinci Resolve', 'Adobe Photoshop', 'Adobe XD', 'Excel', 'Word'];

export const PortfolioSections = () => {
  return (
    <div id="portfolio" className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Lucas Araujo Costa
          </h1>
          <h2 className="text-xl sm:text-2xl text-links mb-8">
            Desenvolvedor, 25 anos, Solteiro
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            {/* Objetivo Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">
                <FunnelIcon className="inline mr-2 w-8 h-8" />
                Objetivo
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Expandir meu aplicativo dentro do mercado brasileiro, ajudar vendedores e comerciantes
                a crescer, com ferramentas e automações que facilitam a vida das pessoas, e que
                economizam tempo, para que elas possam focar em outras áreas da sua empresa.
              </p>
            </section>

            {/* Qualificações Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">
                <CodeBracketIcon className="inline mr-2 w-8 h-8" />
                Qualificações
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Desenvolvi uma automação para visualização de estoque, de uma empresa ou mais,
                obtendo informações diretamente do Bling ou de uma planilha, também tenho uma
                planilha de precificação automática para determinados marketplaces, e mais
                algumas automações em Python também.
              </p>
            </section>

            {/* Repositórios Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">Meus sites e projetos</h2>
              <div className="space-y-6">
                {sites.map((repo) => (
                  <div key={repo.url} className="border-l-4 border-accent pl-4">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-semibold text-accent hover:text-accent-hover transition-colors duration-300"
                    >
                      {repo.nome}
                    </a>
                    <p className="text-gray-400 mt-2">{repo.descricao}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            {/* Experiência Profissional Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">
                <BriefcaseIcon className="inline mr-2 w-8 h-8" />
                Experiência Profissional
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg font-semibold">
                    ZX CONTATO, Franco da Rocha - Gerente
                  </p>
                  <p className="text-gray-400">fevereiro de 2019 - presente</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-lg font-semibold">
                    MD PAPÉIS, Caieiras - Aprendiz de T.I
                  </p>
                  <p className="text-gray-400">fevereiro de 2016 - junho de 2017</p>
                </div>
              </div>
            </section>

            {/* Escolaridade Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">
                <AcademicCapIcon className="inline mr-2 w-8 h-8" />
                Escolaridade
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-lg font-semibold">
                    E. E. Benedito Fagundes Marques | 2014-2017
                  </p>
                  <p className="text-gray-400">Ensino Médio Completo | Franco da Rocha, São Paulo</p>
                </div>
              </div>
            </section>

            {/* Conhecimentos Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">
                <LightBulbIcon className="inline mr-2 w-8 h-8" />
                Conhecimentos
              </h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4 text-accent">Intermediários</h3>
                <div className="space-y-4">
                  {conhecimentosIntermediarios.map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-accent font-medium">{skill}</span>
                        <span className="text-gray-400 text-sm">80%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-accent h-3 rounded-full transition-all duration-1000"
                          style={{ width: '80%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent-secondary">Básicos</h3>
                <div className="space-y-4">
                  {conhecimentosBasicos.map((skill) => (
                    <div key={skill}>
                      <div className="flex justify-between mb-1">
                        <span className="text-accent-secondary font-medium">{skill}</span>
                        <span className="text-gray-400 text-sm">50%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <div
                          className="bg-accent-secondary h-3 rounded-full transition-all duration-1000"
                          style={{ width: '50%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Links Section */}
            <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-3xl font-bold mb-6 text-links">Links rápidos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  to="/certificados"
                  className="bg-accent text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-accent-hover transition-colors duration-300"
                >
                  Certificados
                </Link>
                <Link
                  to="/tutoriais"
                  className="bg-accent-secondary text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-accent-secondary-hover transition-colors duration-300"
                >
                  Tutoriais
                </Link>
                <Link
                  to="/links"
                  className="bg-green-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Links úteis
                </Link>
              </div>

              <div className="mt-8 space-y-4">
                <a
                  href="https://www.youtube.com/@imparcialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-red-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-red-700 transition-colors duration-300"
                >
                  YouTube
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-araujo-costa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-blue-600 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/imparcialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-800 text-white px-6 py-3 rounded-lg text-center font-semibold hover:bg-gray-900 transition-colors duration-300 border border-gray-600"
                >
                  GitHub
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  return <PortfolioSections />;
};

export default Portfolio;
