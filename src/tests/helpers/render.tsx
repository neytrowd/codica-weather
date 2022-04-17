import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { store } from '../../store';

export const renderWithProvider = (component: any, storeObj: any = store) => {
   return render(<Provider store={storeObj}>{component}</Provider>);
};

export const renderWithRouter = (component: any, initialRoute: string[] = ['/']) => {
   return render(<MemoryRouter initialEntries={initialRoute}>{component}</MemoryRouter>);
};

export const renderWithRouterAndProvider = (component: any, initialRoute: string[] = ['/'], storeObj: any = store) => {
   return render(
      <Provider store={storeObj}>
         <MemoryRouter initialEntries={initialRoute}>{component}</MemoryRouter>
      </Provider>
   );
};
