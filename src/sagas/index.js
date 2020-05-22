import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
  watchSignupStarted,
  watchResetPassword,
} from './auth';

import {
  watchVersusFetch
} from './versus'

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSignupStarted),
    fork(watchResetPassword),
    fork(watchVersusFetch)
  ]);
}


export default mainSaga;
