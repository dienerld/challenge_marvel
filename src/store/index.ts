import { configureStore } from '@reduxjs/toolkit';
import { rootReducers } from './modules/rootReducers';

export const reduxStore = configureStore({
  reducer: rootReducers,
});
