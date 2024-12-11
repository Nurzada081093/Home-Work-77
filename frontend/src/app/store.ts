import { configureStore } from '@reduxjs/toolkit';
import { publicationsReducer } from '../features/publications/publicationsSlice.ts';

export const store = configureStore({
  reducer: {
    publications: publicationsReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;