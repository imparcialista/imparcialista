import React from 'react';
import { FaYoutube, FaPlay } from 'react-icons/fa';

const secoes = [
  {
    api: 'API do Bling ERP',
    cor: '#f97316',
    tag: 'ERP',
    tutoriais: [
      { titulo: 'Como gerar e utilizar o Token do Bling ERP V3', link: 'https://youtu.be/SBQPVT2N5os' },
    ],
  },
  {
    api: 'API do Mercado Livre',
    cor: '#ffe600',
    corTexto: '#1a1a00',
    tag: 'OAuth 2.0',
    tutoriais: [
      { titulo: 'Como obter o Access Token em menos de 3 minutos',  link: 'https://youtu.be/l4qpOFXlCmA' },
      { titulo: 'Como obter o Access Token? Vídeo explicativo',     link: 'https://youtu.be/y_Bo9dzVmv0' },
      { titulo: 'Como pegar seus anúncios com Python',              link: 'https://youtu.be/hBztnbjf0-I' },
      { titulo: 'Como GERAR o Refresh Token automaticamente',       link: 'https://youtu.be/B8XP-5wwmBs' },
      { titulo: 'Erros mais comuns ao gerar o Access Token',        link: 'https://youtu.be/prFxQjHxDb0' },
      { titulo: 'Gerenciando estoque e preços de anúncios',         link: 'https://youtu.be/o8xLIPg0Wqk' },
    ],
  },
];

const totalTutoriais = secoes.reduce((acc, s) => acc + s.tutoriais.length, 0);

export default function Tutoriais() {
  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(180deg, #050505 0%, #080b14 100%)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ff0000, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-600 mb-3">Conteúdo</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            Tutoriais
          </h1>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-300">{totalTutoriais}</span> vídeos sobre integração com APIs
          </p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent, #ff0000, transparent)' }} />
        </div>

        {/* YouTube CTA */}
        <a
          href="https://www.youtube.com/@imparcialista"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between gap-4 rounded-2xl border p-5 mb-10 transition-all duration-200 hover:-translate-y-0.5"
          style={{ background: 'rgba(255,0,0,0.06)', borderColor: 'rgba(255,0,0,0.2)' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(255,0,0,0.4)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,0,0,0.2)'}
        >
          <div className="flex items-center gap-3">
            <FaYoutube size={24} className="text-red-500" />
            <div>
              <p className="text-sm font-semibold text-white">@imparcialista no YouTube</p>
              <p className="text-xs text-gray-500">Inscreva-se para não perder novos tutoriais</p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-lg text-white transition-all duration-200 group-hover:opacity-85"
            style={{ background: '#ff0000' }}>
            Inscrever
          </span>
        </a>

        {/* Tutorial sections */}
        <div className="space-y-8">
          {secoes.map((secao) => (
            <section key={secao.api}>
              {/* Section header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-4 rounded-full" style={{ background: secao.cor }} />
                <h2 className="text-base font-bold text-white" style={{ color: 'inherit' }}>{secao.api}</h2>
                <span className="text-[10px] px-2 py-0.5 rounded font-semibold"
                  style={{ color: secao.cor, background: `${secao.cor}18` }}>
                  {secao.tag}
                </span>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <span className="text-xs text-gray-600">{secao.tutoriais.length} vídeos</span>
              </div>

              {/* Cards */}
              <div className="flex flex-col gap-2">
                {secao.tutoriais.map((tutorial, i) => (
                  <a
                    key={i}
                    href={tutorial.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${secao.cor}40`;
                      e.currentTarget.style.background = `${secao.cor}08`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.background = 'rgba(10,10,10,0.6)';
                    }}
                  >
                    {/* Number */}
                    <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold"
                      style={{ background: `${secao.cor}18`, color: secao.cor }}>
                      {i + 1}
                    </div>

                    {/* Title */}
                    <p className="flex-1 text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {tutorial.titulo}
                    </p>

                    {/* Play button */}
                    <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                      style={{ background: 'rgba(255,0,0,0.15)' }}
                      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,0,0,0.3)'}
                    >
                      <FaPlay size={10} className="text-red-400" style={{ marginLeft: 1 }} />
                    </div>
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
