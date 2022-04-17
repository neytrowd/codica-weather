import AddCity from '../components/add-city';
import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Add city', () => {
   let addHandler = jest.fn();

   test('should contain text', () => {
      render(<AddCity addHandler={addHandler} />);
      expect(screen.getByPlaceholderText(/city name/i)).toContainHTML('');
      userEvent.type(screen.getByPlaceholderText(/city name/i), 'City');
      expect(screen.getByPlaceholderText(/city name/i)).toContainHTML('City');
   });

   test('should been called', async () => {
      render(<AddCity addHandler={addHandler} />);
      const autocomplete = screen.getByTestId('autocomplete');
      const input = within(autocomplete).getByPlaceholderText(/city name/i) as HTMLInputElement;
      autocomplete.focus();
      userEvent.type(input, 'Kieve');
      fireEvent.keyDown(autocomplete, { key: 'ArrowDown' });
      fireEvent.keyDown(autocomplete, { key: 'Enter' });
      expect(input.value).toEqual('Kieve');
      userEvent.click(screen.getByText(/add city/i));
      expect(addHandler).toHaveBeenCalled();
   });
});
