import React, { createContext, useState } from 'react';

import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyle from './config/GlobalStyle';

import RoutesApp from './routes/RoutesApp';

function App() {
    const [data, setData] = useState<any>(null);
    const test = (e) => {
        setData(..e)
    }
    const ThemeContext = createContext(null);
  return (
    <ThemeContext.Provider value={data}>
        <DefaultTheme>
        <RoutesApp />
        <GlobalStyle />
        </DefaultTheme>
    </ThemeContext.Provider>
  );
}

export default App;
