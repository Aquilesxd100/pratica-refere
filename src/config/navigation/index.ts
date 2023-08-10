export interface NavigationType {
  url: string;
  label: string;
}

const navigation: NavigationType[] = [
  { url: '/', label: 'Seguro de Automóvel' },
  { url: '/seguroDePessoa', label: 'Seguro de Pessoas' },
  { url: '/seguroDeCasa', label: 'Seguro de Residência' },
  { url: '/contratos', label: 'Contratos Feitos' },
  { url: '/user', label: 'User1' },
  { url: '/user2', label: 'User2' }
];

export default navigation;
