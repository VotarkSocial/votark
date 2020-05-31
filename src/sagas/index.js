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
  watchUnFollowUser,
  watchDeleteUser,
  watchUpdateUser,
  watchFollowersFetch,
  watchFollowingFetch,
  watchCurrentUserFetch,
  watchUserStoriesFetch,
} from './user'

import {
  watchHistoryHashtagFetch,
  watchHistoryUserFetch,
  watchHashgagFetch,
  watchUserFetch,
} from './search'


import {
  watchTopicFetch
} from './topic'


import {
  watchTopicSelected,
  watchUserPostFetch,
  watchPostFetch
} from './post'

import {
  watchSendReport
} from './report'


import {
  watchAddAdminToChat,
  watchAddUserToChat,
  watchchatAddition,
  watchchatFetch,
} from './chat'

import {
  watchmessageAddition,
  watchmessageFetch,
  watchChatSelected,
} from './messages'

function* mainSaga() {
  yield all([
    fork(watchAddAdminToChat),
    fork(watchAddUserToChat),
    fork(watchchatAddition),
    fork(watchchatFetch),
    fork(watchChatSelected),
    fork(watchCommentAddition),
    fork(watchCommentFetch),
    fork(watchCurrentUserFetch),
    fork(watchDeleteUser),
    fork(watchFetchHeart),
    fork(watchFetchLIke),
    fork(watchFollowersFetch),
    fork(WatchfOLLOWExtraUser),
    fork(watchFollowingExtraUserFetch),
    fork(watchFollowingFetch),
    fork(watchFollowingUserFetch),
    fork(watchFollowUser),
    fork(watchHashgagFetch),
    fork(watchHeart),
    fork(watchHistoryHashtagFetch),
    fork(watchHistoryUserFetch),
    fork(watchLike),
    fork(watchLoginStarted),
    fork(watchmessageAddition),
    fork(watchmessageFetch),
    fork(watchPostFetch),
    fork(watchRefreshTokenStarted),
    fork(watchResetPassword),
    fork(watchSendReport),
    fork(watchSignupStarted),
    fork(watchTopicFetch),
    fork(watchTopicSelected),
    fork(watchUnFollowExtraUser),
    fork(watchUnFollowUser),
    fork(watchUnHeart),
    fork(watchUnLike),
    fork(watchUpdateUser),
    fork(watchUserFetch),   
    fork(watchUserPostFetch),
    fork(watchUserStoriesFetch),
    fork(watchVersusFetch),
    fork(watchVoteFetch),
  ]);
}


export default mainSaga;
