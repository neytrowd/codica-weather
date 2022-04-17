import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCities, getCity } from '../../api';

interface ICity {
   id: number;
}

interface ICities {
   id: number[];
}

export const loadCities = createAsyncThunk('weather/loadCities', async (params: ICities, thunkApi) => {
   try {
      const { id } = params;
      return await getCities(id);
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});

export const refreshCity = createAsyncThunk('weather/refreshCity', async (params: ICity, thunkApi) => {
   try {
      const { id } = params;
      const res = await getCity(id);
      return { id, res };
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});

export const addNewCity = createAsyncThunk('weather/addNewCity', async (params: ICity, thunkApi) => {
   try {
      const { id } = params;
      return await getCity(id);
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
