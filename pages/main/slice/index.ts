import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../redux/redux-toolkit";
import { MainPageState } from "./types";

export const initialState: MainPageState = {
    counter: 0
};

const slice = createSlice({
    name: "mainPage",
    initialState,
    reducers: {
        setCounter(state, action: PayloadAction<number>) {
            state.counter = state.counter + action.payload;
        }
    }
})

export const { actions: mainPageActions, name, reducer } = slice;
