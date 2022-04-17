import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { store } from '../store';
import { renderWithRouterAndProvider } from './helpers/render';

describe('App component', () => {
   test('should be in the document', () => {
      renderWithRouterAndProvider(<App />);
      expect(screen.getByText(/weather app/i)).toBeInTheDocument();
      screen.debug();
   });

   test('should match snapshot', () => {
      renderWithRouterAndProvider(<App />);
      expect(screen.getByText(/weather app/i)).toMatchSnapshot();
   });
});
