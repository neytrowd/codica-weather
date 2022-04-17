import WeatherCard from '../components/weather-card';
import { screen } from '@testing-library/react';
import { weatherData } from './mock/weatherData';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from './helpers/render';

describe('Weather card component', () => {
   let refreshHandler = jest.fn();
   let deleteHandler = jest.fn();

   test('refresh should been called', () => {
      renderWithRouter(
         <WeatherCard data={weatherData[0]} refreshHandler={refreshHandler} deleteHandler={deleteHandler} />
      );
      userEvent.click(screen.getByText(/refresh/i));
      expect(refreshHandler).toHaveBeenCalled();
   });

   test('delete should been called', () => {
      renderWithRouter(
         <WeatherCard data={weatherData[0]} refreshHandler={refreshHandler} deleteHandler={deleteHandler} />
      );
      userEvent.click(screen.getByText(/delete/i));
      expect(deleteHandler).toHaveBeenCalled();
   });
});
