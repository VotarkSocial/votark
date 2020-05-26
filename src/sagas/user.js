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
import * as actions from '../actions/user';
import * as types from '../types/user';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/user';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  

  function* followUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/follow/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,follower:user}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 201) {
            yield put(
              actions.completeFollowUser(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFollowUser(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFollowUser('CONNECTION FAILED'));
      }
  }
  
  export function* watchFollowUser() {
    yield takeEvery(
      types.USER_FOLLOW_STARTED,
      followUser,
    );
  }


  function* followExtraUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const user = yield select(selectors.getAuthUserID);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/follow/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,follower:user}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 201) {
            yield put(
              actions.completeFollowExtraUser(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFollowExtraUser(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFollowExtraUser('CONNECTION FAILED'));
      }
  }
  
  export function* WatchfOLLOWExtraUser() {
    yield takeEvery(
      types.EXTRA_USER_FOLLOW_STARTED,
      followExtraUser,
    );
  }







  function* unFollowUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/follow/unfollow/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            yield put(
              actions.completeUnFollowExtraUser(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUnFollowUser(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUnFollowUser('CONNECTION FAILED'));
      }
  }
  
  export function* watchUnFollowUser() {
    yield takeEvery(
      types.USER_UNFOLLOW_STARTED,
      unFollowUser,
    );
  }


  function* unFollowExtraUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/follow/unfollow/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload}),
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            yield put(
              actions.completeUnFollowExtraUser(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUnFollowExtraUser(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUnFollowExtraUser('CONNECTION FAILED'));
      }
  }
  
  export function* watchUnFollowExtraUser() {
    yield takeEvery(
      types.EXTRA_USER_UNFOLLOW_STARTED,
      unFollowExtraUser,
    );
  }



  function* fetchUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${action.payload.id}/isfollowing/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const {result} = yield response.json();
            yield put(
              actions.completeExtraUserFollowFetch(result),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUserFollowFetcch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUserFollowFetcch('CONNECTION FAILED'));
      }
  }
  
  export function* watchFollowingUserFetch() {
    yield takeEvery(
      types.USER_IS_FOLLOWING_FETCH_STARTED,
      fetchUser,
    );
  }

  function* fetchExtraUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
    
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${action.payload.id}/isfollowing/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const {result} = yield response.json();
            yield put(
              actions.completeExtraUserFollowFetch(result),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failExtraUserFollowFetcch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUserFollowFetcch('CONNECTION FAILED'));
      }
  }
  
  export function* watchFollowingExtraUserFetch() {
    yield takeEvery(
      types.EXTRA_USER_IS_FOLLOWING_FETCH_STARTED,
      fetchExtraUser,
    );
  }



  