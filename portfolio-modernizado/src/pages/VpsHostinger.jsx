import React, { useState } from 'react';
import {
  FaExternalLinkAlt, FaCopy, FaMicrochip, FaMemory, FaHdd,
  FaNetworkWired, FaGlobe, FaDatabase, FaEnvelope, FaShieldAlt,
} from 'react-icons/fa';
import {
  REFERRAL_MAIN,
  VPS_PERIODOS, VPS_PLANOS,
  HOSTING_PERIODOS, HOSTING_PLANOS,
} from '../data/vpsLinks';

// ─── Configurações por categoria ─────────────────────────────────────────────

const CATEGORIAS = [
  { id: 'hosting', label: 'Hospedagem de Sites' },
  { id: 'vps',     label: 'VPS'                 },
  // Futuras categorias entram aqui
];

const VPS_SPEC_MAX  = { vcpu: 8, ram: 32, ssd: 400, bandwidth: 8 };
const VPS_SPEC_META = [
  { key: 'vcpu',      icon: FaMicrochip,    label: 'vCPU',     unit: 'core',   unitPlural: 'cores'  },
  { key: 'ram',       icon: FaMemory,       label: 'RAM',      unit: 'GB',     unitPlural: 'GB'     },
  { key: 'ssd',       icon: FaHdd,          label: 'NVMe SSD', unit: 'GB',     unitPlural: 'GB'     },
  { key: 'bandwidth', icon: FaNetworkWired, label: 'Tráfego',  unit: 'TB/mês', unitPlural: 'TB/mês' },
];

const HOSTING_SPEC_MAX  = { sites: 300, storage: 200, email: 100 };
const HOSTING_SPEC_META = [
  { key: 'sites',   icon: FaGlobe,    label: 'Sites',    unit: 'site',  unitPlural: 'sites'  },
  { key: 'storage', icon: FaDatabase, label: 'Armazen.', unit: 'GB',    unitPlural: 'GB'     },
  { key: 'email',   icon: FaEnvelope, label: 'E-mails',  unit: 'conta', unitPlural: 'contas' },
];

// ─── Componentes compartilhados ───────────────────────────────────────────────

function SpecBar({ value, max, color }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, backgroundColor: color }} />
    </div>
  );
}

