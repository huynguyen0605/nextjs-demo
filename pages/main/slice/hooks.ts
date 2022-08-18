import { useInjectReducer, useInjectSaga } from "../../../redux/redux-injector";
import { mainPageSaga } from "./saga";
import * as slice from ".";

export const useMainSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: mainPageSaga });

  return { actions: slice.mainPageActions };
};
