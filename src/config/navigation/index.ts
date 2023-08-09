export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  { url: '/', label: 'Seguro de Automóvel' },
  { url: '/seguroDePessoa', label: 'Seguro de Pessoas' },
  { url: '/seguroDeCasa', label: 'Seguro de Residência' },
  { url: '/contratos', label: 'Contratos Feitos' }
];

export default navigation;
