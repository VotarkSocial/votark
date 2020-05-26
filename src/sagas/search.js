import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/search';
import * as types from '../types/search';
import { API_URL } from '../../configuration';
import { normalize, schema } from 'normalizr';
import * as schemas from '../schemas/hashtag';
import * as userShema from '../schemas/user'
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  
  function* historyHashtagFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getAuthUserID);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user}/search_history_hashtag/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            const normalized = normalize(jsonResult, schemas.hashtags);
            yield put(
            actions.completeHashtagHistoryFetching(
                normalized.entities.hashtags,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failHashtagHistoryFetching(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failHashtagHistoryFetching('CONNECTION FAILED'));
      }
  }
  
  export function* watchHistoryHashtagFetch() {
    yield takeEvery(
      types.HASHTAG_SEARCH_HISTORY_FETCHED_STARTED,
      historyHashtagFetch,
    );
  }

function* historyUserFetch(action) {
try {
    const isAuth = yield select(selectors.isAuthenticated);
    const user = yield select(selectors.getAuthUserID);
    if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
        fetch,
        `${API_BASE_URL}/user/${user}/search_history_user/`,
        {
            method: 'GET',
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
            },
        }
        );
        if (response.status === 200) {
        const jsonResult = yield response.json();
        const normalized = normalize(jsonResult, schemas.hashtags);
        yield put(
        actions.completeUserHistoryFetching(
            normalized.entities.hashtags,
            normalized.result
        ),
        );
        } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failUserHistoryFetching(non_field_errors[0]));
        }
    }
    } catch (error) {
    yield put(actions.failUserHistoryFetching('CONNECTION FAILED'));
    }
}

export function* watchHistoryUserFetch() {
yield takeEvery(
    types.USER_SEARCH_HISTORY_FETCHED_STARTED,
    historyUserFetch,
);
}

function* UserFetch(action) {
try {
    const isAuth = yield select(selectors.isAuthenticated);
    const user = yield select(selectors.getAuthUserID);
    if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
        fetch,
        `${API_BASE_URL}/user/${user}/search_user/`,
        {
            method: 'POST',
            body: JSON.stringify({query:action.payload}),
            headers:{
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
            },
        }
        );
        if (response.status === 200) {
        const jsonResult = yield response.json();
        const normalized = normalize(jsonResult, schemas.hashtags);
        yield put(
        actions.completeUserFetching(
            normalized.entities.hashtags,
            normalized.result
        ),
        );
        } else {
        const { non_field_errors } = yield response.json();
        yield put(actions.failUserFetching(non_field_errors[0]));
        }
    }
    } catch (error) {
        console.log(error)
    yield put(actions.failUserFetching('CONNECTION FAILED'));
    }
}

export function* watchUserFetch() {
yield takeEvery(
    types.USER_SEARCH_FETCHED_STARTED,
    UserFetch,
);
}

function* HashtagFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getAuthUserID);
        if (isAuth) {
            const token = yield select(selectors.getAuthToken);
            const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user}/search_hashtag/`,
            {
                method: 'POST',
                body: JSON.stringify({query:action.payload}),
                headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
                },
            }
            );
            if (response.status === 200) {
            const jsonResult = yield response.json();
            const normalized = normalize(jsonResult, schemas.hashtags);
            yield put(
            actions.completeHashtagFetching(
                normalized.entities.hashtags,
                normalized.result
            ),
            );
            } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failHashtagFetching(non_field_errors[0]));
            }
        }
        } catch (error) {
        yield put(actions.failHashtagFetching('CONNECTION FAILED'));
        }
    }
    
    export function* watchHashgagFetch() {
    yield takeEvery(
        types.HASHTAG_SEARCH_FETCHED_STARTED,
        HashtagFetch,
    );
    }

