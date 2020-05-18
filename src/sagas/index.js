import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
  watchSignupStarted,
  watchResetPassword,
} from './auth';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSignupStarted),
    fork(watchResetPassword),
  ]);
}


export default mainSaga;
