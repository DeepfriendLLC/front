import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type SystemColorType = "light" | "dark";

export interface ISystemColorState {
    systemColor: SystemColorType,
}

const initialState: ISystemColorState = {
    systemColor: "light",
};

export const systemColorSlice = createSlice({
    name: "systemColor",
    initialState,
    reducers: {
        setSystemColorStore: (state, action: PayloadAction<"light" | "dark">) => { state.systemColor = action.payload },
    },
});

export const { setSystemColorStore } = systemColorSlice.actions;
export const systemColorReducer = systemColorSlice.reducer;
