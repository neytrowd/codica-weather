import { IWeather } from '../../types/weather';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addNewCity, loadCities, refreshCity } from '../thunks/weatherThunk';

interface WeatherState {
   cities: IWeather[];
   isLoading: boolean;
   error: string;
}

interface RefreshPayload {
   id: number;
   res: IWeather;
}

const initialState: WeatherState = {
   cities: [],
   isLoading: false,
   error: '',
};

const weatherSlice = createSlice({
   name: 'weather',
   initialState,
   reducers: {
      deleteCity(state, action) {
         state.cities = state.cities.filter((item) => item.id !== action.payload);
      },
   },
   extraReducers: {
      [loadCities.pending.type]: (state) => {
         state.isLoading = true;
      },
      [loadCities.fulfilled.type]: (state, action: PayloadAction<IWeather[]>) => {
         state.isLoading = false;
         state.error = '';
         state.cities = action.payload;
      },
      [loadCities.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },

      [addNewCity.fulfilled.type]: (state, action: PayloadAction<IWeather>) => {
         state.cities.push(action.payload);
      },

      [refreshCity.fulfilled.type]: (state, action: PayloadAction<RefreshPayload>) => {
         const { id, res } = action.payload;
         const idx = state.cities.findIndex((item) => item.id === id);
         state.cities[idx] = res;
      },
   },
});

export default weatherSlice.reducer;
export const { deleteCity } = weatherSlice.actions;
