import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaYoutube, FaEnvelope, FaDiscord } from 'react-icons/fa';

const socials = [
  { icon: FaGithub,   href: 'https://github.com/imparcialista',              label: 'GitHub'   },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/lucas-araujo-costa/', label: 'LinkedIn' },
  { icon: FaYoutube,  href: 'https://www.youtube.com/@imparcialista',          label: 'YouTube'  },
  { icon: FaDiscord,  href: 'https://discord.gg/5pzCSWnNu7',                  label: 'Discord'  },
];

const quickLinks = [
  { to: '/',               label: 'Home'           },
  { to: '/hostinger-vps',  label: 'VPS Hostinger'  },
  { to: '/imparcialista',  label: 'Todos os Links' },
  { to: '/certificados',   label: 'Certificados'   },
  { to: '/tutoriais',      label: 'Tutoriais'      },
  { to: '/links',          label: 'Links Úteis'    },
  { href: 'https://hub.la/g/rzcIwxJl98a3gTblSVEh', label: 'Meu Curso', external: true },
];

export default function Footer() {
  return (
    <footer className="border-t mt-16" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(5,5,5,0.8)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <span
              className="text-xl font-bold tracking-tight block mb-3"
              style={{ background: 'linear-gradient(135deg, #6479ed, #69bbe0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
            >
              @imparcialista
            </span>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Desenvolvedor focado em e-commerce, automações e integrações com marketplaces.
            </p>
            <a
              href="mailto:imparcialista@gmail.com"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-300 text-sm transition-colors duration-200"
            >
              <FaEnvelope size={13} />
              imparcialista@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-600 mb-4">Navegação</p>
            <div className="flex flex-col gap-2">
              {quickLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-sm text-gray-500 hover:text-gray-200 transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-600 mb-4">Redes Sociais</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-200 transition-colors duration-200"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Lucas Araujo. Todos os direitos reservados.</p>
          <p className="text-xs text-gray-700">Feito com React + Tailwind</p>
        </div>
      </div>
    </footer>
  );
}
