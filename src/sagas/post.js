import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/post';
import * as types from '../types/posts';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/post';
import { TOPIC_SELECTED } from '../types/topic';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  function* postFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const topicid = yield select(selectors.getTopicSelected);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/topic/${topicid}/order/`,
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
            const normalized = normalize(jsonResult, schemas.posts);
            yield put(
            actions.completeFetchPost(
                normalized.entities.posts,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchPost(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchPost('CONNECTION FAILED'));
      }
  }
  
  export function* watchPostFetch() {
    yield takeEvery(
      types.POST_FETCH_STARTED,
      postFetch,
    );
  }

  function* userPostFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/posts/`,
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
            const normalized = normalize(jsonResult, schemas.posts);
            yield put(
            actions.completeUserPostFetch(
                normalized.entities.posts,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUserPostFetch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUserPostFetch('CONNECTION FAILED'));
      }
  }
  
  export function* watchUserPostFetch() {
    yield takeEvery(
      types.USER_POSTS_STARTED,
      userPostFetch,
    );
  }

  export function* watchTopicSelected(){
    yield takeEvery(
        TOPIC_SELECTED,
        postFetch,
    )
}
  

  