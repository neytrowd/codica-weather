import { IWeather } from '../../types/weather';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadInfo } from '../thunks/infoThunk';

interface InfoState {
   city: IWeather | null;
   isLoading: boolean;
   error: string;
}

const initialState: InfoState = {
   city: null,
   isLoading: false,
   error: '',
};

const infoSlice = createSlice({
   name: 'info',
   initialState,
   reducers: {},
   extraReducers: {
      [loadInfo.pending.type]: (state) => {
         state.isLoading = true;
      },
      [loadInfo.fulfilled.type]: (state, action: PayloadAction<IWeather>) => {
         state.isLoading = false;
         state.error = '';
         state.city = action.payload;
      },
      [loadInfo.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isLoading = false;
         state.error = action.payload;
      },
   },
});

export default infoSlice.reducer;
