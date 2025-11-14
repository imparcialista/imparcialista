import React from 'react';
import { FaCertificate, FaGraduationCap } from 'react-icons/fa';

const Certificados = () => {
  const certificadosHashtag = [
    {
      titulo: 'FORMADO EM PYTHON IMPRESSIONADOR',
      link: 'https://portalhashtag.com/certificado-hashtag/1707353612156x440053061150048260?data-inicio=Sim'
    }
  ];

  const certificadosAlura = [
    {
      titulo: 'PYTHON: COMEÇANDO COM A LINGUAGEM',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-introducao-a-linguagem/certificate'
    },
    {
      titulo: 'PYTHON: AVANÇANDO NA LINGUAGEM',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-avancando-na-linguagem/certificate'
    },
    {
      titulo: 'PYTHON: ENTENDENDO A ORIENTAÇÃO A OBJETOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-intro-orientacao-objetos/certificate'
    },
    {
      titulo: 'PYTHON: TRABALHANDO COM I/O',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-trabalhando-com-io/certificate'
    },
    {
      titulo: 'PYTHON: AVANÇANDO NA ORIENTAÇÃO A OBJETOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-avancando-orientacao-objetos/certificate'
    },
    {
      titulo: 'PYTHON COLLECTIONS PARTE 2: CONJUNTOS E DICIONÁRIOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-collections-conjuntos-e-dicionarios/certificate'
    },
    {
      titulo: 'PYTHON COLLECTIONS PARTE 1: LISTAS E TUPLAS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-collections-listas-e-tuplas/certificate'
    },
    {
      titulo: 'STRING EM PYTHON: EXTRAINDO INFORMAÇÕES DE UMA URL',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/string-python-extraindo-informacoes-url/certificate'
    },
    {
      titulo: 'PYTHON BRASIL: VALIDAÇÃO DE DADOS NO PADRÃO NACIONAL',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-validacao-dados/certificate'
    },
    {
      titulo: 'PYTHON E TDD: EXPLORANDO TESTES UNITÁRIOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-tdd-explorando-testes-unitarios/certificate'
    },
    {
      titulo: 'PYTHON: ENTENDENDO A ORIENTAÇÃO A OBJETOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-entendendo-orientacao-objetos/certificate'
    },
    {
      titulo: 'JAVASCRIPT E HTML: DESENVOLVA UM JOGO E PRATIQUE LÓGICA DE PROGRAMAÇÃO',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/logica-programacao-javascript-html/certificate'
    },
    {
      titulo: 'HTML E CSS: CLASSES, POSICIONAMENTO E FLEXBOX',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-classes-posicionamento-flexbox/certificate'
    },
    {
      titulo: 'HTML E CSS: CABEÇALHO, FOOTER E VARIÁVEIS CSS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-cabecalho-footer-variaveis-css/certificate'
    },
    {
      titulo: 'HTML E CSS: AMBIENTES DE DESENVOLVIMENTO, ESTRUTURA DE ARQUIVOS E TAGS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-ambiente-arquivos-tags/certificate'
    },
    {
      titulo: 'HTML E CSS: TRABALHANDO COM RESPONSIVIDADE E PUBLICAÇÃO DE PROJETOS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-responsividade-publicacao-projetos/certificate'
    },
    {
      titulo: 'HTML E CSS: PRATICANDO HTML/CSS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-praticando-html-css/certificate'
    },
    {
      titulo: 'LINUX ONBOARDING: USANDO A CLI DE UMA FORMA RÁPIDA E PRÁTICA',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/linux-onboarding-utilizar-cli-forma-rapida-pratica/certificate'
    },
    {
      titulo: 'DNS: DOMINE OS SERVIÇOS NA NUVEM',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/dns-como-servico-na-nuvem/certificate'
    },
    {
      titulo: 'ADOBE PHOTOSHOP: CONCEITOS ESSENCIAIS',
      link: 'https://cursos.alura.com.br/user/imparcialista/course/introducao-photoshop-conceitos-essenciais/certificate'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Todos os Certificados
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Hashtag Programação */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaGraduationCap className="inline mr-2" />
              Escola: Hashtag Programação
            </h2>
            <div className="space-y-4">
              {certificadosHashtag.map((cert, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-xl font-semibold text-accent">{cert.titulo}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300"
                  >
                    Ver certificado
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Alura */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaCertificate className="inline mr-2" />
              Escola: Alura
            </h2>
            <div className="space-y-4">
              {certificadosAlura.map((cert, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-xl font-semibold text-accent">{cert.titulo}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300"
                  >
                    Ver certificado
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

export default Certificados;