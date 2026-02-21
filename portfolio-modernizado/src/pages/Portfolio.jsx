import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaYoutube, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

const sites = [
  {
    nome: 'Luarco App',
    url: 'https://luarco.com/',
    tag: 'SaaS',
    tagColor: '#6479ed',
    descricao: 'Aplicativo de automações para vendedores e comerciantes no e-commerce.',
  },
  {
    nome: 'Lufin',
    url: 'https://lufin.com.br/',
    tag: 'Finanças',
    tagColor: '#368d79',
    descricao: 'Site para finanças pessoais e controle de gastos.',
  },
  {
    nome: 'CodeHealthAnalyzer',
    url: 'https://github.com/imparcialista/codehealthanalyzer',
    tag: 'Open Source',
    tagColor: '#69bbe0',
    descricao: 'Ferramenta em Python para análise de qualidade de código.',
  },
];

const experiencias = [
  {
    empresa: 'ZX CONTATO',
    local: 'Franco da Rocha',
    cargo: 'Gerente',
    periodo: 'fev. 2019 – presente',
    cor: '#6479ed',
  },
  {
    empresa: 'MD PAPÉIS',
    local: 'Caieiras',
    cargo: 'Aprendiz de T.I',
    periodo: 'fev. 2016 – jun. 2017',
    cor: '#368d79',
  },
];

const skillsIntermediarios = ['Python', 'Bling', 'Figma', 'AppSheet', 'Apps Script', 'Google Sheets', 'Google Ads', 'Google Analytics', 'Ecommerce', 'Marketplaces'];
const skillsBasicos = ['DaVinci Resolve', 'Adobe Photoshop', 'Adobe XD', 'Excel', 'Word'];

const quickLinks = [
  { label: 'Meu Curso',  href: 'https://hub.la/g/rzcIwxJl98a3gTblSVEh', bg: '#6479ed', icon: null,       external: true },
  { label: 'YouTube',   href: 'https://www.youtube.com/@imparcialista',    bg: '#ff0000', icon: FaYoutube,  external: true },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/lucas-araujo-costa/', bg: '#0a66c2', icon: FaLinkedin, external: true },
  { label: 'GitHub',    href: 'https://github.com/imparcialista',          bg: '#24292e', icon: FaGithub,   external: true },
];

// ── Shared section wrapper ──────────────────────────────────────────────────
function Section({ children, className = '' }) {
  return (
    <section
      className={`rounded-2xl p-6 sm:p-7 border ${className}`}
      style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      {children}
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600 mb-1">{children}</p>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-lg font-bold text-white mb-5" style={{ color: 'inherit' }}>{children}</h2>
  );
}

// ── Main export ─────────────────────────────────────────────────────────────
export const PortfolioSections = () => {
  return (
    <div className="relative py-16" style={{ background: 'linear-gradient(180deg, #050505 0%, #080b14 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Page header */}
        <div className="text-center mb-14 animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-600 mb-3">Portfólio</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Lucas Araujo Costa
          </h1>
          <p className="text-gray-500 text-sm">Desenvolvedor · 25 anos · Franco da Rocha, SP</p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent, #6479ed, transparent)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── LEFT COLUMN ─────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Objetivo */}
            <Section>
              <SectionLabel>Objetivo</SectionLabel>
              <SectionTitle>O que busco</SectionTitle>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expandir meu aplicativo dentro do mercado brasileiro, ajudar vendedores e comerciantes
                a crescer com ferramentas e automações que facilitam a vida das pessoas, economizando
                tempo para que possam focar em outras áreas da empresa.
              </p>
            </Section>

            {/* Qualificações */}
            <Section>
              <SectionLabel>Qualificações</SectionLabel>
              <SectionTitle>O que faço</SectionTitle>
              <p className="text-gray-400 text-sm leading-relaxed">
                Automação para visualização de estoque (integração com Bling e planilhas),
                planilha de precificação automática para marketplaces, e diversas outras
                automações em Python.
              </p>
            </Section>

            {/* Projetos */}
            <Section>
              <SectionLabel>Projetos</SectionLabel>
              <SectionTitle>Sites & Projetos</SectionTitle>
              <div className="flex flex-col gap-4">
                {sites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start justify-between gap-3 p-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                    style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = `${site.tagColor}40`}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{site.nome}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded font-medium"
                          style={{ color: site.tagColor, background: `${site.tagColor}18` }}>
                          {site.tag}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 leading-relaxed">{site.descricao}</p>
                    </div>
                    <FaExternalLinkAlt size={11} className="text-gray-600 group-hover:text-gray-400 mt-1 shrink-0 transition-colors" />
                  </a>
                ))}
              </div>
            </Section>
          </div>

          {/* ── RIGHT COLUMN ─────────────────────────── */}
          <div className="flex flex-col gap-6">

            {/* Experiência */}
            <Section>
              <SectionLabel>Carreira</SectionLabel>
              <SectionTitle>Experiência Profissional</SectionTitle>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                {experiencias.map((exp, i) => (
                  <div key={i} className="relative mb-5 last:mb-0">
                    <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full border-2"
                      style={{ borderColor: exp.cor, background: '#080b14' }} />
                    <p className="text-sm font-semibold text-white">{exp.empresa}
                      <span className="text-gray-600 font-normal"> · {exp.local}</span>
                    </p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: exp.cor }}>{exp.cargo}</p>
                    <p className="text-xs text-gray-600 mt-0.5">{exp.periodo}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Escolaridade */}
            <Section>
              <SectionLabel>Formação</SectionLabel>
              <SectionTitle>Escolaridade</SectionTitle>
              <div className="relative pl-4">
                <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                <div className="relative">
                  <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full border-2"
                    style={{ borderColor: '#368d79', background: '#080b14' }} />
                  <p className="text-sm font-semibold text-white">E.E. Benedito Fagundes Marques</p>
                  <p className="text-xs font-medium mt-0.5" style={{ color: '#368d79' }}>Ensino Médio Completo</p>
                  <p className="text-xs text-gray-600 mt-0.5">2014 – 2017 · Franco da Rocha, SP</p>
                </div>
              </div>
            </Section>

            {/* Conhecimentos */}
            <Section>
              <SectionLabel>Stack</SectionLabel>
              <SectionTitle>Conhecimentos</SectionTitle>

              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold" style={{ color: '#6479ed' }}>Intermediário</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-medium text-gray-600 border border-white/5">~80%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsIntermediarios.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-lg font-medium text-gray-300 border"
                      style={{ borderColor: 'rgba(100,121,237,0.25)', background: 'rgba(100,121,237,0.08)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold" style={{ color: '#368d79' }}>Básico</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded font-medium text-gray-600 border border-white/5">~50%</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillsBasicos.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-lg font-medium text-gray-400 border"
                      style={{ borderColor: 'rgba(54,141,121,0.2)', background: 'rgba(54,141,121,0.07)' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            {/* Links rápidos */}
            <Section>
              <SectionLabel>Acesso rápido</SectionLabel>
              <SectionTitle>Links Rápidos</SectionTitle>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map(({ label, href, bg, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                    style={{ background: bg }}
                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                  >
                    {Icon && <Icon size={14} />}
                    {label}
                  </a>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => <PortfolioSections />;
export default Portfolio;
