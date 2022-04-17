import { configureStore, combineReducers } from '@reduxjs/toolkit';
import weatherSlice from './reducers/weatherSlice';
import infoSlice from './reducers/infoSlice';

const rootReducer = combineReducers({
   weather: weatherSlice,
   info: infoSlice,
});

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
