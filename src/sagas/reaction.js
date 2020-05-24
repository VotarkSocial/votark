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
import * as actions from '../actions/reaction';
import * as types from '../types/reactions';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/like';
  
  const API_BASE_URL =  API_URL + 'api/v1';


  function* like(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/like/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,user,reaction:0}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 201) {
            const jsonResult = yield response.json();
            yield put(
              actions.completeLikeVersus(
                jsonResult,
              ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failLikeVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failLikeVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchLike() {
    yield takeEvery(
      types.VERSUS_LIKE_STARTED,
      like,
    );
  }

  function* heart(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/like/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,user,reaction:1}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 201) {
            const jsonResult = yield response.json();
            yield put(
              actions.completeHeartVersus(
                jsonResult,
              ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failHeartVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failHeartVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchHeart() {
    yield takeEvery(
      types.VERSUS_HEART_STARTED,
      heart,
    );
  }









  function* fetchLike(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/versus/${action.payload.id}/like/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const result = yield response.json();
            yield put(
              actions.completeFetchLike(result),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchLike(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchLike('NETWORK ERROR'));
      }
  }
  
  export function* watchFetchLIke() {
    yield takeEvery(
      types.VERSUS_LIKE_FETCH_STARTED,
      fetchLike,
    );
  }

  function* fetchHeart(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/versus/${action.payload.id}/heart/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const result = yield response.json();
            yield put(
              actions.completeFetchHeart(result),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchHeart(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchHeart('NETWORK ERROR'));
      }
  }
  
  export function* watchFetchHeart() {
    yield takeEvery(
      types.VERSUS_HEART_FETCH_STARTED,
      fetchHeart,
    );
  }










  function* unlike(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/like/${action.payload.id}/`,
            {
              method: 'DELETE',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 204) {
            yield put(
              actions.completeUnLikeVersus(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUnLikeVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUnLikeVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchUnLike() {
    yield takeEvery(
      types.VERSUS_UNLIKE_STARTED,
      unlike,
    );
  }

  function* unheart(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/like/${action.payload.id}/`,
            {
              method: 'DELETE',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 204) {
            yield put(
                actions.completeUnHeartVersus()
              )
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUnHeartVersus(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUnHeartVersus('NETWORK ERROR'));
      }
  }
  
  export function* watchUnHeart() {
    yield takeEvery(
      types.VERSUS_UNHEART_STARTED,
      unheart,
    );
  }