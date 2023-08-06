import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { weatherApi } from './api/charactersApi';
import { tripReducer } from './slice/tripSlice';
import { userReducer } from './slice/userSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, tripReducer);
const persistedReducerUser = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    [weatherApi.reducerPath]: weatherApi.reducer,
    trip: persistedReducer,
    user: persistedReducerUser,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(weatherApi.middleware),
});

export const persistor = persistStore(store);
setupListeners(store.dispatch);
