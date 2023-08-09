import React, { useContext, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import FormStyled from '../components/FormStyled';
import InputStyled from '../components/InputStyled';
import ButtonStyled from '../components/ButtonStyled';
import { ThemeContext } from '../App';

interface DataCarro {
  modelo: string;
  ano: string;
  cor: string;
  placa: string;
}

const Home: React.FC = () => {
  const { data, setData } = useContext(ThemeContext);

  const [dataCarro, setDataCarro] = useState<DataCarro>({ modelo: '', ano: '', placa: '', cor: '' });

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (dataCarro.ano === '' || dataCarro.modelo === '' || dataCarro.placa === '' || dataCarro.cor === '') {
      return;
    }
    setData([...data, dataCarro]);
    setDataCarro({ modelo: '', ano: '', placa: '', cor: '' });
  };

  return (
    <DefaultLayout>
      <h1>Home</h1>
      <FormStyled onSubmit={submitHandler}>
        <InputStyled
          placeholder="Modelo"
          value={dataCarro.modelo}
          onChange={e => {
            setDataCarro({ ...dataCarro, modelo: e.target.value });
          }}
        />
        <InputStyled
          placeholder="Cor"
          value={dataCarro.cor}
          onChange={e => {
            setDataCarro({ ...dataCarro, cor: e.target.value });
          }}
        />
        <InputStyled
          placeholder="Placa"
          value={dataCarro.placa}
          onChange={e => {
            setDataCarro({ ...dataCarro, placa: e.target.value });
          }}
        />
        <InputStyled
          placeholder="Ano"
          value={dataCarro.ano}
          onChange={e => {
            setDataCarro({ ...dataCarro, ano: e.target.value });
          }}
        />
        <ButtonStyled type="submit">Mandar Informações</ButtonStyled>
      </FormStyled>
    </DefaultLayout>
  );
};

export default Home;
