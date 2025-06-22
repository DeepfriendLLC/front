import { configureStore } from '@reduxjs/toolkit';
import { systemColorReducer } from './slice/systemColor';
import { systemLLanguageReducer } from './slice/systemLanguage';

export const store = configureStore({
  reducer: {
    systemColor: systemColorReducer,
    systemLanguage: systemLLanguageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
