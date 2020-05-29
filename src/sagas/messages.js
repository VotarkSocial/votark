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
import * as actions from '../actions/message';
import * as types from '../types/messages';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/message';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  
  function* messageFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const userid = yield select(selectors.getAuthUserID)
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/chat/${chat.id}/messages/`,
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
            const normalized = normalize(jsonResult, schemas.messages);
            yield put(
            actions.completeFetchingMessages(
                normalized.entities.messages,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingMessages(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingMessages('CONNECTION FAILED'));
      }
  }
  
  export function* watchmessageFetch() {
    yield takeEvery(
      types.MESSAGES_FETCHING_STARTED,
      messageFetch,
    );
  }

function* addmessage(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);   
      const userid = yield select(selectors.getAuthUserID);
      const chatid = yield select(selectors.getChatSelected);
      if (isAuth && chatid && userid) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/message/`,
          {
            method: 'POST',
            body: JSON.stringify({...action.payload,chat:chatid,user:userid}),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          const message = yield response.json();
          yield put(
            actions.completeAddingmessage(
              action.payload.id,
              message,
            ),
          );
        } else {
          // const { non_field_errors } = yield response.json();
          // yield put(actions.failLogin(non_field_errors[0]));
        }
      }
    } catch (error) {
      // yield put(actions.failLogin(''));
    }
  }

  export function* watchmessageAddition() {
    yield takeEvery(
      types.MESSAGE_ADDITION_STARTED,
      addmessage,
    );
  }