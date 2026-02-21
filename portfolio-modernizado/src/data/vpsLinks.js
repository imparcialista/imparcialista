export const REFERRAL_MAIN = 'https://hostinger.com.br?REFERRALCODE=imparcialista';

// Specs e metadados de cada plano (independente do período).
// Atualize aqui se a Hostinger mudar as configurações.
export const VPS_PLANOS = [
  {
    id: 'kvm1',
    nome: 'KVM 1',
    nivel: 'Entrada',
    tag: 'Para começar',
    cor: '#64748b',
    specs: { vcpu: 1, ram: 4, ssd: 50, bandwidth: 1 },
    idealPara: ['Aprender Linux', 'Apps pessoais', 'Bots e scripts', 'Projetos iniciais'],
  },
  {
    id: 'kvm2',
    nome: 'KVM 2',
    nivel: 'Intermediário',
    tag: 'Mais popular',
    popular: true,
    cor: '#6479ed',
    specs: { vcpu: 2, ram: 8, ssd: 100, bandwidth: 2 },
    idealPara: ['WordPress', 'APIs em produção', 'Servidor de jogos leve', 'Projetos em equipe'],
  },
  {
    id: 'kvm4',
    nome: 'KVM 4',
    nivel: 'Performance',
    tag: 'Recomendado',
    cor: '#368d79',
    specs: { vcpu: 4, ram: 16, ssd: 200, bandwidth: 4 },
    idealPara: ['E-commerce', 'Múltiplos sites', 'Banco de dados', 'CI/CD pipelines'],
  },
  {
    id: 'kvm8',
    nome: 'KVM 8',
    nivel: 'Alto tráfego',
    tag: 'Máxima potência',
    cor: '#f59e0b',
    specs: { vcpu: 8, ram: 32, ssd: 400, bandwidth: 8 },
    idealPara: ['Alto tráfego', 'Machine learning', 'Infraestrutura empresarial', 'Clusters'],
  },
];

// ─── Hospedagem de Sites ──────────────────────────────────────────────────────
// Atualize os links aqui quando a promoção mudar.
export const HOSTING_PLANOS = [
  {
    id: 'premium',
    nome: 'Premium',
    nivel: 'Essencial',
    tag: 'Mais popular',
    popular: true,
    cor: '#6479ed',
    specs: { sites: 100, storage: 100, email: 100, ssl: 1 },
    idealPara: ['Blogs', 'Portfólios', 'Sites pessoais', 'Projetos iniciais'],
  },
  {
    id: 'business',
    nome: 'Business',
    nivel: 'Profissional',
    tag: 'Recomendado',
    cor: '#368d79',
    specs: { sites: 100, storage: 200, email: 100, ssl: 1 },
    extras: ['CDN gratuita', 'Backup diário'],
    idealPara: ['E-commerce', 'WordPress', 'Sites profissionais', 'Pequenas empresas'],
  },
  {
    id: 'cloud_economy',
    nome: 'Cloud Economy',
    nivel: 'Cloud',
    tag: 'Máxima performance',
    cor: '#f59e0b',
    specs: { sites: 300, storage: 200, email: 100, ssl: 1 },
    extras: ['3 GB RAM dedicada', '2 vCPU', 'CDN gratuita', 'Backup diário'],
    idealPara: ['Alto tráfego', 'Múltiplos clientes', 'Agências', 'Projetos escaláveis'],
  },
];

