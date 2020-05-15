import { fork, all } from 'redux-saga/effects';

function* mainSaga() {
  yield all([
    //fork(watchLoginStarted),
  ]);
}


export default mainSaga;
