import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaDiscord, FaTelegram, FaWhatsapp, FaTwitch, FaGithub, FaYoutube,
  FaLinkedin, FaInstagram, FaHeart, FaLaptopCode, FaLink, FaExternalLinkAlt, FaChevronDown,
} from 'react-icons/fa';

const linksByCategory = [
  {
    category: 'Curso',
    cor: '#6479ed',
    links: [
      {
        href: 'https://hub.la/g/rzcIwxJl98a3gTblSVEh',
        icon: FaHeart,
        text: 'Curso — API Mercado Livre',
        description: 'O curso ainda está em construção. Apoie para que eu possa concluir!',
        external: true,
      },
    ],
  },
  {
    category: 'Comunidade',
    cor: '#7289da',
    links: [
      {
        href: 'https://discord.gg/5pzCSWnNu7',
        icon: FaDiscord,
        text: 'Discord',
        description: 'Nossa comunidade para tirar dúvidas e networking.',
        external: true,
      },
      {
        href: 'https://t.me/imparcialistas',
        icon: FaTelegram,
        text: 'Telegram',
        description: 'Receba notificações e atualizações diretamente.',
        external: true,
      },
      {
        icon: FaWhatsapp,
        text: 'Grupos de WhatsApp sobre APIs',
        description: 'Grupos focados para desenvolvedores e integradores.',
        isGroup: true,
        subLinks: [
          { href: 'https://chat.whatsapp.com/FFZZ8zMhUmTH82ptY8ENUK', text: 'API Bling' },
          { href: 'https://chat.whatsapp.com/FWvbahbK9PjBj9GmGMDWOi', text: 'API Amazon' },
          { href: 'https://chat.whatsapp.com/HJHJgHtT6Hr1v6k8FEsfEZ', text: 'API Mercado Livre' },
        ],
      },
    ],
  },
  {
    category: 'Conteúdo',
    cor: '#ff0000',
    links: [
      {
        href: 'https://www.twitch.tv/imparcialista',
        icon: FaTwitch,
        text: 'Twitch',
        description: 'Lives sobre programação e tecnologia.',
        external: true,
      },
      {
        href: 'https://github.com/imparcialista',
        icon: FaGithub,
        text: 'GitHub',
        description: 'Todos os meus projetos de código aberto.',
        external: true,
      },
      {
        href: 'https://www.youtube.com/c/imparcialista',
        icon: FaYoutube,
        text: 'YouTube',
        description: 'Vídeos sobre desenvolvimento, APIs e automação.',
        external: true,
      },
    ],
  },
  {
    category: 'Profissional',
    cor: '#0a66c2',
    links: [
      {
        href: 'https://www.linkedin.com/in/lucas-araujo-costa/',
        icon: FaLinkedin,
        text: 'LinkedIn',
        description: 'Meu perfil profissional.',
        external: true,
      },
      {
        href: 'https://www.instagram.com/imparcialista/',
        icon: FaInstagram,
        text: 'Instagram',
        description: 'Mais sobre meu dia a dia.',
        external: true,
      },
    ],
  },
  {
    category: 'Luarco & Vendas',
    cor: '#368d79',
    links: [
      {
        href: '/',
        icon: FaLaptopCode,
        text: 'Aplicativo Luarco',
        description: 'Acesse o dashboard da sua conta.',
        external: false,
      },
      {
        href: '/links',
        icon: FaLink,
        text: 'Links Úteis para Marketplaces',
        description: 'Uma coleção de links úteis para vendedores.',
        external: false,
      },
      {
        href: 'https://www.mercadolivre.com.br/pagina/luarco.',
        icon: FaLink,
        text: 'Minha Loja no Mercado Livre',
        description: 'Produtos que recomendo — você pode se afiliar e vender junto.',
        external: true,
      },
    ],
  },
];

function LinkCard({ item, cor }) {
  const [open, setOpen] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="rounded-xl border transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="flex items-start gap-3 p-4">
        {/* Icon */}
        <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
          style={{ background: `${cor}18`, border: `1px solid ${cor}30` }}>
          <Icon size={15} style={{ color: cor }} />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-white leading-tight mb-0.5">{item.text}</p>
          <p className="text-xs text-gray-500 leading-relaxed">{item.description}</p>

          {/* Group sub-links */}
          {item.isGroup && (
            <div className="mt-3">
              <button
                onClick={() => setOpen(!open)}
                className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
                style={{ color: cor }}
              >
                Ver grupos
                <FaChevronDown size={9} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
              </button>
              {open && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {item.subLinks.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200"
                      style={{ background: `${cor}20`, border: `1px solid ${cor}30` }}
                      onMouseEnter={(e) => e.currentTarget.style.background = `${cor}35`}
                      onMouseLeave={(e) => e.currentTarget.style.background = `${cor}20`}
                    >
                      <FaExternalLinkAlt size={9} />
                      {sub.text}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* CTA button */}
        {!item.isGroup && (
          item.external ? (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200"
              style={{ background: cor }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <FaExternalLinkAlt size={9} />
              Acessar
            </a>
          ) : (
            <Link
              to={item.href}
              className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all duration-200"
              style={{ background: cor }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <FaExternalLinkAlt size={9} />
              Acessar
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default function Imparcialista() {
  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(180deg, #050505 0%, #080b14 100%)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(circle, #368d79, transparent 70%)', transform: 'translate(30%, -30%)' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Hero banner */}
        <div className="relative rounded-2xl overflow-hidden mb-12 p-8 sm:p-10 text-center animate-fade-in"
          style={{ background: 'linear-gradient(135deg, rgba(100,121,237,0.15), rgba(54,141,121,0.1))', border: '1px solid rgba(100,121,237,0.2)' }}>
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #6479ed 0%, transparent 50%), radial-gradient(circle at 80% 50%, #368d79 0%, transparent 50%)' }} />
          <div className="relative z-10">
            <p className="text-[11px] uppercase tracking-[0.3em] mb-3" style={{ color: '#368d79' }}>Luarco App</p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Eleve seu E-commerce
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-lg mx-auto mb-6">
              Sua operação no piloto automático. Venda mais, gerencie menos.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
              style={{ background: 'linear-gradient(135deg, #6479ed, #368d79)' }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              Saiba Mais
            </Link>
          </div>
        </div>

        {/* Link categories */}
        <div className="space-y-8">
          {linksByCategory.map(({ category, cor, links }) => (
            <section key={category}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1.5 h-1.5 rounded-full" style={{ background: cor }} />
                <h2 className="text-sm font-semibold uppercase tracking-wider" style={{ color: cor, color: 'inherit' }}>
                  <span style={{ color: cor }}>{category}</span>
                </h2>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <span className="text-[10px] text-gray-600">{links.length} link{links.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex flex-col gap-2">
                {links.map((item, i) => (
                  <LinkCard key={i} item={item} cor={cor} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
