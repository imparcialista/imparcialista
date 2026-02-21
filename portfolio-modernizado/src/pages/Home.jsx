import React from 'react';
import lucasImage from '../assets/eu.jpg';
import { FaGithub, FaLinkedin, FaYoutube, FaArrowDown } from 'react-icons/fa';
import { PortfolioSections } from './Portfolio';

const stats = [
  { value: '6+',  label: 'anos com marketplaces' },
  { value: '21',  label: 'certificados'           },
  { value: '3',   label: 'projetos ativos'        },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background blobs */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050505 0%, #0c0e1a 50%, #050505 100%)' }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #6479ed, transparent 70%)', transform: 'translate(20%, -20%)' }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #368d79, transparent 70%)', transform: 'translate(-20%, 20%)' }} />

        {/* Floating dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[
            { top: '20%', left: '10%', size: 2, color: '#6479ed', delay: '0s'  },
            { top: '70%', left: '80%', size: 1, color: '#368d79', delay: '1s'  },
            { top: '45%', left: '55%', size: 3, color: '#69bbe0', delay: '2s'  },
            { top: '15%', left: '70%', size: 1, color: '#6479ed', delay: '0.5s'},
            { top: '80%', left: '25%', size: 2, color: '#368d79', delay: '1.5s'},
          ].map((dot, i) => (
            <div key={i} className="absolute rounded-full animate-float"
              style={{ top: dot.top, left: dot.left, width: dot.size * 4, height: dot.size * 4, background: dot.color, opacity: 0.4, animationDelay: dot.delay }} />
          ))}
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <div className="animate-fade-in-left space-y-8">
              <div>
                <span className="inline-block text-xs uppercase tracking-[0.3em] mb-4 px-3 py-1 rounded-full border"
                  style={{ color: '#368d79', borderColor: 'rgba(54,141,121,0.3)', background: 'rgba(54,141,121,0.08)' }}>
                  Desenvolvedor & Criador de conteúdo
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                  Transformando
                  <br />
                  <span style={{ background: 'linear-gradient(135deg, #6479ed, #69bbe0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    ideias
                  </span>{' '}em
                  <br />
                  <span style={{ background: 'linear-gradient(135deg, #368d79, #69bbe0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    soluções
                  </span> digitais
                </h1>
              </div>

              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                Olá! Eu sou o <strong className="text-white font-semibold">Lucas Araujo</strong>, trabalho há mais de 6 anos com marketplaces e{' '}
                <strong style={{ color: '#6479ed' }}>desenvolvi automações que simplificam a vida de quem vende no e-commerce.</strong>
                {' '}Estou disposto a mudar o jogo — me procure se ficou interessado.
              </p>

              {/* Stats */}
              <div className="flex gap-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/imparcialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white border border-white/10 hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/lucas-araujo-costa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: '#0a66c2' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@imparcialista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: '#ff0000' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <FaYoutube size={16} />
                  YouTube
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center lg:justify-end animate-fade-in-right">
              <div className="relative">
                {/* Glow ring */}
                <div className="absolute -inset-3 rounded-3xl opacity-30 blur-xl"
                  style={{ background: 'linear-gradient(135deg, #6479ed, #368d79)' }} />
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: '#6479ed' }} />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: '#368d79' }} />
                <img
                  src={lucasImage}
                  alt="Lucas Araujo"
                  className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Online badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                  style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Disponível para projetos
                </div>
              </div>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
            <span className="text-[10px] uppercase tracking-widest text-gray-400">scroll</span>
            <FaArrowDown size={10} className="text-gray-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── Portfolio Sections ───────────────────────────────────────────── */}
      <PortfolioSections />
    </>
  );
}
