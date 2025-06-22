import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AllowedLanguagesEncodedType = "en" | "es" | "ja" | "de" | "fr" | "zh" | "ko" | "vi" | "hi" | "th";
export type AllowedLanguagesType = "english" | "spanish" | "japanese" | "german" | "french" | "chinese" | "korean" | "vietnamese" | "hindi" | "thai";

export interface ISystemColorState {
    systemLanguage: AllowedLanguagesEncodedType,
}

const initialState: ISystemColorState = {
    systemLanguage: "en",
};

export const systemLanguageSlice = createSlice({
    name: "systemLanguage",
    initialState,
    reducers: {
        setSystemLanguageStore: (state, action: PayloadAction<AllowedLanguagesEncodedType>) => { state.systemLanguage = action.payload },
    },
});

export const { setSystemLanguageStore } = systemLanguageSlice.actions;
export const systemLLanguageReducer = systemLanguageSlice.reducer;
