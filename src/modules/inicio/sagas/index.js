import { put, call, takeLatest } from "redux-saga/effects";
import { FND_CURRVAL } from "../reducers/action-types";
import {
  setErrorMs,
  setLoading,
  setToFind,
  setItemValues,
} from "../reducers/actions";
import { currencyVal } from "./services";

function* findCurrentVal(acc) {
  try {
    yield put(setLoading(true));
    yield put(setErrorMs(undefined));
    const res = yield call(currencyVal, acc.query);
    const item = res.data;
    yield put(setItemValues(item));
    return;
  } catch (err) {
    yield put(setErrorMs(err.message));
  } finally {
    yield put(setToFind(false));
    yield put(setLoading(false));
  }
}

export default function* mdInicio() {
  yield takeLatest(FND_CURRVAL, findCurrentVal);
}
