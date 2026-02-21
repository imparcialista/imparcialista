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
