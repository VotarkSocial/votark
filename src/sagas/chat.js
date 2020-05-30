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
import * as actions from '../actions/chat';
import * as types from '../types/chat';
import { API_URL } from '../../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/chat';
  
  const API_BASE_URL =  API_URL + 'api/v1';
  
  
  function* chatFetch(action) {
    try {
        const isAuth = yield select(selectors.isAuthenticated);
        const userid = yield select(selectors.getAuthUserID)
        if (isAuth && userid) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}/user/${userid}/chats/`,
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
            const normalized = normalize(jsonResult, schemas.chats);
            yield put(
            actions.completeFetchingChats(
                normalized.entities.chats,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingChats(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingChats('CONNECTION FAILED'));
      }
  }
  
  export function* watchchatFetch() {
    yield takeEvery(
      types.CHATS_FETCHING_STARTED,
      chatFetch,
    );
  }

function* addchat(action) {
    try {
      const isAuth = yield select(selectors.isAuthenticated);   
      console.log(action.payload)
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}/chat/`,
          {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          const chat = yield response.json();
          yield put(
            actions.completeAddingChat(
              action.payload.id,
              chat,
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

  export function* watchchatAddition() {
    yield takeEvery(
      types.CHAT_ADDITION_STARTED,
      addchat,
    );
  }




function* addUser(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);   
    const chatid = yield select(selectors.getChatSelected);
    if (isAuth && chatid) {
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/chat/${chatid}/add/`,
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
        const chat = yield response.json();
        yield put(
          actions.completeAddingUser(),
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

export function* watchAddUserToChat() {
  yield takeEvery(
    types.USER_ADDITION_STARTED,
    addUser,
  );
}

function* addAdmin(action) {
  try {
    const isAuth = yield select(selectors.isAuthenticated);   
    const chatid = yield select(selectors.getChatSelected);
    if (isAuth && chatid) {
      const token = yield select(selectors.getAuthToken);
      const response = yield call(
        fetch,
        `${API_BASE_URL}/chat/${chatid}/add_admin/`,
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
        const chat = yield response.json();
        yield put(
          actions.completeAddingAdmin(),
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

export function* watchAddAdminToChat() {
  yield takeEvery(
    types.ADMIN_ADDITION_STARTED,
    addAdmin,
  );
}