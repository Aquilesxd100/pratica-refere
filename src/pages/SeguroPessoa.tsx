import React, { useContext, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import FormStyled from '../components/FormStyled';
import InputStyled from '../components/InputStyled';
import ButtonStyled from '../components/ButtonStyled';
import { DataContext } from '../contexts/DataContext';

interface DataPessoa {
  contrato: string;
  nome: string;
  idade: string;
  genero: string;
  cpf: string;
}

const SeguroDePessoa: React.FC = () => {
  const { data, setData } = useContext(DataContext);

  const [dataPessoa, setDataPessoa] = useState<DataPessoa>({
    contrato: 'Seguro de Pessoa',
    nome: '',
    idade: '',
    genero: '',
    cpf: ''
  });

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (dataPessoa.nome === '' || dataPessoa.idade === '' || dataPessoa.genero === '' || dataPessoa.cpf === '') {
      return;
    }

    setData([...data, dataPessoa]);
    setDataPessoa({ contrato: 'Seguro de Pessoa', nome: '', idade: '', genero: '', cpf: '' });
  };

  return (
    <DefaultLayout>
      <h1>Seguro de Pessoa</h1>
      <FormStyled onSubmit={submitHandler}>
        <InputStyled
          placeholder="Nome"
          value={dataPessoa.nome}
          onChange={e => {
            setDataPessoa({ ...dataPessoa, nome: e.target.value });
          }}
        />
        <InputStyled
          placeholder="Idade"
          value={dataPessoa.idade}
          onChange={e => {
            setDataPessoa({ ...dataPessoa, idade: e.target.value });
          }}
        />
        <InputStyled
          placeholder="Gênero"
          value={dataPessoa.genero}
          onChange={e => {
            setDataPessoa({ ...dataPessoa, genero: e.target.value });
          }}
        />
        <InputStyled
          placeholder="CPF"
          value={dataPessoa.cpf}
          onChange={e => {
            setDataPessoa({ ...dataPessoa, cpf: e.target.value });
          }}
        />
        <ButtonStyled type="submit">Mandar Informações</ButtonStyled>
      </FormStyled>
    </DefaultLayout>
  );
};

export default SeguroDePessoa;