function PlanoCard({ plano, specMeta, specMax, link, onCopy, onOpen }) {
  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: 'rgba(10,10,10,0.7)',
        borderColor: plano.popular ? plano.cor : 'rgba(255,255,255,0.07)',
        boxShadow: plano.popular ? `0 0 0 1px ${plano.cor}40` : undefined,
      }}
    >
      <div className="h-1 w-full" style={{ background: plano.cor }} />

      {plano.popular && (
        <div className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full text-white"
          style={{ background: plano.cor }}>
          ★ Popular
        </div>
      )}

      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Header */}
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-1 block" style={{ color: plano.cor }}>
            {plano.nivel}
          </span>
          <h3 className="text-xl font-bold text-white">{plano.nome}</h3>
          <span className="text-[11px] text-gray-500 mt-0.5 block">{plano.tag}</span>
        </div>

        {/* Spec bars */}
        <div className="flex flex-col gap-3">
          {specMeta.map((meta) => {
            const Icon = meta.icon;
            const val = plano.specs[meta.key];
            const label = val === 1 ? meta.unit : meta.unitPlural;
            return (
              <div key={meta.key}>
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-1.5 text-gray-400">
                    <Icon size={10} />
                    <span className="text-[11px]">{meta.label}</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold" style={{ color: plano.cor }}>
                    {val} {label}
                  </span>
                </div>
                <SpecBar value={val} max={specMax[meta.key]} color={plano.cor} />
              </div>
            );
          })}
        </div>

        {/* Extras (se houver) */}
        {plano.extras && plano.extras.length > 0 && (
          <div className="flex flex-col gap-1">
            {plano.extras.map((extra) => (
              <div key={extra} className="flex items-center gap-1.5">
                <FaShieldAlt size={9} style={{ color: plano.cor }} />
                <span className="text-[11px] text-gray-400">{extra}</span>
              </div>
            ))}
          </div>
        )}

        {/* Ideal para */}
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Ideal para</p>
          <div className="flex flex-wrap gap-1.5">
            {plano.idealPara.map((uso) => (
              <span key={uso} className="text-[10px] px-2 py-0.5 rounded-full border"
                style={{ borderColor: `${plano.cor}40`, color: plano.cor, background: `${plano.cor}10` }}>
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
            style={{ borderColor: `${plano.cor}60`, color: plano.cor }}
            onMouseEnter={(e) => { e.currentTarget.style.background = plano.cor; e.currentTarget.style.borderColor = plano.cor; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = `${plano.cor}60`; }}
          >
            <FaCopy size={10} /> Copiar
          </button>
          <button
            onClick={() => onOpen(link)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200"
            style={{ background: plano.cor }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
          >
            <FaExternalLinkAlt size={9} /> Contratar
          </button>
        </div>
      </div>
    </div>
  );
}

function TabelaComparativa({ planos, specMeta }) {
  return (
    <div className="mt-10 rounded-2xl border p-5" style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}>
      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Comparativo rápido</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-gray-600 text-xs">
              <th className="text-left pb-3 pr-4 font-medium">Plano</th>
              {specMeta.map((m) => (
                <th key={m.key} className="text-right pb-3 px-3 font-medium">{m.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {planos.map((plano) => (
              <tr key={plano.id} className="border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                <td className="py-2.5 pr-4">
                  <span className="font-semibold text-white">{plano.nome}</span>
                  <span className="ml-2 text-[10px] text-gray-600">{plano.nivel}</span>
                </td>
                {specMeta.map((meta) => (
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
  );
}

// ─── Seção VPS ────────────────────────────────────────────────────────────────

function SecaoVPS({ onCopy, onOpen }) {
  const [periodoIdx, setPeriodoIdx] = useState(1);
  const periodo = VPS_PERIODOS[periodoIdx];

  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {VPS_PERIODOS.map((p, i) => (
            <button key={p.periodo} onClick={() => setPeriodoIdx(i)}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={periodoIdx === i ? { background: '#6479ed', color: '#fff' } : { color: '#6b7280' }}>
              {p.periodo}
            </button>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mb-8">{periodo.descricao}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {VPS_PLANOS.map((plano, idx) => (
          <PlanoCard key={plano.id} plano={plano}
            specMeta={VPS_SPEC_META} specMax={VPS_SPEC_MAX}
            link={periodo.planos[idx].link}
            onCopy={onCopy} onOpen={onOpen} />
        ))}
      </div>
      <TabelaComparativa planos={VPS_PLANOS} specMeta={VPS_SPEC_META} />
    </>
  );
}

// ─── Seção Hospedagem de Sites ────────────────────────────────────────────────

function SecaoHosting({ onCopy, onOpen }) {
  const [periodoIdx, setPeriodoIdx] = useState(1);
  const periodo = HOSTING_PERIODOS[periodoIdx];

  return (
    <>
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.05)' }}>
          {HOSTING_PERIODOS.map((p, i) => (
            <button key={p.periodo} onClick={() => setPeriodoIdx(i)}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200"
              style={periodoIdx === i ? { background: '#6479ed', color: '#fff' } : { color: '#6b7280' }}>
              {p.periodo}
            </button>
          ))}
        </div>
      </div>
      <p className="text-center text-gray-500 text-sm mb-8">{periodo.descricao}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {HOSTING_PLANOS.map((plano) => {
          const linkObj = periodo.planos.find((p) => p.id === plano.id);
          return (
            <PlanoCard key={plano.id} plano={plano}
              specMeta={HOSTING_SPEC_META} specMax={HOSTING_SPEC_MAX}
              link={linkObj?.link ?? '#'}
              onCopy={onCopy} onOpen={onOpen} />
          );
        })}
      </div>
      <TabelaComparativa planos={HOSTING_PLANOS} specMeta={HOSTING_SPEC_META} />
    </>
  );
}

// ─── Página principal ─────────────────────────────────────────────────────────

export default function VpsHostinger() {
  const [categoria, setCategoria] = useState('hosting');
  const [copied, setCopied] = useState(false);

  const handleCopy = async (link) => {
    try {
      if (navigator.clipboard?.writeText) {
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

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #050505 0%, #080b14 60%, #050505 100%)' }} />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: '#6479ed' }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-08" style={{ background: '#368d79' }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Cabeçalho */}
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gray-600 mb-3">Indicação exclusiva</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4"
            style={{ background: 'linear-gradient(135deg, #6479ed, #69bbe0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Hostinger com meu referral
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Compare os planos, escolha o ideal e use meu link de indicação para contratar direto na Hostinger.
          </p>
        </div>

        {/* Card link geral */}
        <div className="rounded-2xl p-5 mb-10 border" style={{ background: 'rgba(10,10,10,0.6)', borderColor: 'rgba(255,255,255,0.06)' }}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-gray-400 mb-1">Link geral de indicação</p>
              <p className="text-gray-600 text-xs font-mono break-all">{REFERRAL_MAIN}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button onClick={() => handleCopy(REFERRAL_MAIN)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold transition-all duration-200"
                style={{ borderColor: 'rgba(100,121,237,0.4)', color: '#6479ed' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#6479ed'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#6479ed'; }}>
                <FaCopy size={10} />
                {copied ? 'Copiado!' : 'Copiar'}
              </button>
              <button onClick={() => handleOpen(REFERRAL_MAIN)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white transition-all duration-200"
                style={{ background: '#6479ed' }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                <FaExternalLinkAlt size={9} /> Abrir
              </button>
            </div>
          </div>
        </div>

        {/* Abas de categoria */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-xl p-1 gap-1" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {CATEGORIAS.map((cat) => (
              <button key={cat.id} onClick={() => setCategoria(cat.id)}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200"
                style={categoria === cat.id
                  ? { background: '#6479ed', color: '#fff', boxShadow: '0 2px 12px rgba(100,121,237,0.3)' }
                  : { color: '#6b7280' }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Conteúdo da categoria */}
        {categoria === 'hosting' && <SecaoHosting onCopy={handleCopy} onOpen={handleOpen} />}
        {categoria === 'vps'     && <SecaoVPS     onCopy={handleCopy} onOpen={handleOpen} />}

      </div>
    </div>
  );
}
