import { screen } from '@testing-library/react';
import App from '../App';
import { store } from '../store';
import { renderWithRouterAndProvider } from './helpers/render';

describe('Router test', () => {
   test('list page should be in the document', () => {
      renderWithRouterAndProvider(<App />, ['/'], store);
      expect(screen.getByTestId('list-page')).toBeInTheDocument();
   });

   test('info page should be in the document', () => {
      renderWithRouterAndProvider(<App />, ['/info/23233'], store);
      expect(screen.getByTestId('info-page')).toBeInTheDocument();
   });
});
