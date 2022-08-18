import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { InjectedReducersType } from "../injector-typings";
import { resetStore } from "./action";

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  if (Object.keys(injectedReducers).length === 0) {
    return (state: any) => state;
  }

  const rootReducer = combineReducers({
    ...injectedReducers,
  });

  return (state: ReturnType<typeof rootReducer> | undefined, action: AnyAction) => {
    if (action.type === resetStore.type) {
      return rootReducer(undefined, action);
    }

    return rootReducer(state, action);
  };
};
