import React from 'react';
import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';

const Links = () => {
  const linksMercadoLivre = [
    {
      titulo: 'Anúncios que precisam de atenção',
      subtitulo: 'Anúncios cancelados do Full',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_MODERATION_PENALTY%7CFULFILLMENT&page=1&sort=DEFAULT'
    },
    {
      titulo: 'Anúncios que precisam de atenção',
      subtitulo: 'Inativo por descumprir políticas',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=UNDER_REVIEW%7CCHANNEL_MARKETPLACE&page=1&task=MODERATE_MARKETPLACE'
    },
    {
      titulo: 'Anúncios que precisam de atenção',
      subtitulo: 'Anúncios para revisar',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_AND_INACTIVE_UNDER_REVIEW'
    },
    {
      titulo: 'Anúncios que precisam de atenção',
      subtitulo: 'Produtos considerados inflamáveis',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=OMNI_INFLAMMABLE&page=1'
    },
    {
      titulo: 'Anúncios que precisam de atenção',
      subtitulo: 'Anúncios cancelados ou para revisar',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_MODERATION_PENALTY&page=1&sort=DEFAULT'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Anúncios do Full com custo de estoque',
      link: 'https://www.mercadolivre.com.br/anuncios/lista/fee_storage?filters=with_charges&task=with_charges'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Anúncios inativos do Full',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS%7CINACTIVE%7CFULFILLMENT&page=1&sort=DEFAULT'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Produtos para retirar do Full',
      link: 'https://www.mercadolivre.com.br/anuncios/lista/stranded?filters=damaged_by_seller&page=1&task=to_withdraw'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Anúncios do Full com tempo de estoque',
      link: 'https://www.mercadolivre.com.br/anuncios/lista/aging?page=1'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Anúncios do Full sem vendas nos últimos 30 dias',
      link: 'https://www.mercadolivre.com.br/anuncios/lista/aging?page=1'
    },
    {
      titulo: 'Mercado Envios Full',
      subtitulo: 'Fora de venda no Full',
      link: 'https://www.mercadolivre.com.br/anuncios/lista/stranded?page=1'
    },
    {
      titulo: 'Anúncios de catálogo',
      subtitulo: 'Elegíveis para catálogo',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BUYBOX_STATUS&page=1'
    },
    {
      titulo: 'Anúncios de catálogo',
      subtitulo: 'Preço maior que a concorrência',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=PRICE_SUGGESTION%7CCHANNEL_MARKETPLACE&page=1&task=PRICE_BENCHMARK_MARKETPLACE'
    },
    {
      titulo: 'Anúncios de catálogo',
      subtitulo: 'Anúncios para ganhar no catálogo',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BUYBOX_LOSING%7CBUYBOX_SHARING_FIRST_PLACE%7CCHANNEL_MARKETPLACE&page=1&task=BUYBOX_LOSING_MARKETPLACE'
    },
    {
      titulo: 'Anúncios que podem ser melhorados',
      subtitulo: 'Precisa melhorar as fotos',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=ACTIVE_WITH_POOR_QUALITY_PICTURE%7CCHANNEL_MARKETPLACE&page=1&task=ACTIVE_WITH_POOR_QUALITY_PICTURE_MARKETPLACE'
    },
    {
      titulo: 'Anúncios que podem ser melhorados',
      subtitulo: 'Precisa melhorar a ficha técnica',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=CHANNEL_NO_PROXIMITY_AND_NO_MP_MERCHANTS|OMNI_ACTIVE_WITH_INCOMPLETE_TECHNICAL_SPECIFICATION&page=1&sort=DEFAULT'
    },
    {
      titulo: 'Anúncios que podem ser melhorados',
      subtitulo: 'Precisa melhorar os atributos',
      link: 'https://www.mercadolivre.com.br/anuncios/lista?filters=BASIC_HEALTH&page=1'
    },
    {
      titulo: 'Métricas da conta',
      subtitulo: 'Vendas dos últimos 30 dias',
      link: 'https://www.mercadolivre.com.br/metricas?filters=&from_current&start_period=lastMonth&to_current'
    },
    {
      titulo: 'Métricas da conta',
      subtitulo: 'Vendas dos últimos 30 dias do Full',
      link: 'https://www.mercadolivre.com.br/metricas?filters=LOGISTIC_TYPE.FULFILLMENT&from_current&start_period=lastMonth&to_current'
    }
  ];

  const linksShopee = [
    {
      titulo: 'Métricas principais',
      link: 'https://seller.shopee.com.br/datacenter/overview'
    },
    {
      titulo: 'Vendas ao vivo',
      link: 'https://seller.shopee.com.br/datacenter/liveboard?ADTAG=mydata&type=paid'
    }
  ];

  const linksMagalu = [
    {
      titulo: 'Reputação da conta',
      link: 'https://marketplace.integracommerce.com.br/SellerScore/Reputation'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Links Úteis
          </h1>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {/* Mercado Livre */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaLink className="inline mr-2" />
              Mercado Livre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linksMercadoLivre.map((linkItem, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-lg font-semibold text-accent">{linkItem.titulo}</p>
                  <p className="text-gray-400 mb-2">{linkItem.subtitulo}</p>
                  <a
                    href={linkItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Abrir link
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Shopee */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaLink className="inline mr-2" />
              Shopee
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linksShopee.map((linkItem, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-lg font-semibold text-accent">{linkItem.titulo}</p>
                  <a
                    href={linkItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Abrir link
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Magalu */}
          <section className="bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 glass">
            <h2 className="text-3xl font-bold mb-6 text-links flex items-center">
              <FaLink className="inline mr-2" />
              Magalu
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {linksMagalu.map((linkItem, index) => (
                <div key={index} className="border-l-4 border-accent pl-4">
                  <p className="text-lg font-semibold text-accent">{linkItem.titulo}</p>
                  <a
                    href={linkItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent-hover hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Abrir link
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

export default Links;