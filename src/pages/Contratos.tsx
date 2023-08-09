import { ThemeContext } from '../App';
import FieldsetStyled from '../components/FieldsetStyled';
import DefaultLayout from '../config/layout/DefaultLayout';
import { useContext } from 'react';

const Contratos = () => {
  const { data } = useContext(ThemeContext);

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
              if (contrato.contrato === 'Seguro de Residencia') {
                const tiposCobertura = ["Incêndio", "Enchente", "Vendaval", "Terremoto"];
                const arrayCoberturas = [];
                for (let cobertura in contrato.coberturas) {
                    arrayCoberturas.push(contrato.coberturas[cobertura]);
                }
                return (
                  <div style={{padding: "30px"}}>
                    <h4>{contrato.contrato}</h4>
                    <li>Area do Terreno: {contrato.areaTerreno}</li>
                    <li>Valor: R$ {contrato.valor+",00"}</li>
                    <FieldsetStyled>
                        <legend>Coberturas</legend>
                        <ul>
                            {!arrayCoberturas.some((cobertura:any) => cobertura) && (<p>Nenhuma cobertura selecionada</p>)}
                            {arrayCoberturas.map((cobertura : boolean, index: number) => {
                                if (cobertura){
                                    return (<li style={{listStyle: "none"}}>- { tiposCobertura[index]}</li>)
                                }
                            })}
                        </ul>
                    </FieldsetStyled>
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
