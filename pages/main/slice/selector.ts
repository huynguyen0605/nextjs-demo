import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../../redux/root";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.mainPage || initialState;

export const counter = createSelector([selectSlice], (slice) => slice.counter);