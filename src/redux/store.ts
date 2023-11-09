import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { currencyApi } from './slices/apiSlice';

export const store = configureStore({
  reducer: {
    [currencyApi.reducerPath]: currencyApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(currencyApi.middleware),
});

setupListeners(store.dispatch);
