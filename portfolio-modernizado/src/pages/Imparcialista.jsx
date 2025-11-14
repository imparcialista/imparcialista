import React from 'react';
import { Link } from 'react-router-dom';
import { FaDiscord, FaTelegram, FaWhatsapp, FaTwitch, FaGithub, FaYoutube, FaLinkedin, FaInstagram, FaHeart, FaLaptopCode, FaLink, FaExternalLinkAlt } from 'react-icons/fa';

const Imparcialista = () => {
  const luarcoMarketing = {
    title: "Eleve seu E-commerce com o Luarco App!",
    subtitle: "Sua operação no piloto automático. Venda mais, gerencie menos.",
    buttonText: "Saiba Mais",
    buttonUrl: "/"
  };

  const linksByCategory = {
    "Comunidade": [
      {
        href: "https://discord.gg/5pzCSWnNu7",
        icon: <FaDiscord />,
        text: "Grupo do Discord",
        description: "Nossa comunidade para tirar dúvidas e fazer networking.",
        target: "_blank"
      },
      {
        href: "https://t.me/imparcialistas",
        icon: <FaTelegram />,
        text: "Grupo do Telegram",
        description: "Receba notificações e atualizações diretamente no seu Telegram.",
        target: "_blank"
      },
      {
        isGroup: true,
        icon: <FaWhatsapp />,
        text: "Grupos de WhatsApp sobre APIs",
        description: "Grupos focados para desenvolvedores e integradores.",
        subLinks: [
          {
            href: "https://chat.whatsapp.com/FFZZ8zMhUmTH82ptY8ENUK",
            text: "API Bling"
          },
          {
            href: "https://chat.whatsapp.com/FWvbahbK9PjBj9GmGMDWOi",
            text: "API Amazon"
          },
          {
            href: "https://chat.whatsapp.com/HJHJgHtT6Hr1v6k8FEsfEZ",
            text: "API Mercado Livre"
          }
        ]
      }
    ],
    "Conteúdo": [
      {
        href: "https://www.twitch.tv/imparcialista",
        icon: <FaTwitch />,
        text: "Twitch",
        description: "Faço lives sobre programação e tecnologia.",
        target: "_blank"
      },
      {
        href: "https://github.com/imparcialista",
        icon: <FaGithub />,
        text: "GitHub",
        description: "Todos os meus projetos de código aberto.",
        target: "_blank"
      },
      {
        href: "https://www.youtube.com/c/imparcialista",
        icon: <FaYoutube />,
        text: "YouTube",
        description: "Vídeos sobre desenvolvimento, APIs e automação.",
        target: "_blank"
      }
    ],
    "Profissional": [
      {
        href: "https://www.linkedin.com/in/lucas-araujo-costa/",
        icon: <FaLinkedin />,
        text: "LinkedIn",
        description: "Meu perfil profissional.",
        target: "_blank"
      },
      {
        href: "https://www.instagram.com/imparcialista/",
        icon: <FaInstagram />,
        text: "Instagram",
        description: "Mais sobre meu dia a dia.",
        target: "_blank"
      }
    ],
    "Luarco & Vendas": [
      {
        href: "https://apoia.se/imparcialista",
        icon: <FaHeart />,
        text: "Apoia-se do Canal",
        description: "Gosta do conteúdo? Considere me pagar um café!",
        target: "_blank"
      },
      {
        href: "/",
        icon: <FaLaptopCode />,
        text: "Aplicativo Luarco",
        description: "Acesse o dashboard da sua conta.",
        target: "_self"
      },
      {
        href: "/links",
        icon: <FaLink />,
        text: "Links Úteis para Marketplaces",
        description: "Uma coleção de links úteis para vendedores.",
        target: "_self"
      },
      {
        href: "https://www.mercadolivre.com.br/pagina/luarco.",
        icon: <FaLink />,
        text: "Minha Loja no Mercado Livre",
        description: "Produtos que recomendo. Você pode se afiliar e vender junto através do programa de Afiliados do Mercado Livre.",
        target: "_blank"
      }
    ]
  };

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Marketing Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text">
            {luarcoMarketing.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            {luarcoMarketing.subtitle}
          </p>
          <Link
            to={luarcoMarketing.buttonUrl}
            className="inline-flex items-center bg-gradient-to-r from-accent to-accent-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-accent-hover hover:to-accent-secondary-hover transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl hover-lift animate-pulse-slow relative overflow-hidden"
          >
            <span className="relative z-10">{luarcoMarketing.buttonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
          </Link>
        </div>

        {/* Links by Category */}
        <div className="space-y-12">
          {Object.entries(linksByCategory).map(([category, links]) => (
            <section key={category} className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
              <h2 className="text-3xl font-bold mb-8 text-links flex items-center">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {links.map((linkItem, index) => (
                  <div key={index} className="border-l-4 border-accent pl-4">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3 text-accent">{linkItem.icon}</span>
                      <h3 className="text-xl font-semibold text-accent">{linkItem.text}</h3>
                    </div>
                    <p className="text-gray-400 mb-4">{linkItem.description}</p>
                    {linkItem.isGroup ? (
                      <div className="space-y-2 ml-8">
                        {linkItem.subLinks.map((subLink, subIndex) => (
                          <a
                            key={subIndex}
                            href={subLink.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-md"
                          >
                            <FaExternalLinkAlt className="mr-2 text-sm" />
                            {subLink.text}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={linkItem.href}
                        target={linkItem.target}
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-accent transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <span className="text-xl mr-3 text-accent">{linkItem.icon}</span>
                        Acessar {linkItem.text}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imparcialista;