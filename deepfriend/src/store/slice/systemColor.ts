import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface ISystemColorState {
    systemColor: "light" | "dark"
}

const initialState: ISystemColorState = {
    systemColor: "dark",
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
