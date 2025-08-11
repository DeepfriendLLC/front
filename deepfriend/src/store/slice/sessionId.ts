import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SessionIdState {
    sessionId: string,
}

const initialState: SessionIdState = {
    sessionId: "",
};

export const sessionIdSlice = createSlice({
    name: "sessionId",
    initialState,
    reducers: {
        setSessionIdStore: (state, action: PayloadAction<string>) => { state.sessionId = action.payload },
    },
});

export const { setSessionIdStore } = sessionIdSlice.actions;
export const sessionIdReducer = sessionIdSlice.reducer;
