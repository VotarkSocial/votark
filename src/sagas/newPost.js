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
import * as actions from '../actions/newPost';
import * as types from '../types/post';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import { Actions } from 'react-native-router-flux'
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  function* addingPost(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const user = yield select(selectors.getAuthUserID)
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/post/`,
            {
              method: 'POST',
              body: JSON.stringify({...action.payload,user}),
              headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 201) {
            yield put(actions.completeAddingPost())
          } else {
            const error= yield response.json();
            //yield put(actions.failAddingPost(non_field_errors[0]));
          }
        }
      } catch (error) {
          console.log(error)
        yield put(actions.failAddingPost('CONNECTION FAILED'));
      }
  }
  
  export function* watchAddingPost() {
    yield takeEvery(
      types.POST_ADDED_STARTED,
      addingPost,
    );
  }

  function* pictureSetted(action) {
    if(typeof document !== 'undefined'){
        yield window.location.href = URL+'post/'
      }
      else{
        yield Actions.replace('Post')
      }
  }
  
  export function* watchPictureSetted() {
    yield takeEvery(
      types.PICTURE_SETTED,
      pictureSetted,
    );
  }