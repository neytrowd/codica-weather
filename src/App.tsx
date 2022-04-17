import React from 'react';
import theme from './assets/theme';
import './assets/styles/index.scss';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Page from './layouts/page';
import routes from './constants/routes';

function App() {
   return (
      <div className="App">
         <ThemeProvider theme={theme}>
            <CssBaseline />
            <Page title="Codica weather app">
               <Routes>
                  {routes.map((route) => (
                     <Route key={route.path} path={route.path} element={route.component} />
                  ))}
               </Routes>
            </Page>
         </ThemeProvider>
      </div>
   );
}

export default App;
