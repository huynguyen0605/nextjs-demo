import { createAction } from "@reduxjs/toolkit";
import { BaseError } from "../../utils/types/error";

export const resetStore = createAction<BaseError | undefined>("RESET_STORE");
