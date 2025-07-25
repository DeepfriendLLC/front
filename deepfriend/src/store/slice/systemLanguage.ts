import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AllowedLanguagesEncodedType = "en" | "es";
export type AllowedLanguagesType = "english" | "spanish";

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
