import { configureStore } from '@reduxjs/toolkit';
import { systemColorReducer } from './slice/systemColor';
import { systemLanguageReducer } from './slice/systemLanguage';
import { sessionIdReducer } from './slice/sessionId';

export const store = configureStore({
  reducer: {
    systemColor: systemColorReducer,
    systemLanguage: systemLanguageReducer,
    sessionId: sessionIdReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
