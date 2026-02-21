import React, { useState } from 'react';
import { FaExternalLinkAlt, FaCopy, FaMicrochip, FaMemory, FaHdd, FaNetworkWired } from 'react-icons/fa';
import { REFERRAL_MAIN, VPS_PERIODOS, VPS_PLANOS } from '../data/vpsLinks';

// Máximos para calcular proporção das barras (baseado no KVM 8)
const SPEC_MAX = { vcpu: 8, ram: 32, ssd: 400, bandwidth: 8 };

const SPECS_META = [
  { key: 'vcpu',      icon: FaMicrochip,     label: 'vCPU',     unit: 'core',  unitPlural: 'cores' },
  { key: 'ram',       icon: FaMemory,        label: 'RAM',      unit: 'GB',    unitPlural: 'GB'    },
  { key: 'ssd',       icon: FaHdd,           label: 'NVMe SSD', unit: 'GB',    unitPlural: 'GB'    },
  { key: 'bandwidth', icon: FaNetworkWired,  label: 'Tráfego',  unit: 'TB/mês',unitPlural: 'TB/mês'},
];

function SpecBar({ value, max, color }) {
  const pct = Math.round((value / max) * 100);
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <div
        className="h-full rounded-full transition-all duration-700"
        style={{ width: `${pct}%`, backgroundColor: color }}
      />
    </div>
  );
}

function PlanoCard({ plano, link, onCopy, onOpen }) {
  const val = (key) => plano.specs[key];
  const unit = (meta) => val(meta.key) === 1 ? meta.unit : meta.unitPlural;

  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: 'rgba(10,10,10,0.7)',
        borderColor: plano.popular ? plano.cor : 'rgba(255,255,255,0.07)',
        boxShadow: plano.popular ? `0 0 0 1px ${plano.cor}40` : undefined,
      }}
    >
      {/* Faixa colorida no topo */}
      <div className="h-1 w-full" style={{ background: plano.cor }} />

      {/* Badge popular */}
      {plano.popular && (
        <div
          className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
          style={{ background: plano.cor }}
        >
          ★ Popular
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Cabeçalho do card */}
        <div>
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1 block"
            style={{ color: plano.cor }}
          >
            {plano.nivel}
          </span>
          <h3 className="text-xl font-bold text-white">{plano.nome}</h3>
          <span className="text-[11px] text-gray-500 mt-0.5 block">{plano.tag}</span>
        </div>

        {/* Specs com barras */}
        <div className="flex flex-col gap-3">
          {SPECS_META.map((meta) => {
            const Icon = meta.icon;
            return (
              <div key={meta.key}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Icon size={10} />
                    <span className="text-[11px]">{meta.label}</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold" style={{ color: plano.cor }}>
                    {val(meta.key)} {unit(meta)}
                  </span>
                </div>
                <SpecBar value={val(meta.key)} max={SPEC_MAX[meta.key]} color={plano.cor} />
              </div>
            );
          })}
        </div>

        {/* Ideal para */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Ideal para</p>
          <div className="flex flex-wrap gap-1.5">
            {plano.idealPara.map((uso) => (
              <span
                key={uso}
                className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{ borderColor: `${plano.cor}40`, color: plano.cor, background: `${plano.cor}10` }}
              >
                {uso}
              </span>
            ))}
          </div>
        </div>

        {/* Botões */}
        <div className="flex gap-2 mt-auto pt-2">
          <button
            onClick={() => onCopy(link)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 hover:text-white"
            style={{
              borderColor: `${plano.cor}60`,
              color: plano.cor,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = plano.cor; e.currentTarget.style.borderColor = plano.cor; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${plano.cor}60`; }}
          >
            <FaCopy size={10} />
            Copiar link
          </button>
          <button
            onClick={() => onOpen(link)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200"
            style={{ background: plano.cor }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <FaExternalLinkAlt size={9} />
            Contratar
          </button>
        </div>
      </div>
    </div>
  );
}

export default function VpsHostinger() {
  const [periodoIdx, setPeriodoIdx] = useState(1); // padrão: 12 meses
  const [copied, setCopied] = useState(false);

  const handleCopy = async (link) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(link);
      } else {
        const ta = document.createElement('textarea');
        ta.value = link;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert(`Copie manualmente: ${link}`);
    }
  };

  const handleOpen = (link) => window.open(link, '_blank', 'noopener,noreferrer');

  const periodoAtual = VPS_PERIODOS[periodoIdx];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-15" style={{ background: '#6479ed' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: '#368d79' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Cabeçalho */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent-secondary mb-3">
            Indicação exclusiva
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            VPS Hostinger com meu referral
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Compare os planos, escolha o ideal para o seu projeto e use meu link de indicação
            para contratar direto na Hostinger.
          </p>
        </div>

        {/* Card link geral */}
        <section className="glass rounded-2xl p-5 sm:p-6 mb-10 border border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-base font-semibold text-white mb-1" style={{ color: 'inherit' }}>
                Página principal de indicação
              </h2>
              <p className="text-gray-500 text-xs font-mono break-all">{REFERRAL_MAIN}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={() => handleCopy(REFERRAL_MAIN)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-accent/40 text-accent text-xs font-semibold hover:bg-accent hover:text-white hover:border-accent transition-all duration-200"
              >
                <FaCopy size={10} />
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button
                onClick={() => handleOpen(REFERRAL_MAIN)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white text-xs font-semibold hover:opacity-85 transition-all duration-200"
              >
                <FaExternalLinkAlt size={9} />
                Abrir
              </button>
            </div>
          </div>
        </section>

        {/* Seletor de período */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
            {VPS_PERIODOS.map((p, i) => (
              <button
                key={p.periodo}
                onClick={() => setPeriodoIdx(i)}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
                style={
                  periodoIdx === i
                    ? { background: '#6479ed', color: '#fff' }
                    : { color: '#6b7280' }
                }
              >
                {p.periodo}
              </button>
            ))}
          </div>
        </div>

        {/* Descrição do período */}
        <p className="text-center text-gray-500 text-sm mb-8">{periodoAtual.descricao}</p>

        {/* Grid de cards de planos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {VPS_PLANOS.map((plano, idx) => (
            <PlanoCard
              key={plano.id}
              plano={plano}
              link={periodoAtual.planos[idx].link}
              onCopy={handleCopy}
              onOpen={handleOpen}
            />
          ))}
        </div>

        {/* Legenda comparativa */}
        <div className="mt-10 glass rounded-2xl p-5 border border-white/5">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Comparativo rápido</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-500 text-xs">
                  <th className="text-left pb-3 pr-4 font-medium">Plano</th>
                  {SPECS_META.map((m) => (
                    <th key={m.key} className="text-right pb-3 px-3 font-medium">{m.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VPS_PLANOS.map((plano) => (
                  <tr key={plano.id} className="border-t border-white/5">
                    <td className="py-2.5 pr-4">
                      <span className="font-semibold text-white">{plano.nome}</span>
                      <span className="ml-2 text-[10px] text-gray-500">{plano.nivel}</span>
                    </td>
                    {SPECS_META.map((meta) => (
                      <td key={meta.key} className="py-2.5 px-3 text-right font-mono text-xs" style={{ color: plano.cor }}>
                        {plano.specs[meta.key]} {meta.unit}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
