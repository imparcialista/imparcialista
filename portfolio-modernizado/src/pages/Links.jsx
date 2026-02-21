import React, { useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const marketplaces = [
  {
    nome: 'Mercado Livre',
    sigla: 'ML',
    cor: '#ffe600',
    corTexto: '#1a1a00',
    grupos: [
      {
        grupo: 'Anúncios com atenção necessária',
        links: [
          { titulo: 'Anúncios cancelados do Full',       link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_MODERATION_PENALTY%7CFULFILLMENT&page=1&sort=DEFAULT' },
          { titulo: 'Inativo por descumprir políticas',  link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=UNDER_REVIEW%7CCHANNEL_MARKETPLACE&page=1&task=MODERATE_MARKETPLACE' },
          { titulo: 'Anúncios para revisar',             link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_AND_INACTIVE_UNDER_REVIEW' },
          { titulo: 'Produtos inflamáveis',              link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=OMNI_INFLAMMABLE&page=1' },
          { titulo: 'Anúncios cancelados ou para revisar', link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_MODERATION_PENALTY&page=1&sort=DEFAULT' },
        ],
      },
      {
        grupo: 'Mercado Envios Full',
        links: [
          { titulo: 'Anúncios com custo de estoque',    link: 'https://www.mercadolivre.com.br/anuncios/lista/fee_storage?filters=with_charges&task=with_charges' },
          { titulo: 'Anúncios inativos do Full',        link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS%7CINACTIVE%7CFULFILLMENT&page=1&sort=DEFAULT' },
          { titulo: 'Produtos para retirar do Full',    link: 'https://www.mercadolivre.com.br/anuncios/lista/stranded?filters=damaged_by_seller&page=1&task=to_withdraw' },
          { titulo: 'Anúncios com tempo de estoque',    link: 'https://www.mercadolivre.com.br/anuncios/lista/aging?page=1' },
          { titulo: 'Sem vendas nos últimos 30 dias',   link: 'https://www.mercadolivre.com.br/anuncios/lista/aging?page=1' },
          { titulo: 'Fora de venda no Full',            link: 'https://www.mercadolivre.com.br/anuncios/lista/stranded?page=1' },
        ],
      },
      {
        grupo: 'Catálogo',
        links: [
          { titulo: 'Elegíveis para catálogo',          link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BUYBOX_STATUS&page=1' },
          { titulo: 'Preço maior que a concorrência',   link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=PRICE_SUGGESTION%7CCHANNEL_MARKETPLACE&page=1&task=PRICE_BENCHMARK_MARKETPLACE' },
          { titulo: 'Anúncios para ganhar no catálogo', link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BUYBOX_LOSING%7CBUYBOX_SHARING_FIRST_PLACE%7CCHANNEL_MARKETPLACE&page=1&task=BUYBOX_LOSING_MARKETPLACE' },
        ],
      },
      {
        grupo: 'Melhorias',
        links: [
          { titulo: 'Melhorar fotos',          link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_POOR_QUALITY_PICTURE%7CCHANNEL_MARKETPLACE&page=1&task=ACTIVE_WITH_POOR_QUALITY_PICTURE_MARKETPLACE' },
          { titulo: 'Melhorar ficha técnica',  link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS|OMNI_ACTIVE_WITH_INCOMPLETE_TECHNICAL_SPECIFICATION&page=1&sort=DEFAULT' },
          { titulo: 'Melhorar atributos',      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BASIC_HEALTH&page=1' },
        ],
      },
      {
        grupo: 'Métricas',
        links: [
          { titulo: 'Vendas dos últimos 30 dias',          link: 'https://www.mercadolivre.com.br/metricas?filters=&from_current&start_period=lastMonth&to_current' },
          { titulo: 'Vendas dos últimos 30 dias (Full)',   link: 'https://www.mercadolivre.com.br/metricas?filters=LOGISTIC_TYPE.FULFILLMENT&from_current&start_period=lastMonth&to_current' },
        ],
      },
    ],
  },
  {
    nome: 'Shopee',
    sigla: 'SH',
    cor: '#ee4d2d',
    corTexto: '#fff',
    grupos: [
      {
        grupo: 'Dados e Métricas',
        links: [
          { titulo: 'Métricas principais', link: 'https://seller.shopee.com.br/datacenter/overview' },
          { titulo: 'Vendas ao vivo',      link: 'https://seller.shopee.com.br/datacenter/liveboard?ADTAG=mydata&type=paid' },
        ],
      },
    ],
  },
  {
    nome: 'Magalu',
    sigla: 'MG',
    cor: '#0086ff',
    corTexto: '#fff',
    grupos: [
      {
        grupo: 'Conta',
        links: [
          { titulo: 'Reputação da conta', link: 'https://marketplace.integracommerce.com.br/SellerScore/Reputation' },
        ],
      },
    ],
  },
];

const totalLinks = marketplaces.reduce((acc, m) => acc + m.grupos.reduce((a, g) => a + g.links.length, 0), 0);

export default function Links() {
  const [activeMarket, setActiveMarket] = useState(null);

  const filtered = activeMarket ? marketplaces.filter((m) => m.nome === activeMarket) : marketplaces;

  return (
    <div className="min-h-screen relative" style={{ background: 'linear-gradient(180deg, #050505 0%, #080b14 100%)' }}>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-[0.04]"
        style={{ background: 'radial-gradient(circle, #ffe600, transparent 70%)', transform: 'translate(-30%, -30%)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-600 mb-3">Ferramentas</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-3">
            Links Úteis
          </h1>
          <p className="text-gray-500 text-sm">
            <span className="font-semibold text-gray-300">{totalLinks}</span> links em {marketplaces.length} marketplaces
          </p>
          <div className="w-16 h-px mx-auto mt-6" style={{ background: 'linear-gradient(90deg, transparent, #6479ed, transparent)' }} />
        </div>

        {/* Marketplace filter */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <button
              onClick={() => setActiveMarket(null)}
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
              style={!activeMarket ? { background: '#6479ed', color: '#fff' } : { color: '#6b7280' }}
            >
              Todos
            </button>
            {marketplaces.map((m) => (
              <button
                key={m.nome}
                onClick={() => setActiveMarket(activeMarket === m.nome ? null : m.nome)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={activeMarket === m.nome ? { background: m.cor, color: m.corTexto } : { color: '#6b7280' }}
              >
                {m.nome}
              </button>
            ))}
          </div>
        </div>

        {/* Marketplace sections */}
        <div className="space-y-10">
          {filtered.map((market) => (
            <div key={market.nome}>
              {/* Marketplace header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold shrink-0"
                  style={{ background: market.cor, color: market.corTexto }}>
                  {market.sigla}
                </div>
                <h2 className="text-lg font-bold text-white" style={{ color: 'inherit' }}>{market.nome}</h2>
                <div className="flex-1 h-px" style={{ background: 'rgba(255,255,255,0.05)' }} />
                <span className="text-xs text-gray-600">
                  {market.grupos.reduce((a, g) => a + g.links.length, 0)} links
                </span>
              </div>

              {/* Groups */}
              <div className="space-y-3">
                {market.grupos.map((grupo) => (
                  <div key={grupo.grupo}
                    className="rounded-2xl border overflow-hidden"
                    style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}>

                    {/* Group header */}
                    <div className="px-5 py-3 border-b flex items-center gap-2"
                      style={{ borderColor: 'rgba(255,255,255,0.04)', background: 'rgba(255,255,255,0.02)' }}>
                      <div className="w-1.5 h-1.5 rounded-full" style={{ background: market.cor }} />
                      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{grupo.grupo}</p>
                    </div>

                    {/* Links */}
                    <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                      {grupo.links.map((linkItem, i) => (
                        <a
                          key={i}
                          href={linkItem.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center justify-between gap-4 px-5 py-3.5 transition-all duration-200"
                          onMouseEnter={(e) => e.currentTarget.style.background = `${market.cor}08`}
                          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {linkItem.titulo}
                          </span>
                          <FaExternalLinkAlt
                            size={10}
                            className="shrink-0 text-gray-700 group-hover:text-gray-400 transition-colors"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
