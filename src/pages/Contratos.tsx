import { ThemeContext } from '../App';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useContext } from 'react';

const Contratos = () => {
  const { data, setData } = useContext(ThemeContext);

  return (
    <>
      <DefaultLayout>
        <h1>Contratos</h1>

        <div style={{ display: 'flex', gap: '20px', padding: '30px' }}>
          {data.length ? (
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
          ) : (
            <h2>Nenhum contrato feito</h2>
          )}
        </div>
      </DefaultLayout>
    </>
  );
};

export default Contratos;
