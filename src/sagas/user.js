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
import { API_URL, URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/user';
import { Actions } from 'react-native-router-flux';
  
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
              body: JSON.stringify({...action.payload,user:user}),
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
              body: JSON.stringify({...action.payload,user:user}),
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
              actions.completeUnFollowUser(),
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
        const userid = yield select(selectors.getUser)
        if (isAuth && userid.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${userid.id}/isfollowing/`,
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
              actions.completeUserFollowFetch(result),
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
        const userid = yield select(selectors.getExtraUser)
        if (isAuth && userid.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${userid.id}/isfollowing/`,
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


  function* followersFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        const userid = yield select(selectors.getAuthUserID)
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/followers/`,
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
            const normalized = normalize(jsonResult, schemas.users);
            yield put(
            actions.completeFolllwersFetch(
                normalized.entities.users,
                normalized.result,
                userid
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFollowersFetch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFollowersFetch('CONNECTION FAILED'));
      }
  }
  
  export function* watchFollowersFetch() {
    yield takeEvery(
      types.FOLLOWERS_FETCH_STARTED,
      followersFetch,
    );
  }


  function* followingFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/following/`,
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
            const normalized = normalize(jsonResult, schemas.users);
            yield put(
            actions.completeFolllowingFetch(
                normalized.entities.users,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFollowingFetch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFollowingFetch('CONNECTION FAILED'));
      }
  }
  
  export function* watchFollowingFetch() {
    yield takeEvery(
      types.FOLLOWING_FETCH_STARTED,
      followingFetch,
    );
  }


  function* updateUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/`,
            {
              method: 'PATCH',
              body: action.payload,
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            yield put(
            actions.completeUptade(
                jsonResult
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUpdate(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failUpdate('CONNECTION FAILED'));
      }
  }
  
  export function* watchUpdateUser() {
    yield takeEvery(
      types.UPDATE_STARTED,
      updateUser,
    );
  }



  function* deleteUser(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/`,
            {
              method: 'DELETE',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            yield put(
            actions.completeDelete(),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failDelete(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failDelete('CONNECTION FAILED'));
      }
  }
  
  export function* watchDeleteUser() {
    yield takeEvery(
      types.DELETE_STARTED,
      deleteUser,
    );
  }
  


  function* userStoriesFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getUser);
        if (isAuth && user.id) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${user.id}/stories/`,
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
            const normalized = normalize(jsonResult, schemas.users);
            yield put(
            actions.completeStoriesFetch(
                normalized.entities.users,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failStoriesFetch(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failStoriesFetch('CONNECTION FAILED'));
      }
  }
  
  export function* watchUserStoriesFetch() {
    yield takeEvery(
      types.USER_STORIES_STARTED,
      userStoriesFetch,
    );
  }

  function* userFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const id = yield select(selectors.getAuthUserID);
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${action.payload}/`,
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
            yield put(
            actions.completeUsFetch(
                jsonResult
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failUserFetch(non_field_errors[0]));
          }
          if(typeof document !== 'undefined'){
            yield window.location.href = URL+'user/'
          }
          else{
            if(id==action.payload){
              yield Actions.replace('User')
            }
            else {
              yield Actions.User()
            }
          }
        }
      } catch (error) {
        yield put(actions.failUserFetch('CONNECTION FAILED'));
      }
  }
  
  export function* watchCurrentUserFetch() {
    yield takeEvery(
      types.USER_STARTED,
      userFetch,
    );
  }
