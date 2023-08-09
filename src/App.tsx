import React, { createContext, useState } from 'react';

import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyle from './config/GlobalStyle';

import RoutesApp from './routes/RoutesApp';

export const ThemeContext = createContext<{
  data: Array<any>;
  setData: (newValue: any) => void;
}>({
  data: [],
  setData: () => undefined
});

function App() {
  const [data, setData] = useState<Array<any>>([]);

  return (
    <ThemeContext.Provider value={{ data, setData }}>
      <DefaultTheme>
        <RoutesApp />
        <GlobalStyle />
      </DefaultTheme>
    </ThemeContext.Provider>
  );
}

export default App;
