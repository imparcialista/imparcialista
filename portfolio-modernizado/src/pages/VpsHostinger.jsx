import React from 'react';
import { FaExternalLinkAlt, FaCopy } from 'react-icons/fa';

const VpsHostinger = () => {
  const referralMain = 'https://hostinger.com.br?REFERRALCODE=imparcialista';

  const sections = [
    {
      periodo: '1 mês',
      descricao: 'Ideal para testes, projetos menores ou para começar no VPS.',
      planos: [
        {
          nome: 'VPS KVM 1',
          nivel: 'Entrada',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-07a1-73b5-9b41-4007753a79e4',
        },
        {
          nome: 'VPS KVM 2',
          nivel: 'Intermediário',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-2e4d-71d6-9132-a79334c5ea8a',
        },
        {
          nome: 'VPS KVM 4',
          nivel: 'Performance',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-3fe2-71a9-85f7-51022611d9c4',
        },
        {
          nome: 'VPS KVM 8',
          nivel: 'Alto tráfego',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-5306-7008-80ce-95555fc993ac',
        },
      ],
    },
    {
      periodo: '12 meses',
      descricao: 'Período anual com melhor custo-benefício para projetos em produção.',
      planos: [
        {
          nome: 'VPS KVM 1',
          nivel: 'Entrada',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-7ceb-70aa-aee6-b8bfad2914a1',
        },
        {
          nome: 'VPS KVM 2',
          nivel: 'Intermediário',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-891e-716a-8c00-4e24e9126617',
        },
        {
          nome: 'VPS KVM 4',
          nivel: 'Performance',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-91f8-72c8-b694-b2adcbad87a1',
        },
        {
          nome: 'VPS KVM 8',
          nivel: 'Alto tráfego',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-9ad8-73ff-a5ac-63710a85e854',
        },
      ],
    },
    {
      periodo: '24 meses',
      descricao: 'Para quem quer garantir preço melhor no longo prazo.',
      planos: [
        {
          nome: 'VPS KVM 1',
          nivel: 'Entrada',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-bfe7-738b-83f9-3f1643bc44df',
        },
        {
          nome: 'VPS KVM 2',
          nivel: 'Intermediário',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-c941-7195-82d8-c8d64fbe05f9',
        },
        {
          nome: 'VPS KVM 4',
          nivel: 'Performance',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-d360-72a6-98e0-64d9bcac6c0d',
        },
        {
          nome: 'VPS KVM 8',
          nivel: 'Alto tráfego',
          link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-db14-71ab-b421-15bc81215e1f',
        },
      ],
    },
  ];

  const handleCopy = async (link) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = link;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      alert('Link copiado para a área de transferência!');
    } catch (error) {
      alert(`Não foi possível copiar automaticamente. Copie manualmente: ${link}`);
    }
  };

  const handleOpen = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fundo com gradiente e brilhos */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black opacity-95" />
      <div className="absolute -top-32 -right-32 w-72 h-72 bg-accent rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-10" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Cabeçalho da página */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-secondary mb-3">
            Indicação exclusiva
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            VPS Hostinger com meu referral
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
            Escolha o plano de VPS ideal para o seu projeto e use meus links de indicação
            para contratar direto na Hostinger. Você pode copiar o link ou abrir a página
            de contratação em uma nova aba.
          </p>
        </div>

        {/* Card principal - link geral */}
        <section className="glass bg-gray-900/70 rounded-3xl p-6 sm:p-8 mb-10 shadow-2xl border border-white/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-accent mb-2">
                Página principal de indicação
              </h2>
              <p className="text-gray-300 mb-3 text-sm sm:text-base">
                Se você ainda não decidiu o plano, pode começar pelo link geral
                da minha página de indicação na Hostinger.
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400 bg-black/40 rounded-xl px-4 py-3 border border-white/5">
                Clique em "Copiar link" ou "Abrir página" para usar a indicação.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-[200px]">
              <button
                onClick={() => handleCopy(referralMain)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FaCopy className="mr-2" />
                Copiar link
              </button>
              <button
                onClick={() => handleOpen(referralMain)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-accent text-accent text-sm font-semibold hover:bg-accent hover:text-white transition-all duration-300"
              >
                <FaExternalLinkAlt className="mr-2" />
                Abrir página
              </button>
            </div>
          </div>
        </section>

        {/* Seções de planos */}
        <div className="space-y-8">
          {sections.map((section) => (
            <section
              key={section.periodo}
              className="glass bg-gray-900/70 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/5"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-links">
                    Planos VPS - {section.periodo}
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base mt-1">
                    {section.descricao}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/10 text-accent border border-accent/40">
                  Hostinger VPS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {section.planos.map((plano) => (
                  <div
                    key={plano.link}
                    className="group relative rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between hover:border-accent/70 hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <div className="relative z-10">
                      <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">
                        {plano.nivel}
                      </p>
                      <h3 className="text-lg font-semibold text-accent mb-2">
                        {plano.nome}
                      </h3>
                      <p className="text-[11px] text-gray-400 mb-4">
                        Use os botões abaixo para copiar o link ou abrir a página do plano.
                      </p>
                    </div>
                    <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                      <button
                        onClick={() => handleCopy(plano.link)}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg border border-accent text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <FaCopy className="mr-1.5" />
                        Copiar
                      </button>
                      <button
                        onClick={() => handleOpen(plano.link)}
                        className="inline-flex items-center px-3 py-1.5 rounded-lg border border-accent text-accent text-xs font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
                      >
                        <FaExternalLinkAlt className="mr-1.5" />
                        Abrir
                      </button>
                    </div>
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

export default VpsHostinger;
