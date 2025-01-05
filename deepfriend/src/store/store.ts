import { configureStore } from '@reduxjs/toolkit'
import { systemColorReducer } from './slice/systemColor'

export const store = configureStore({
  reducer: {
    systemColor: systemColorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
