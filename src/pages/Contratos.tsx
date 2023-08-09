import { ThemeContext } from '../App';
import InputStyled from '../components/InputStyled';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useContext, useState } from 'react';

const Contratos = () => {
  const { data } = useContext(ThemeContext);
  const [search, setSearch] = useState('');

  const contratos =
    search.length > 0 ? data.filter(contrato => contrato.contrato.toUpperCase().includes(search.toUpperCase())) : [];

  return (
    <>
      <DefaultLayout>
        <h1>Contratos</h1>
        <InputStyled
          placeholder="Procurar tipo de Seguro..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
          }}
        />

        <div style={{ display: 'flex', gap: '20px', padding: '30px' }}>
          {!data.length ? (
            <h3>Nenhum seguro feito</h3>
          ) : search.length > 0 ? (
            contratos.map(contrato => {
              if (contrato.contrato === 'Seguro de Automóvel') {
                return (
                  <div>
                    <h4>{contrato.contrato}</h4>
                    <li>Molelo: {contrato.modelo}</li>
                    <li>Cor: {contrato.cor}</li>
                    <li>Ano: {contrato.ano}</li>
                    <li>Placa: {contrato.placa}</li>
                  </div>
                );
              }
              if (contrato.contrato === 'Seguro de Pessoa') {
                return (
                  <div>
                    <h4>{contrato.contrato}</h4>
                    <li>Nome: {contrato.nome}</li>
                    <li>Idade: {contrato.idade}</li>
                    <li>Gênero: {contrato.genero}</li>
                    <li>CPF: {contrato.cpf}</li>
                  </div>
                );
              }
            })
          ) : (
            data.map(contrato => {
              if (contrato.contrato === 'Seguro de Automóvel') {
                return (
                  <div>
                    <h4>{contrato.contrato}</h4>
                    <li>Molelo: {contrato.modelo}</li>
                    <li>Cor: {contrato.cor}</li>
                    <li>Ano: {contrato.ano}</li>
                    <li>Placa: {contrato.placa}</li>
                  </div>
                );
              }
              if (contrato.contrato === 'Seguro de Pessoa') {
                return (
                  <div>
                    <h4>{contrato.contrato}</h4>
                    <li>Nome: {contrato.nome}</li>
                    <li>Idade: {contrato.idade}</li>
                    <li>Gênero: {contrato.genero}</li>
                    <li>CPF: {contrato.cpf}</li>
                  </div>
                );
              }
            })
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Contratos;
