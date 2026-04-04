import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AllowedLanguagesEncodedType = "es" | "en";
export type AllowedLanguagesType = "spanish" | "english";

export interface ISystemLanguageState {
    systemLanguage: AllowedLanguagesEncodedType,
}

const initialState: ISystemLanguageState = {
    systemLanguage: "es",
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
