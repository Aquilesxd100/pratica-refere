import React, { useContext, useState } from 'react';
import DefaultLayout from '../config/layout/DefaultLayout';
import FormStyled from '../components/FormStyled';
import InputStyled from '../components/InputStyled';
import FieldsetStyled from '../components/FieldsetStyled';
import ButtonStyled from '../components/ButtonStyled';
import { DataContext } from '../contexts/DataContext';

interface DataResidencia {
    contrato: string,
    areaTerreno: string,
    valor: string,
    coberturas: {
        incendio: boolean,
        enchente: boolean,
        vendaval: boolean,
        terremoto: boolean
    }
}

const SeguroDeCasa: React.FC = () => {
    const { data, setData } = useContext(DataContext);

    const moldeDataResidencia = {
        contrato: 'Seguro de Residencia',
        areaTerreno: '',
        valor: '',
        coberturas: {
            incendio: false,
            enchente: false,
            vendaval: false,
            terremoto: false
        }
    }

    const [dataResidencia, setDataResidencia] = useState<DataResidencia>(moldeDataResidencia)

    const submitHandler = (e: any) => {
        e.preventDefault();
        setData([...data, dataResidencia]);
        setDataResidencia(moldeDataResidencia);
    }


  return (
    <DefaultLayout>
      <h1>Seguro de Residencia</h1>
      <FormStyled onSubmit={((e:any) => {submitHandler(e)})}>
        <InputStyled placeholder="Área do Terreno" value={dataResidencia.areaTerreno} onChange={((e: any) => setDataResidencia({...dataResidencia, areaTerreno: e.target.value}))} />

        <InputStyled type="number" placeholder="Valor do Terreno" value={dataResidencia.valor} onChange={((e: any) => setDataResidencia({...dataResidencia, valor: e.target.value}))} />

        <FieldsetStyled>
            <legend>Coberturas Disponiveis</legend>

            <div>
                <InputStyled type="checkbox" id="checkbox-incendio" checked={dataResidencia.coberturas.incendio} onChange={((e:any) => { setDataResidencia({...dataResidencia, coberturas: { ...dataResidencia.coberturas, incendio: e.target.checked}}) })} />
                <label htmlFor="checkbox-incendio">Incendio</label>
            </div>

            <div>
                <InputStyled type="checkbox" id="checkbox-vendaval" checked={dataResidencia.coberturas.vendaval} onChange={((e:any) => { setDataResidencia({...dataResidencia, coberturas: { ...dataResidencia.coberturas, vendaval: e.target.checked}}) })} />
                <label htmlFor="checkbox-vendaval">Vendaval</label>
            </div>

            <div>
                <InputStyled type="checkbox" id="checkbox-enchente" checked={dataResidencia.coberturas.enchente} onChange={((e:any) => { setDataResidencia({...dataResidencia, coberturas: { ...dataResidencia.coberturas, enchente: e.target.checked}}) })} />
                <label htmlFor="checkbox-enchente">Enchente</label>
            </div>

            <div>
                <InputStyled type="checkbox" id="checkbox-terremoto" checked={dataResidencia.coberturas.terremoto} onChange={((e:any) => { setDataResidencia({...dataResidencia, coberturas: { ...dataResidencia.coberturas, terremoto: e.target.checked}}) })} />
                <label htmlFor="checkbox-terremoto">Terremoto</label>
            </div>

        </FieldsetStyled>
        <ButtonStyled>Mandar Informações</ButtonStyled>
      </FormStyled>
    </DefaultLayout>
  );
};

export default SeguroDeCasa;
