import { call, put, takeLatest, all } from "redux-saga/effects";
import { mainPageActions } from ".";

export function* setCounterSaga() {
    yield put(mainPageActions.setCounter(1));
}

export function* watchSetCounter() {
    yield takeLatest(mainPageActions.setCounter.type, setCounterSaga);
}
export function* mainPageSaga() {
    yield all([
        watchSetCounter()
    ])
}