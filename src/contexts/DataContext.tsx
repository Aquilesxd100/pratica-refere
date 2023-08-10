import React, { createContext, useState } from 'react';

interface DataContextProps {
  children: React.ReactNode;
}

export const DataContext = createContext<{
    data: Array<any>;
    setData: (newValue: any) => void;
  }>({
    data: [],
    setData: () => undefined
  });

const DataProvider: React.FC<DataContextProps> = ({ children }) => {
    const [data, setData] = useState<Array<any>>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
        {children}
    </DataContext.Provider>
  );
};

export default DataProvider;


