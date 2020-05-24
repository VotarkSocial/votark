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
import * as actions from '../actions/comment';
import * as types from '../types/comment';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/comment';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  
  function* commentFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/versus/${action.payload.vaersusid}/comments/`,
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
            const normalized = normalize(jsonResult, schemas.comments);
            yield put(
            actions.completeFetchingComments(
                normalized.entities.comments,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingComments(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingComments('NETWORK ERROR'));
      }
  }
  
  export function* watchCommentFetch() {
    yield takeEvery(
      types.COMMENTS_FETCHING_STARTED,
      commentFetch,
    );
  }

function* addComment(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);
  
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const user = yield select(selectors.getAuthUserID);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/comment/`,
          {
            method: 'POST',
            body: JSON.stringify({...action.payload,user}),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          const jsonResult = yield response.json();
          yield put(
            actions.completeAddingComment(
              action.payload.id,
              jsonResult,
            ),
          );
        } else {
          // const { non_field_errors } = yield response.json();
          // yield put(actions.failLogin(non_field_errors[0]));
        }
      }
    } catch (error) {
      // yield put(actions.failLogin('Falló horrible la conexión mano'));
    }
  }

  export function* watchCommentAddition() {
    yield takeEvery(
      types.COMMENT_ADDITION_STARTED,
      addComment,
    );
  }