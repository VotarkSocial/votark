import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
  watchSignupStarted,
  watchResetPassword,
} from './auth';

import {
  watchVersusFetch,
  watchVoteFetch,
} from './versus'

import {
  watchCommentFetch,
  watchCommentAddition,
} from './comments'


import {
  watchFetchHeart,
  watchFetchLIke,
  watchHeart,
  watchLike,
  watchUnHeart,
  watchUnLike
} from './reaction'

import {
  watchFollowUser,
  WatchfOLLOWExtraUser,
  watchFollowingExtraUserFetch,
  watchFollowingUserFetch,
  watchUnFollowExtraUser,
  watchUnFollowUser
} from './user'


function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchSignupStarted),
    fork(watchResetPassword),
    fork(watchVersusFetch),
    fork(watchVoteFetch),
    fork(watchCommentAddition),
    fork(watchCommentFetch),
    fork(watchFetchHeart),
    fork(watchFetchLIke),
    fork(watchHeart),
    fork(watchLike),
    fork(watchUnHeart),
    fork(watchUnLike),
    fork(watchFollowUser),
    fork(watchFollowingExtraUserFetch),
    fork(watchUnFollowExtraUser),
    fork(watchUnFollowUser),
    fork(WatchfOLLOWExtraUser),
    fork(watchFollowingUserFetch)    
  ]);
}


export default mainSaga;
