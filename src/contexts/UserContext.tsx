import React, { createContext, useState } from 'react';

interface UserProviderProps {
  children: React.ReactNode;
}

interface UserContextProps {
    data: {
        username: string | undefined,
        password: string | undefined
    };
    setData: (newValue: any) => void;
} 

export const UserContext = createContext<UserContextProps>({
    data: {
        username: undefined,
        password: undefined
    },
    setData: () => undefined
  });

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [data, setData] = useState<any>({});

  return (
    <UserContext.Provider value={{ data, setData }}>
        {children}
    </UserContext.Provider>
  );
};

export default UserProvider;


