import {
  SET_LOADING,
  SET_TOFINDV,
  SET_ERRORMS,
  SET_ITEMVAL,
  FND_CURRVAL,
} from "./action-types";

export function setErrorMs(error) {
  return { type: SET_ERRORMS, error };
}

export function setLoading(loading) {
  return { type: SET_LOADING, loading };
}

export function setToFind(toFind) {
  return { type: SET_TOFINDV, toFind };
}

export function setItemValues(item) {
  return { type: SET_ITEMVAL, item };
}

export function fndCurrencyVal(query) {
  return { type: FND_CURRVAL, query };
}
