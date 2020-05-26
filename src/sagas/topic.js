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
import * as actions from '../actions/topic';
import * as types from '../types/topic';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/topic';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  function* topicFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/topic/trending/`,
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
            const normalized = normalize(jsonResult, schemas.topics);
            yield put(
            actions.completeFetchTopic(
                normalized.entities.topics,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchTopic(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchTopic('CONNECTION FAILED'));
      }
  }
  
  export function* watchTopicFetch() {
    yield takeEvery(
      types.TOPIC_FETCH_STARTED,
      topicFetch,
    );
  }