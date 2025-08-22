import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AllowedLanguagesEncodedType = "en" | "es";
export type AllowedLanguagesType = "english" | "spanish";

export interface ISystemLanguageState {
    systemLanguage: AllowedLanguagesEncodedType,
}

const initialState: ISystemLanguageState = {
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
export const systemLanguageReducer = systemLanguageSlice.reducer;