export const HOSTING_PERIODOS = [
  {
    periodo: '12 meses',
    descricao: 'Melhor entrada com preço competitivo.',
    planos: [
      { id: 'premium',       link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_premium&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800b-787d-711b-a014-8b470fa5746e' },
      { id: 'business',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_business&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800b-b4f5-7277-b090-bb884939b3e3' },
      { id: 'cloud_economy', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800b-cb41-72a8-bbc9-e8de545ea5e3' },
    ],
  },
  {
    periodo: '24 meses',
    descricao: 'Melhor custo-benefício para projetos em produção.',
    planos: [
      { id: 'premium',       link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_premium&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800b-edfb-725e-b55b-ecab80907b33' },
      { id: 'business',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_business&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800c-04da-73bd-bed2-00c997ce284f' },
      { id: 'cloud_economy', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800c-20af-7393-9b5f-f2c2f7033af3' },
    ],
  },
  {
    periodo: '48 meses',
    descricao: 'Máxima economia no longo prazo.',
    planos: [
      { id: 'premium',       link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_premium&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800c-3f35-7372-888d-154ced5cfa63' },
      { id: 'business',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Ahostinger_business&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800c-53eb-7299-9318-9164e895dfdc' },
      { id: 'cloud_economy', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c800c-68da-70dd-bfb7-1f5acd9c41d6' },
    ],
  },
];

// ─── Hospedagem Cloud ─────────────────────────────────────────────────────────
export const CLOUD_PLANOS = [
  {
    id: 'cloud_economy',
    nome: 'Cloud Economy',
    nivel: 'Entrada Cloud',
    tag: 'Mais popular',
    popular: true,
    cor: '#6479ed',
    specs: { vcpu: 2, ram: 3, ssd: 200, sites: 300 },
    extras: ['CDN gratuita', 'Backup diário', 'IP dedicado'],
    idealPara: ['Alto tráfego', 'WordPress avançado', 'Múltiplos sites', 'Lojas online'],
  },
  {
    id: 'cloud_professional',
    nome: 'Cloud Professional',
    nivel: 'Profissional',
    tag: 'Recomendado',
    cor: '#368d79',
    specs: { vcpu: 4, ram: 6, ssd: 250, sites: 300 },
    extras: ['CDN gratuita', 'Backup diário', 'IP dedicado'],
    idealPara: ['Agências', 'E-commerce robusto', 'Apps de alto desempenho', 'SaaS'],
  },
  {
    id: 'cloud_enterprise',
    nome: 'Cloud Enterprise',
    nivel: 'Máxima potência',
    tag: 'Para grandes projetos',
    cor: '#f59e0b',
    specs: { vcpu: 6, ram: 12, ssd: 300, sites: 300 },
    extras: ['CDN gratuita', 'Backup diário', 'IP dedicado', 'Suporte prioritário'],
    idealPara: ['Grandes empresas', 'Infraestrutura crítica', 'Plataformas escaláveis', 'Alto volume'],
  },
];

export const CLOUD_PERIODOS = [
  {
    periodo: '1 mês',
    descricao: 'Experimente a hospedagem cloud sem compromisso.',
    planos: [
      { id: 'cloud_economy',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-08ef-72f2-9b78-026dd4428615' },
      { id: 'cloud_professional', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_professional&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-3f23-729c-bb79-a4ffc76cd849' },
      { id: 'cloud_enterprise',   link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_enterprise&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-57f8-71ba-ad9d-948c126cb832' },
    ],
  },
  {
    periodo: '12 meses',
    descricao: 'Melhor entrada anual com preço competitivo.',
    planos: [
      { id: 'cloud_economy',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-7799-7288-bb89-4ae6b60ea00b' },
      { id: 'cloud_professional', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_professional&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-8dfb-70c3-98bb-946024cb8e08' },
      { id: 'cloud_enterprise',   link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_enterprise&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-a2f5-705f-8dcd-8bf889236913' },
    ],
  },
  {
    periodo: '24 meses',
    descricao: 'Melhor custo-benefício para projetos em produção.',
    planos: [
      { id: 'cloud_economy',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-c5b3-7019-8962-845838029f42' },
      { id: 'cloud_professional', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_professional&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-d82a-7371-8452-a10d596dcc72' },
      { id: 'cloud_enterprise',   link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_enterprise&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-e354-736d-b70d-940a405c93f0' },
    ],
  },
  {
    periodo: '48 meses',
    descricao: 'Máxima economia no longo prazo.',
    planos: [
      { id: 'cloud_economy',      link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_economy&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8014-f73e-714e-ad61-ef181e109fcd' },
      { id: 'cloud_professional', link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_professional&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8015-02bc-7235-87e5-bd76aa7edcdf' },
      { id: 'cloud_enterprise',   link: 'https://www.hostinger.com.br/cart?product=hosting%3Acloud_enterprise&period=48&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c8015-0ee0-7394-ae81-16ab19b6d934' },
    ],
  },
];

// ─── VPS ─────────────────────────────────────────────────────────────────────
export const VPS_PERIODOS = [
  {
    periodo: '1 mês',
    descricao: 'Ideal para testes, projetos menores ou para começar no VPS.',
    planos: [
      { nome: 'VPS KVM 1', nivel: 'Entrada',      link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-07a1-73b5-9b41-4007753a79e4' },
      { nome: 'VPS KVM 2', nivel: 'Intermediário', link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-2e4d-71d6-9132-a79334c5ea8a' },
      { nome: 'VPS KVM 4', nivel: 'Performance',   link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-3fe2-71a9-85f7-51022611d9c4' },
      { nome: 'VPS KVM 8', nivel: 'Alto tráfego',  link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=1&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-5306-7008-80ce-95555fc993ac' },
    ],
  },
  {
    periodo: '12 meses',
    descricao: 'Período anual com melhor custo-benefício para projetos em produção.',
    planos: [
      { nome: 'VPS KVM 1', nivel: 'Entrada',      link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-7ceb-70aa-aee6-b8bfad2914a1' },
      { nome: 'VPS KVM 2', nivel: 'Intermediário', link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-891e-716a-8c00-4e24e9126617' },
      { nome: 'VPS KVM 4', nivel: 'Performance',   link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-91f8-72c8-b694-b2adcbad87a1' },
      { nome: 'VPS KVM 8', nivel: 'Alto tráfego',  link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=12&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-9ad8-73ff-a5ac-63710a85e854' },
    ],
  },
  {
    periodo: '24 meses',
    descricao: 'Para quem quer garantir preço melhor no longo prazo.',
    planos: [
      { nome: 'VPS KVM 1', nivel: 'Entrada',      link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_1&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-bfe7-738b-83f9-3f1643bc44df' },
      { nome: 'VPS KVM 2', nivel: 'Intermediário', link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_2&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-c941-7195-82d8-c8d64fbe05f9' },
      { nome: 'VPS KVM 4', nivel: 'Performance',   link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_4&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-d360-72a6-98e0-64d9bcac6c0d' },
      { nome: 'VPS KVM 8', nivel: 'Alto tráfego',  link: 'https://www.hostinger.com.br/cart?product=vps%3Avps_kvm_8&period=24&referral_type=cart_link&REFERRALCODE=imparcialista&referral_id=019c7fed-db14-71ab-b421-15bc81215e1f' },
    ],
  },
];
