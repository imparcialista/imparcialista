import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const escolas = [
  {
    nome: 'Hashtag Programação',
    cor: '#6479ed',
    certificados: [
      { titulo: 'Formado em Python Impressionador', link: 'https://portalhashtag.com/certificado-hashtag/1707353612156x440053061150048260?data-inicio=Sim' },
    ],
  },
  {
    nome: 'Alura',
    cor: '#368d79',
    certificados: [
      { titulo: 'Python: Começando com a Linguagem',                                   link: 'https://cursos.alura.com.br/user/imparcialista/course/python-introducao-a-linguagem/certificate' },
      { titulo: 'Python: Avançando na Linguagem',                                      link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-avancando-na-linguagem/certificate' },
      { titulo: 'Python: Entendendo a Orientação a Objetos',                           link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-intro-orientacao-objetos/certificate' },
      { titulo: 'Python: Trabalhando com I/O',                                         link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-trabalhando-com-io/certificate' },
      { titulo: 'Python: Avançando na Orientação a Objetos',                           link: 'https://cursos.alura.com.br/user/imparcialista/course/python-3-avancando-orientacao-objetos/certificate' },
      { titulo: 'Python Collections Parte 2: Conjuntos e Dicionários',                link: 'https://cursos.alura.com.br/user/imparcialista/course/python-collections-conjuntos-e-dicionarios/certificate' },
      { titulo: 'Python Collections Parte 1: Listas e Tuplas',                        link: 'https://cursos.alura.com.br/user/imparcialista/course/python-collections-listas-e-tuplas/certificate' },
      { titulo: 'String em Python: Extraindo Informações de uma URL',                  link: 'https://cursos.alura.com.br/user/imparcialista/course/string-python-extraindo-informacoes-url/certificate' },
      { titulo: 'Python Brasil: Validação de Dados no Padrão Nacional',               link: 'https://cursos.alura.com.br/user/imparcialista/course/python-validacao-dados/certificate' },
      { titulo: 'Python e TDD: Explorando Testes Unitários',                           link: 'https://cursos.alura.com.br/user/imparcialista/course/python-tdd-explorando-testes-unitarios/certificate' },
      { titulo: 'Python: Entendendo a Orientação a Objetos (avançado)',                link: 'https://cursos.alura.com.br/user/imparcialista/course/python-entendendo-orientacao-objetos/certificate' },
      { titulo: 'JavaScript e HTML: Desenvolva um Jogo e Pratique Lógica',            link: 'https://cursos.alura.com.br/user/imparcialista/course/logica-programacao-javascript-html/certificate' },
      { titulo: 'HTML e CSS: Classes, Posicionamento e Flexbox',                       link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-classes-posicionamento-flexbox/certificate' },
      { titulo: 'HTML e CSS: Cabeçalho, Footer e Variáveis CSS',                      link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-cabecalho-footer-variaveis-css/certificate' },
      { titulo: 'HTML e CSS: Ambientes de Desenvolvimento e Tags',                    link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-ambiente-arquivos-tags/certificate' },
      { titulo: 'HTML e CSS: Trabalhando com Responsividade e Publicação',            link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-responsividade-publicacao-projetos/certificate' },
      { titulo: 'HTML e CSS: Praticando HTML/CSS',                                    link: 'https://cursos.alura.com.br/user/imparcialista/course/html-css-praticando-html-css/certificate' },
      { titulo: 'Linux Onboarding: Usando a CLI de Forma Rápida e Prática',           link: 'https://cursos.alura.com.br/user/imparcialista/course/linux-onboarding-utilizar-cli-forma-rapida-pratica/certificate' },
      { titulo: 'DNS: Domine os Serviços na Nuvem',                                   link: 'https://cursos.alura.com.br/user/imparcialista/course/dns-como-servico-na-nuvem/certificate' },
      { titulo: 'Adobe Photoshop: Conceitos Essenciais',                              link: 'https://cursos.alura.com.br/user/imparcialista/course/introducao-photoshop-conceitos-essenciais/certificate' },
    ],
  },
];

const totalCerts = escolas.reduce((acc, e) => acc + e.certificados.length, 0);

export default function Certificados() {
  const [activeSchool, setActiveSchool] = useState(null);

  const filtered = activeSchool
    ? escolas.filter((e) => e.nome === activeSchool)
    : escolas;

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(180deg, #050505 0%, #080b14 100%)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #6479ed, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-600 mb-3">Conquistas</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            Certificados
          </h1>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-300">{totalCerts}</span> certificados em {escolas.length} escolas
          </p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent, #6479ed, transparent)' }} />
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <button
              onClick={() => setActiveSchool(null)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={!activeSchool ? { background: '#6479ed', color: '#fff' } : { color: '#6b7280' }}
            >
              Todos ({totalCerts})
            </button>
            {escolas.map((e) => (
              <button
                key={e.nome}
                onClick={() => setActiveSchool(activeSchool === e.nome ? null : e.nome)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={activeSchool === e.nome ? { background: e.cor, color: '#fff' } : { color: '#6b7280' }}
              >
                {e.nome} ({e.certificados.length})
              </button>
            ))}
          </div>
        </div>

        {/* Schools */}
        <div className="space-y-8">
          {filtered.map((escola) => (
            <section key={escola.nome}
              className="rounded-2xl border overflow-hidden"
              style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}
            >
              {/* School header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                <div className="w-2 h-2 rounded-full" style={{ background: escola.cor }} />
                <h2 className="text-base font-semibold text-white" style={{ color: 'inherit' }}>{escola.nome}</h2>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full font-medium"
                  style={{ color: escola.cor, background: `${escola.cor}18` }}>
                  {escola.certificados.length} cert.
                </span>
              </div>

              {/* Certificate grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
                style={{ background: 'rgba(255,255,255,0.04)' }}>
                {escola.certificados.map((cert, i) => (
                  <a
                    key={i}
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 p-4 transition-all duration-200"
                    style={{ background: 'rgba(10,10,10,0.6)' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = `rgba(${escola.cor === '#6479ed' ? '100,121,237' : '54,141,121'},0.06)`}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(10,10,10,0.6)'}
                  >
                    <div className="flex items-start gap-2.5 flex-1 min-w-0">
                      <div className="mt-1 w-1 h-1 rounded-full shrink-0" style={{ background: escola.cor }} />
                      <p className="text-sm text-gray-300 leading-snug group-hover:text-white transition-colors">
                        {cert.titulo}
                      </p>
                    </div>
                    <FaExternalLinkAlt
                      size={10}
                      className="shrink-0 mt-1 text-gray-700 group-hover:text-gray-400 transition-colors"
                    />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
