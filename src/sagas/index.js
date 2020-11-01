import { put, takeLatest } from 'redux-saga/effects'

function* fetchUser(action) {
  try {
     console.log("f e t c h _ u s e r");
     const user = {name:'Edgar'};
     yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
     yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
};

/*
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}
*/

// Default debe estar en sobre la funcion generadora.
export default function* mySaga() {
  console.log("m i _ s a g a");
  yield takeLatest("USER_FETCH_REQUESTED", fetchUser);
};

