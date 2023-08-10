
import DefaultTheme from './config/theme/DefaultTheme';
import GlobalStyle from './config/GlobalStyle';

import RoutesApp from './routes/RoutesApp';
import DataProvider from './contexts/DataContext';

function App() {

  return (
        <DataProvider>
            <DefaultTheme>
                <RoutesApp />
                <GlobalStyle />
            </DefaultTheme>
        </DataProvider>
  );
}

export default App;
