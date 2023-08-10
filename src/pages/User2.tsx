import React, { useContext, useEffect } from 'react';
import UserProvider, { UserContext } from '../contexts/UserContext';
import DefaultLayout from '../config/layout/DefaultLayout';


const User2: React.FC = () => {
    const { data, setData } = useContext(UserContext);
    useEffect(() => {
        console.log(data)
    }, [data])

  return (
    <DefaultLayout>
      <h1>Growdev</h1>
      <button onClick={(() => {setData({username:"fernando", password: "123"})})}>Setar</button>
    </DefaultLayout>
  );
};

export default User2;
