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

export type TherapyType = 'multimodal' | 'cognitive_behavioral' | 'humanist' | 'psychoanalytic' | 'systemic';

export type ProblemType = 'depression' |
 'anxiety' | 'obsessive-compulsive' | 'trauma'
| 'stress' | 'bipolar' | 'dissociative' | 'somatic'
| 'alimentary' | 'excretion' | 'dream' | 'sexual'
| 'gender' | 'destructive-impulse-conduct' | 'addictions'
| 'neurocognitive' | 'personality' | 'paraphiliacs' | 'others';

//export type SystemMessageType = 'text_own' | 'text_group' | 'voice_own' | 'tecnic_sheet' | 'tecnic_sheet_group' | 'patient_history' | 'patient_history_group';
export type SystemMessageType = 'text_own'
    | 'text_group'
    | 'tecnic_sheet'
    | 'tecnic_sheet_group'
    | 'patient_history'
    | 'patient_history_group';
export type SystemMessageLevelType = 'production' | 'staging';

export interface SystemMessageEntity {
    uuid: string;
    userUuid: string;
    instructions: string;
    type: SystemMessageType;
    level: SystemMessageLevelType;
    updatedAt: string;
    createdAt: string;
};

export interface PhaseInstructionsEntity {
    uuid: string;
    userUuid: string;
    phaseNumber: string;
    therapyType: TherapyType;
    title: string;
    instructions: string;
    level: SystemMessageLevelType;
    updatedAt: string;
    createdAt: string;
};

export interface RecommendedTecniquesEntity {
    uuid: string;
    userUuid: string;
    therapyType: TherapyType;
    tecniques: string;
    level: SystemMessageLevelType;
    updatedAt: string;
    createdAt: string;
};
