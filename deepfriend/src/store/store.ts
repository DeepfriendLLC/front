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

export type SystemMessageType = 'text_own' | 'text_group' | 'voice_own' | 'tecnic_sheet' | 'tecnic_sheet_group' | 'patient_history' | 'patient_history_group';

export interface SystemMessageEntity {
    uuid: string;
    userUuid: string;
    instructions: string;
    type: SystemMessageType;
    updatedAt: string;
    createdAt: string;
};
