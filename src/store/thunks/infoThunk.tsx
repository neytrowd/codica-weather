import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCity } from '../../api';

interface IInfo {
   id: number;
}

export const loadInfo = createAsyncThunk('info/loadInfo', async (params: IInfo, thunkApi) => {
   try {
      const { id } = params;
      return await getCity(id);
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
