import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { rootReducers } from './modules/rootReducers';

const persistConfig = {
  key: 'dnr_19-07_storage',
  storage,
  whitelist: ['counter', 'profile', 'user'],
};

export const persistedReducers = persistReducer(persistConfig, rootReducers);
export const reduxStore = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(reduxStore);

export type reduxStates = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch
