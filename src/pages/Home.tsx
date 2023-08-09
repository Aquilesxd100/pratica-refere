import React from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import FormStyled from '../components/FormStyled';
import InputStyled from '../components/InputStyled';
import ButtonStyled from '../components/ButtonStyled';

const Home: React.FC = () => {
    const submitHandler = (value : any) => {
        setData(e.target.checked ? 'dark' : 'light')
    }
    
  return (
    <DefaultLayout>
        <h1>Home</h1>
        <FormStyled onSubmit={((e) => {submitHandler(e); e.preventDefault();})}>
            <InputStyled placeholder='Modelo' />
            <InputStyled placeholder='Cor' />
            <InputStyled placeholder='Placa' />
            <InputStyled placeholder='Ano' />
            <ButtonStyled>Mandar Informações</ButtonStyled>
        </FormStyled>
    </DefaultLayout>
  );
};

export default Home;
