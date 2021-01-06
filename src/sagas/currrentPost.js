import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  select,
} from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/currentPost';
import * as types from '../types/currentPost';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/post';

const API_BASE_URL =  API_URL + 'api/v1';

function* currentPostFetch(action) {
  try {
      const isAuth = yield select(selectors.isAuthenticated);
      const id = yield select(selectors.getCurrentPostSelected);
      if (isAuth && id) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/post/${id}/`,
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
          yield put(actions.completeCurrentPostFetchs(
            jsonResult
          ));
        } else {
          const { non_field_errors } = yield response.json();
          yield put(actions.failCurrentPostFetch(non_field_errors[0]));
        }
      }
    } catch (error) {
      yield put(actions.failCurrentPostFetch('CONNECTION FAILED'));
    }
}

export function* watchCurrentPostFetch() {
  yield takeEvery(
    types.CURRENT_POST_FETCH_STARTED,
    currentPostFetch,
  );
}